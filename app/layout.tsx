import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
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
  title: "LebreBites | Gastronomia de Elite para os Exigentes",
  description: "A maior comunidade de reviews gastronómicas focadas em pratos icónicos. Descobre os melhores restaurantes, rankings de sobremesas, pastas e muito mais. Onde cada dentinho conta.",
  keywords: ["gastronomia", "reviews", "restaurantes", "pratos", "michelin", "lebrebites"],
  openGraph: {
    title: "LebreBites | Gastronomia de Elite",
    description: "A plataforma para quem leva a comida a sério.",
    type: "website",
    locale: "pt_PT",
  }
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
