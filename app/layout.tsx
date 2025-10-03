import type { Metadata } from "next";
import { Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emilio Dibildox — Portfolio",
  description: "Finance and international business student at Northeastern University. Entrepreneur, Brazilian Jiu-Jitsu practitioner, and builder passionate about bridging traditional finance with innovative technology.",
  keywords: ["Emilio Dibildox", "Portfolio", "Finance", "International Business", "Northeastern University", "Entrepreneur", "Brazilian Jiu-Jitsu", "Boston"],
  authors: [{ name: "Emilio Dibildox" }],
  creator: "Emilio Dibildox",
  openGraph: {
    title: "Emilio Dibildox — Portfolio",
    description: "Finance and international business student at Northeastern University. Entrepreneur, Brazilian Jiu-Jitsu practitioner, and builder passionate about bridging traditional finance with innovative technology.",
    url: "https://emiliodibildox.com",
    siteName: "Emilio Dibildox Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emilio Dibildox — Portfolio",
    description: "Finance and international business student at Northeastern University. Entrepreneur, Brazilian Jiu-Jitsu practitioner, and builder passionate about bridging traditional finance with innovative technology.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
