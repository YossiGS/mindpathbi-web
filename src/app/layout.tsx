import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeScript } from "./theme-script";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/providers/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MindPath BI — Every rep, a technical seller.",
  description:
    "Your catalog, your contracts, your guides — answering beside every conversation. A classified brief on the unified inbox built for technical sales.",
  keywords: [
    "unified inbox",
    "technical sales",
    "AI copilot",
    "sales enablement",
    "customer conversations",
    "knowledge retrieval",
    "grounded AI",
    "conversation intelligence",
  ],
  openGraph: {
    title: "MindPath BI — Every rep, a technical seller.",
    description:
      "Your catalog, your contracts, your guides — answering beside every conversation.",
    url: "https://mindpathbi.com",
    siteName: "MindPath BI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MindPath BI — Every rep, a technical seller.",
    description:
      "Your catalog, your contracts, your guides — answering beside every conversation.",
  },
  metadataBase: new URL("https://mindpathbi.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          <TooltipProvider delayDuration={120}>
            {children}
            <Toaster position="bottom-right" />
          </TooltipProvider>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
