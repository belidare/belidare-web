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
        
        {/* <!-- Meta Pixel Code --> */}
        <Script id="FB-Pixel">
          {
            `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '514444017918839');
            fbq('track', 'PageView');`
          }
        </Script>
        <noscript><img height="1" width="1" className="hidden" src="https://www.facebook.com/tr?id=514444017918839&ev=PageView&noscript=1" /></noscript>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
