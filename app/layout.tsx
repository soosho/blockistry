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
  title: "Blockistry - Blockchain Industrial Solutions",
  description: "Leading blockchain industrial solutions provider. We help businesses transform their operations with cutting-edge blockchain technology, smart contracts, and decentralized systems.",
  keywords: "blockchain, industrial, smart contracts, decentralized, web3, enterprise blockchain, supply chain, digital transformation",
  authors: [{ name: "Blockistry" }],
  openGraph: {
    title: "Blockistry - Blockchain Industrial Solutions",
    description: "Leading blockchain industrial solutions provider. Transform your business with cutting-edge blockchain technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
