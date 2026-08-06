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

const SITE_URL = "https://johangarcia.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Johan Garcia | Integration Engineer",
  description:
    "Integration Engineer with 8+ years building enterprise middleware on IBM Integration Bus (IIB/ACE) and IBM MQ for Tier-1 banks processing 500K+ daily transactions. ESQL, DFDL, DataPower, Docker, OpenShift and CI/CD. Atlanta, GA.",
  keywords: [
    "Integration Engineer",
    "Middleware",
    "IBM MQ",
    "IBM Integration Bus",
    "IIB",
    "IBM App Connect Enterprise",
    "ESQL",
    "DFDL",
    "IBM DataPower",
    "WSRR",
    "Cloud Native",
    "Docker",
    "OpenShift",
    "AWS",
    "API Gateway",
    "ESB",
    "COBOL",
    "AI-Assisted Development",
  ],
  authors: [{ name: "Johan Fernando Garcia Casas", url: SITE_URL }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Johan Garcia | Integration Engineer",
    description:
      "Integration Engineer with 8+ years building enterprise middleware on IBM Integration Bus and IBM MQ for Tier-1 banks processing 500K+ daily transactions.",
    type: "website",
    url: SITE_URL,
    siteName: "Johan Garcia — Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johan Garcia | Integration Engineer",
    description:
      "Integration Engineer with 8+ years building enterprise middleware on IBM Integration Bus and IBM MQ for Tier-1 banks processing 500K+ daily transactions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Johan Fernando Garcia Casas",
  alternateName: "Johan Garcia",
  jobTitle: "Integration Engineer",
  url: SITE_URL,
  email: "mailto:jfgc1394@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/in/njogaca/",
    "https://github.com/njogaca",
  ],
  knowsAbout: [
    "Enterprise Integration",
    "IBM MQ",
    "IBM Integration Bus",
    "IBM App Connect Enterprise",
    "IBM DataPower",
    "IBM WSRR",
    "ESQL",
    "DFDL",
    "Docker",
    "OpenShift",
    "AWS",
    "COBOL",
    "AI-Assisted Development",
    "Claude Code",
  ],
  knowsLanguage: [
    { "@type": "Language", name: "Spanish" },
    { "@type": "Language", name: "English" },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad Central de Colombia",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "AWS Technical Professional",
    credentialCategory: "certificate",
    recognizedBy: { "@type": "Organization", name: "Amazon Web Services" },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div className="scanline-overlay" />
        {children}
      </body>
    </html>
  );
}
