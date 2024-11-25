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

export const metadata = {
  title: "JesseJesse.com",
  description: "Home is where the heart is...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>JesseJesse.com</title>
        <meta name="title" content="JesseJesse.com" />
        <meta
          name="description"
          content="A Three JS Rendering of the spot with included playlist"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jessejesse.com" />
        <meta property="og:title" content="JesseJesse.com" />
        <meta property="og:site_name" content="JesseJesse.com" />
        <meta
          property="og:description"
          content="A Three JS Rendering of the spot with included playlist"
        />
        <meta
          property="og:image"
          content="https://jessejesse.com/jessejesse.jpeg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jessejesse.com" />
        <meta property="twitter:title" content="JesseJesse.com" />
        <meta
          property="twitter:description"
          content="A Three JS Rendering of the spot with included playlist"
        />
        <meta
          property="twitter:image"
          content="https://jessejesse.com/jessejesse.jpeg"
        />
        <meta name="author" content="Jesse Roper" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        {children}
      </body>
    </html>
  );
}


