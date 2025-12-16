import type { Metadata } from "next";
import { Inter, Poppins, Lexend } from "next/font/google";
// import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { ProvideTheme } from "./providers";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/nav";

// const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  fallback: ["sans-serif"],
});

const lexend = Lexend({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
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
    "frontend developer"
  ],
  twitter: {
    card: "summary_large_image",
    creator: "@itsajaygaur",
    title: "Ajay Gaur",
    description: "Personal portfolio website of Ajay Gaur built with Next.js",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL!}/opengraph-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [
    {
      name: "Ajay Gaur",
      url: process.env.NEXT_PUBLIC_BASE_URL,
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
            <main className="max-w-2xl mx-auto pt-5 sm:pt-10 pb-10 sm:pb-20 max-md:px-4" >
            <Navbar />
              {children}
            </main>
            <Toaster />
        </ProvideTheme>
      </body>
    </html>
  );
}
