import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import { ProvideTheme } from "./providers";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/nav";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

const lexend = Lexend({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Ajay Gaur - Full Stack Developer",
    template: "%s | Ajay Gaur",
  },
  description: "Personal portfolio website of Ajay Gaur built with Next.js",
  keywords: [
    "next.js",
    "react",
    "react server components",
    "ajay",
    "ajay gaur",
    "full stack developer",
    "frontend developer",
  ],
  twitter: {
    card: "summary_large_image",
    creator: "@itsajaygaur",
    title: "Ajay Gaur",
    description: "Personal portfolio website of Ajay Gaur built with Next.js",
    images: [new URL("/opengraph-image.png", siteUrl)],
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
  authors: [
    {
      name: "Ajay Gaur",
      url: siteUrl,
    },
  ],
  creator: "Ajay Gaur",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${lexend.className} `}>
        <ProvideTheme>
          <main className="max-w-2xl mx-auto pt-5 sm:pt-10 pb-10 sm:pb-20 max-md:px-4">
            <Navbar />
            {children}
          </main>
          <Toaster />
        </ProvideTheme>
        <Analytics />
      </body>
    </html>
  );
}
