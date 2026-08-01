const LOCAL_SITE_URL = "http://localhost:3000";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_BASE_URL?.trim() || LOCAL_SITE_URL;
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
