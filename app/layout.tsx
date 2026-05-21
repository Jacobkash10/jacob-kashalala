import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jacob Kashalala | Full-Stack Developer",
    template: "%s | Jacob Kashalala",
  },
  description:
    "Portfolio moderne de Jacob Kashalala, développeur Full-Stack spécialisé en Next.js, React, TypeScript et plateformes web.",
  keywords: [
    "Jacob Kashalala",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Jacob Kashalala" }],
  openGraph: {
    title: "Jacob Kashalala | Full-Stack Developer",
    description:
      "Portfolio moderne de Jacob Kashalala, développeur Full-Stack spécialisé en Next.js, React et TypeScript.",
    type: "website",
    locale: "fr_FR",
    siteName: "Jacob Kashalala Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}