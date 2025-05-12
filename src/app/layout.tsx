import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Passionate Frontend Developer showcasing interactive web projects built with React, Sass, Bootstrap, Firebase, and Next.js. From dynamic calculators to AI-assisted e-commerce platforms, I combine core skills with the power of modern tools to deliver responsive, real-world solutions. Explore my portfolio and see how I use code and creativity to solve problems.",
  icons: [
    { url: '/favicon.ico' },
    { url: '/icon.png', type: 'image/png' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
