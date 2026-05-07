import type { Metadata } from "next";
import { Literata, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
  display: "swap",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://understandingthaiculture.com"),
  title: {
    default: "Understanding Thai Culture",
    template: "%s · Understanding Thai Culture",
  },
  description:
    "A long-form project on how Thailand actually works. The values, hierarchies, and silences underneath everyday life. For people who love Thailand and want to see past the surface.",
  openGraph: {
    title: "Understanding Thai Culture",
    description:
      "A long-form project on how Thailand actually works. For people who love Thailand and want to see past the surface.",
    type: "website",
    locale: "en_US",
    siteName: "Understanding Thai Culture",
  },
  twitter: {
    card: "summary_large_image",
    title: "Understanding Thai Culture",
    description:
      "A long-form project on how Thailand actually works. For people who love Thailand and want to see past the surface.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${literata.variable} ${inter.variable}`}>
      <body className="min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
