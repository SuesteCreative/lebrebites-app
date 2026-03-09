import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "LebreBites | Gastronomia & Roteiros",
  description: "Críticas para paladares exigentes. A maior comunidade de reviews gastronómicas focadas em pratos icónicos.",
  keywords: ["gastronomia", "reviews", "restaurantes", "pratos", "michelin", "lebrebites"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased bg-background`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
