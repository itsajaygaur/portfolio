import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import Navbar from "@/components/nav";
import Footer from "@/components/footer";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

/* Runs before first paint so the correct theme is in place with no flash.
   Always writes an explicit class, which keeps the .dark selectors in
   globals.css authoritative for both tokens and the toggle's icons. */
const themeScript = `(function(){var t;try{t=localStorage.getItem("theme")}catch(e){}\
if(t!=="dark"&&t!=="light"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}\
document.documentElement.classList.add(t)})()`;

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Ajay Gaur — Full-stack engineer",
    template: "%s | Ajay Gaur",
  },
  description:
    "Ajay Gaur is a full-stack engineer building products for web and mobile, from interface to infrastructure.",
  keywords: [
    "Ajay Gaur",
    "full-stack engineer",
    "product engineer",
    "Next.js developer",
    "React developer",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Ajay Gaur — Full-stack engineer",
    description: "Building products for web and mobile.",
    siteName: "Ajay Gaur",
    images: [
      {
        url: new URL("/og.png", siteUrl),
        secureUrl: new URL("/og.png", siteUrl),
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Ajay Gaur — Full-stack engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@itsajaygaur",
    title: "Ajay Gaur — Full-stack engineer",
    description: "Building products for web and mobile.",
    images: [
      {
        url: new URL("/og.png", siteUrl),
        alt: "Ajay Gaur — Full-stack engineer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Ajay Gaur", url: siteUrl }],
  creator: "Ajay Gaur",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body id="top" className={geist.variable}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <div className="page-shell">
          <main id="main-content">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
