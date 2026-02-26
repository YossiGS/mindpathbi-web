import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

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
    "business intelligence",
    "unified inbox",
    "CRM",
    "AI copilot",
    "SMB",
    "customer 360",
    "WhatsApp Business",
    "Gmail integration",
    "SAP integration",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.className=t}else if(window.matchMedia("(prefers-color-scheme:light)").matches){document.documentElement.className="light"}}catch(e){}`,
          }}
        />
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
