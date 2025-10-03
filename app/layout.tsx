import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
        className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
