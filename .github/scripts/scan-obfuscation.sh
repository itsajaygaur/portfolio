#!/usr/bin/env bash
#
# Static scan for obfuscated / dynamically-executed JavaScript in tracked source.
#
# Motivated by a real incident in this repository: an obfuscated loader was
# appended to postcss.config.js after the legitimate `module.exports` block, so
# the file still worked as a PostCSS config while executing a payload on every
# `next build`. This scan looks for the markers that attack actually used.
#
# Deliberately dependency-free (git + grep + awk only) so it never has to
# install or execute project code in order to check it.
#
# Run locally: bash .github/scripts/scan-obfuscation.sh

set -uo pipefail

MAX_LINE_LEN=500          # longest legitimate line in this repo is ~200
MAX_B64_RUN=200           # contiguous base64-ish run length
SELF=".github/scripts/scan-obfuscation.sh"

# Tracked source files only. package-lock.json is excluded: its long lines and
# base64 integrity hashes are guaranteed false positives. This script is
# excluded because it necessarily contains the patterns it searches for.
mapfile -t FILES < <(
  git ls-files '*.js' '*.mjs' '*.cjs' '*.ts' '*.tsx' '*.jsx' \
    | grep -v -e '^package-lock\.json$' -e "^${SELF}$"
)

if [ ${#FILES[@]} -eq 0 ]; then
  echo "No source files to scan."
  exit 0
fi

findings=0

report() {
  findings=$((findings + 1))
  echo ""
  echo "::error::[$1] $2"
  echo "  why: $3"
}

echo "Scanning ${#FILES[@]} tracked source file(s)…"

# 1. Overlong lines — the strongest generic signal for an appended payload.
#    A minified bundle does not belong in hand-written source in this repo.
while IFS= read -r hit; do
  [ -z "$hit" ] && continue
  report "long-line" "$hit" \
    "line exceeds ${MAX_LINE_LEN} chars; obfuscated payloads are typically appended as one very long line"
done < <(
  for f in "${FILES[@]}"; do
    awk -v m="$MAX_LINE_LEN" -v f="$f" \
      'length($0) > m { print f ":" NR " (" length($0) " chars)"; exit }' "$f"
  done
)

# 2. Character-code string builders — core of the packer used against this repo.
while IFS= read -r hit; do
  [ -z "$hit" ] && continue
  report "charcode-packer" "$hit" \
    "String.fromCharCode is used to rebuild hidden strings at runtime"
done < <(grep -nE 'String\.fromCharCode|fromCharCode\s*\(' "${FILES[@]}" 2>/dev/null)

# 3. Dynamic execution.
while IFS= read -r hit; do
  [ -z "$hit" ] && continue
  report "dynamic-exec" "$hit" \
    "eval / Function-constructor executes code built at runtime, defeating review"
done < <(grep -nE '\beval\s*\(|new[[:space:]]+Function\s*\(|\[[[:space:]]*.constructor.[[:space:]]*\]' "${FILES[@]}" 2>/dev/null)

# 4. Module-system hijack — how the loader reached require() from a config file.
#    The subscript may itself contain brackets (global[_$_1e42[0]] = require), so
#    match greedily to the last ']' before the assignment rather than the first.
while IFS= read -r hit; do
  [ -z "$hit" ] && continue
  report "module-hijack" "$hit" \
    "assigning require/module onto a global lets injected code reach Node built-ins"
done < <(grep -nE '(global|globalThis)\[.*\][[:space:]]*=[[:space:]]*(require|module)\b' "${FILES[@]}" 2>/dev/null)

# 5. Obfuscator-mangled identifiers (_$_1e42 style).
while IFS= read -r hit; do
  [ -z "$hit" ] && continue
  report "mangled-identifier" "$hit" \
    "identifier pattern characteristic of automated JavaScript obfuscators"
done < <(grep -nE '(^|[^A-Za-z0-9_])_\$_[A-Za-z0-9]+' "${FILES[@]}" 2>/dev/null)

# 6. Large embedded base64 blobs.
while IFS= read -r hit; do
  [ -z "$hit" ] && continue
  report "base64-blob" "$hit" \
    "long base64 run may be an embedded encoded payload"
done < <(grep -nE "[A-Za-z0-9+/]{${MAX_B64_RUN},}={0,2}" "${FILES[@]}" 2>/dev/null)

echo ""
if [ "$findings" -gt 0 ]; then
  echo "FAILED: $findings suspicious pattern(s) found."
  echo ""
  echo "If a finding is a legitimate false positive, do not weaken this scan"
  echo "globally — narrow the specific pattern, or move the offending code into"
  echo "a reviewed, clearly-named file and document why."
  exit 1
fi

echo "PASSED: no obfuscation or dynamic-execution markers found."
