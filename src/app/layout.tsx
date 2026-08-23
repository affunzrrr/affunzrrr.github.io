import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const title = "Afra Nazeer | Business Analysis & IT Portfolio";
const description =
  "Portfolio of Afra Nazeer, an IT for Business undergraduate and emerging business analyst with strengths in data, communication, leadership, and technology.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: [
    "Afra Nazeer",
    "business analyst",
    "IT for Business",
    "data analysis",
    "information systems",
    "public speaking",
    "Sri Lanka",
  ],
  authors: [{ name: "Afra Nazeer" }],
  creator: "Afra Nazeer",
  category: "portfolio",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon.svg" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "en_LK",
    url: "/",
    title,
    description,
    siteName: "Afra Nazeer",
    firstName: "Afra",
    lastName: "Nazeer",
    images: [
      {
        url: "/images/afra-og.jpg",
        width: 1200,
        height: 630,
        alt: "Afra Nazeer — IT for Business undergraduate and emerging business analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/afra-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f3ed",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
