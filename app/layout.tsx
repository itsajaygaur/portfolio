import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { ProvideTheme, ProvideNextUI } from "./providers";
import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
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
      <body className={`${GeistSans.className} ${poppins.variable} `}>
        <ProvideTheme>
          <ProvideNextUI>
            {children}
            <Toaster />
          </ProvideNextUI>
        </ProvideTheme>
      </body>
    </html>
  );
}
