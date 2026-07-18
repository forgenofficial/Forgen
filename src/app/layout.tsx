import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap", // CLS improvement — font swap
});

const siteUrl = "https://forgen.co";

// Viewport export (separate from metadata — Next.js 14+ best practice)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // ✅ Unique title with keyword
  title: {
    default: "Forgen",
    template: "%s | Forgen",
  },

  // ✅ Meta description with keywords (150–160 chars)
  description:
    "Forgen offers premium web development, UI/UX design, mobile app development, and custom software solutions for businesses across Kerala and worldwide.",

  // ✅ Targeted keywords (Kerala + services)
  keywords: [
    "web development company Kerala",
    "software company Kerala",
    "React developer Calicut",
    "mobile app development Kerala",
    "UI UX design Kerala",
    "custom software Kerala",
    "Next.js developer Kerala",
    "Flutter developer Kerala",
    "software development company India",
    "web application development",
    "e-commerce development Kerala",
    "startup software development",
    "MVP development",
    "Forgen",
    "forgen.co",
  ],

  authors: [{ name: "Forgen", url: siteUrl }],
  creator: "Forgen",
  publisher: "Forgen",
  category: "Technology",

  // ✅ Robots
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

  // ✅ Open Graph (Facebook, LinkedIn, WhatsApp preview)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Forgen",
    title: "Forgen",
    description:
      "Forgen builds fast, scalable web apps, mobile apps, and custom software for businesses in Kerala and worldwide. Let's build something great together.",
    images: [
      {
        url: "/images/office_collaboration.png",
        width: 1200,
        height: 630,
        alt: "Forgen — Software Development Company in Kerala",
        type: "image/png",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@forgenofficial",
    creator: "@forgenofficial",
    title: "Forgen",
    description:
      "Forgen builds fast, scalable web apps, mobile apps, and custom software for businesses in Kerala and worldwide.",
    images: ["/images/office_collaboration.png"],
  },

  // ✅ Canonical URL
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
    },
  },

  // ✅ Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // ✅ Verification placeholders (add your codes here)
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
    // yandex: "YOUR_YANDEX_CODE",
  },

  // ✅ App info
  applicationName: "Forgen",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
      data-scroll-behavior="smooth"
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
