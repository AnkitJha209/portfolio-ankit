import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Optimize font loading with display swap
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Ankit Jha | Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN Stack, Prisma ORM, PostgreSQL, TypeScript, Next.js, and WebSockets. View my portfolio of projects and skills.",
  keywords:
    "Full Stack Developer, React, Next.js, Node.js, MongoDB, PostgreSQL, TypeScript, Web Development, Portfolio",
  authors: [{ name: "Ankit Jha" }],
  creator: "Ankit Jha",
  publisher: "Ankit Jha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ankitjha.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ankit Jha | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN Stack, Prisma ORM, PostgreSQL, TypeScript, Next.js, and WebSockets. View my portfolio of projects and skills.",
    url: "https://ankitjha.dev",
    siteName: "Ankit Jha Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ankit Jha - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Jha | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN Stack, Prisma ORM, PostgreSQL, TypeScript, Next.js, and WebSockets. View my portfolio of projects and skills.",
    images: ["/og-image.png"],
    creator: "@ankitjha",
  },
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
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.className} bg-[#020817] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
