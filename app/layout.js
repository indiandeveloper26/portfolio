import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.js ya app/page.js ke top me
export const metadata = {
  title: "Full Stack Website & App Developer | MERN · Next.js · React Native · Telegram Bots Portfolio| Web Developer Portfolio",
  description:
    "I’m Your Name, a front-end web developer and designer specializing in modern, responsive websites and React/Next.js apps. Check out my projects, skills, and experience.",
  keywords: [
    "web developer portfolio",
    "front-end developer",
    "Next.js developer",
    "React portfolio",
    "Freelance web developer",
    "Your Name portfolio",
  ],
  authors: [{ name: "Suraj gaud", url: "https://www.codeworld26.com/" }],
  openGraph: {
    title: "Full Stack Website & App Developer | MERN · Next.js · React Native · Telegram Bots Portfolio",
    description:
      "Modern responsive web development portfolio built with Next.js showcasing my projects and skills.",
    url: "https://www.codeworld26.com/",
    siteName: "suraj gaud Portfolio",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // apne project ke OG image ka URL
        width: 1200,
        height: 630,
        alt: "Your Name Portfolio Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack Website & App Developer | MERN · Next.js · React Native · Telegram Bots Portfolio| Web Developer Portfolio",
    description:
      "Explore my web developer portfolio — projects, design work, and experience.",
    creator: "@your_twitter_handle", // optional
    images: ["https://yourwebsite.com/og-image.jpg"],
  },
  metadataBase: new URL("https://yourwebsite.com"),
};


export default function RootLayout({ children }) {
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
