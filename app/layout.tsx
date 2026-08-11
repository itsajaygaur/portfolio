import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import { ProvideTheme } from "./providers";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/nav";
import ScrollReveal from "@/components/scroll-reveal";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: ["Arial", "sans-serif"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  fallback: ["Courier New", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Ajay Gaur - Full-stack Engineer",
    template: "%s | Ajay Gaur",
  },
  description:
    "Ajay Gaur is a full-stack engineer designing and building thoughtful digital products from interface to infrastructure.",
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
    title: "Ajay Gaur - Full-stack Engineer",
    description: "Designing and building thoughtful digital products.",
    siteName: "Ajay Gaur",
    images: [
      {
        url: new URL("/og.png", siteUrl),
        width: 1200,
        height: 630,
        alt: "Ajay Gaur - Full-stack engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@itsajaygaur",
    title: "Ajay Gaur - Full-stack Engineer",
    description: "Designing and building thoughtful digital products.",
    images: [new URL("/og.png", siteUrl)],
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
      <body id="top" className={`${geist.variable} ${geistMono.variable}`}>
        <ProvideTheme>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <Navbar />
          <div className="page-shell">
            <main id="main-content">{children}</main>
          </div>
          <Toaster
            position="bottom-center"
            toastOptions={{
              style: {
                background: "var(--bg)",
                color: "var(--fg)",
                border: "1px solid var(--line)",
                borderRadius: "6px",
                boxShadow: "none",
                fontSize: "0.875rem",
              },
            }}
          />
        </ProvideTheme>
        <ScrollReveal />
        <Analytics />
      </body>
    </html>
  );
}
