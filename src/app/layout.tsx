import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ankit Jha | Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN Stack, Prisma ORM, PostgreSQL, TypeScript, Next.js, and WebSockets",
  openGraph: {
    title: "Ankit Jha | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN Stack, Prisma ORM, PostgreSQL, TypeScript, Next.js, and WebSockets",
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
      "Full Stack Developer specializing in MERN Stack, Prisma ORM, PostgreSQL, TypeScript, Next.js, and WebSockets",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#020817] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}