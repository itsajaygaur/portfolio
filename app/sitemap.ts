const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default function sitemap() {
  return [
    {
      url: BASE_URL,
      priority: 1,
    },
    {
      url: BASE_URL + "/v2",
      priority: 1,
    },
  ];
}
