import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhilakshay Anand | Full-Stack Developer",
  description: "This is my portfolio",
  icons: {
    icon: "/pr.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased animated-grid 
        relative bg-[#010713] bg-gradient-to-br from-[#010713] to-[#070716]`}>
        <Navbar />
        <main className="relative z-10 md:mx-28">{children}</main>
      </body>
    </html>
  );
}
