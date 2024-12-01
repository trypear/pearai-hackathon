import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "PearAI Hackathon",
  description: "PearAI Hackathon lead by Nang and Frying Pan",
  openGraph: {
    title: "PearAI Hackathon",
    description: "PearAI Hackathon lead by Nang and Frying Pan",
    images: [{
      url: '/pearai-hackathon.png',
      width: 1200,
      height: 630,
      alt: 'PearAI Hackathon'
    }],
    type: 'website',
  },
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
        {children}
      </body>
    </html>
  );
}
