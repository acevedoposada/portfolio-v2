import { SpeedInsights } from "@vercel/speed-insights/next";
import { Ubuntu, Lora } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/utils/cn";
import "./globals.css";
import { Providers } from "./providers";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--ubuntu-font",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--lora-font",
});

export const metadata: Metadata = {
  title: "David Acevedo - Frontend Developer",
  description:
    "I develop accessible, responsive, interactive, and animated websites and applications with a strong focus on performance.",
  metadataBase: new URL("https://www.david-acevedo.tech"),
  keywords: ["Frontend", "Senior", "Creative developer", "Developer Portfolio", "David", "Acevedo"],
  openGraph: {
    title: "David Acevedo - Frontend Developer",
    description:
      "I develop accessible, responsive, interactive, and animated websites and applications with a strong focus on performance.",
    url: "https://www.david-acevedo.tech",
    images: [
      {
        url: "https://www.david-acevedo.tech/_next/image?url=%2Fstatic%2Fimages%2Fdavid-acevedo.webp&w=384&q=75",
        width: 630,
        height: 630,
        alt: "My personal picture",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#262626" />
      </head>
      <body
        className={cn(
          ubuntu.className,
          lora.variable,
          ubuntu.variable,
          "w-screen overflow-x-hidden bg-alt"
        )}
      >
        <Providers>
          {children}
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
