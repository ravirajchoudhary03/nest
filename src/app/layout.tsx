import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEST 2026 - National Entrance Screening Test",
  description:
    "NEST 2026 - National Entrance Screening Test for admission to NISER and UM-DAE CEBS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
