import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Fira_Sans } from "next/font/google";

const firasans = Fira_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "John Peter Nuwagaba - Freelance Web Developer",
  description: "Official website for John Peter Nuwagaba, a freelance web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firasans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
