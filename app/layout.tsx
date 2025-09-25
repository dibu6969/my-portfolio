import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora, SUSE } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

const suse = SUSE({
  variable: "--font-suse",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emilio Dibildox — Portfolio",
  description: "Student, builder, and entrepreneur in Boston. Projects, experience, and contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${suse.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
