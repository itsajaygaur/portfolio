/* Arrows are drawn rather than typed. U+2197 and U+2191 are absent from
   Geist, so each platform resolved them against a different fallback face —
   an emoji font on most phones — and the glyph came out at a different size
   on a real device than on desktop. An SVG cannot drift that way.

   The viewBox is cropped tight to the artwork so the arrow fills its box at
   the small text sizes these links use. */

const arrowProps = {
  viewBox: "0 0 10 10",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "icon-arrow",
  "aria-hidden": true,
  focusable: "false",
} as const;

export function ArrowUpRight() {
  return (
    <svg {...arrowProps}>
      <path d="M1.75 8.25 8.25 1.75" />
      <path d="M3.25 1.75h5v5" />
    </svg>
  );
}

export function ArrowUp() {
  return (
    <svg {...arrowProps}>
      <path d="M5 8.25V1.75" />
      <path d="M2.25 4.5 5 1.75 7.75 4.5" />
    </svg>
  );
}
