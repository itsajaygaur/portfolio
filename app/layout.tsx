import type { Metadata } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import { ProvideTheme } from "./providers";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/nav";
import ScrollReveal from "@/components/scroll-reveal";
import SiteFooter from "@/components/site-footer";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

// Archivo carries a `wdth` axis — display type is set expanded, body at normal width.
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
  variable: "--font-sans",
  fallback: ["Arial", "sans-serif"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
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
      <body id="top" className={`${archivo.variable} ${spaceMono.variable}`}>
        <ProvideTheme>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <Toaster
            position="bottom-center"
            toastOptions={{
              style: {
                background: "var(--paper)",
                color: "var(--ink)",
                border: "2px solid var(--ink)",
                borderRadius: "0",
                boxShadow: "4px 4px 0 var(--ink)",
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.8125rem",
              },
            }}
          />
          <div className="grain" aria-hidden="true" />
        </ProvideTheme>
        <ScrollReveal />
        <Analytics />
      </body>
    </html>
  );
}
