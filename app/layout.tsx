import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    default: "SVMI — Société de Vente de Moteurs Industriels",
    template: "%s | SVMI Moteurs Industriels",
  },
  description:
    "Société agréée française spécialisée dans la vente de moteurs industriels : moteurs électriques, thermiques, hydrauliques, pneumatiques, servo-moteurs et motoréducteurs. Basée à Vénissieux (69).",
  keywords: [
    "moteurs industriels",
    "vente moteurs",
    "moteurs électriques",
    "moteurs thermiques",
    "moteurs hydrauliques",
    "Vénissieux",
    "Lyon",
    "SVMI",
  ],
  authors: [{ name: "SVMI" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "SVMI — Moteurs Industriels",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
