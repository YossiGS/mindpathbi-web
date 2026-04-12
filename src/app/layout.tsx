import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeScript } from "./theme-script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindPath BI — Unified Business Intelligence for SMBs",
  description:
    "One platform for every customer touchpoint. Unified inbox, Client 360, AI copilot, and deep integrations — built for teams that refuse to lose another customer to fragmented tools.",
  keywords: [
    "customer service platform",
    "unified inbox",
    "business intelligence",
    "AI copilot",
    "SMB",
    "client 360",
    "WhatsApp Business",
    "Gmail integration",
    "SAP integration",
    "omnichannel support",
  ],
  openGraph: {
    title: "MindPath BI — Unified Business Intelligence for SMBs",
    description:
      "One platform for every customer touchpoint. Unified inbox, Client 360, AI copilot, and deep integrations.",
    url: "https://mindpathbi.com",
    siteName: "MindPath BI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MindPath BI — Unified Business Intelligence for SMBs",
    description:
      "One platform for every customer touchpoint. Unified inbox, Client 360, AI copilot, and deep integrations.",
  },
  metadataBase: new URL("https://mindpathbi.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
