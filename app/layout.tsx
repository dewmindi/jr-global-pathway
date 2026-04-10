import type { Metadata } from "next/types";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SmoothScrollProvider from "./providers/SmoothScrollProvider";


import { SoundProvider } from "@/app/contexts/SoundContext";
import SoundToggle from "@/components/SoundToggle";
import RouteChangeHandler from "@/components/RouteChangeHandler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JR Global Pathways",
  description: "Turn your study abroad dreams into reality with JR Global Pathways - your trusted partner for seamless international education experiences.",

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SoundProvider>
          <RouteChangeHandler />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
          <SoundToggle />
        </SoundProvider>
      </body>
    </html>
  );
}
