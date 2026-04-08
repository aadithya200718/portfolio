import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manaadithya.s | Portfolio",
  description: "Techie. Innovator. Creator. — Personal portfolio of Manaadithya.s",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark antialiased`}>
      <body className="bg-black text-white overflow-hidden">{children}</body>
    </html>
  );
}
