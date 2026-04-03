import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Johan Garcia | Integration Engineer",
  description:
    "Integration Engineer with 8+ years of experience designing middleware solutions for Tier-1 banks. Specializing in cloud-native architectures, API gateways, and enterprise integration.",
  keywords: [
    "Integration Engineer",
    "Middleware",
    "IBM",
    "Cloud Native",
    "Docker",
    "OpenShift",
    "API Gateway",
    "ESB",
  ],
  authors: [{ name: "Johan Fernando Garcia Casas" }],
  openGraph: {
    title: "Johan Garcia | Integration Engineer",
    description:
      "Integration Engineer with 8+ years of experience designing middleware solutions for Tier-1 banks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark-600 text-dark-50">
        <div className="scanline-overlay" />
        {children}
      </body>
    </html>
  );
}
