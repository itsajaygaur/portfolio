const PRODUCTION_SITE_URL = "https://ajaygaur.in";
const LOCAL_SITE_URL = "http://localhost:3000";

function resolveConfiguredUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_BASE_URL?.trim();

  if (configuredUrl) {
    return configuredUrl;
  }

  // Social crawlers cannot fetch localhost, so only fall back to it while
  // developing. Anywhere else the canonical domain is the safe default.
  return process.env.NODE_ENV === "development" ? LOCAL_SITE_URL : PRODUCTION_SITE_URL;
}

export function getSiteUrl() {
  const configuredUrl = resolveConfiguredUrl();
  const hasProtocol = /^[a-z][a-z\d+.-]*:\/\//i.test(configuredUrl);

  if (hasProtocol) {
    return new URL(configuredUrl);
  }

  const protocol =
    configuredUrl.startsWith("localhost") || configuredUrl.startsWith("127.0.0.1")
      ? "http"
      : "https";

  return new URL(`${protocol}://${configuredUrl}`);
}
