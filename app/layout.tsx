import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Belidare",
  description: "Belidare a leather belts company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#18181b" />
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PHK5749FM7"></Script>
        <Script id="google-analytics">
          {
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'G-PHK5749FM7');`
          }
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
