import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import { RootProvider } from "./rootProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kalt4.vercel.app'),
  title: "Hayriko's Base App",
  description: "Built with OnchainKit on Base",
  manifest: '/manifest.json',
  other: {
    'base:app_id': '697c9550c0622780c63f665b',
    'fc:miniapp': JSON.stringify({
      version: "1", // Versiyon 1 veya next olmalı
      imageUrl: "https://kalt4.vercel.app/logo.png", // 3:2 oranında olmalı
      button: {
        title: "Open Hayriko", // Maksimum 32 karakter
        action: {
          type: "launch_frame", // Bu tip zorunlu
          url: "https://kalt4.vercel.app/",
        }
      }
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sourceCodePro.variable}`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}