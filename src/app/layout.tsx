import { Ubuntu, Lora } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/utils/cn";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--lora-font",
});

export const metadata: Metadata = {
  title: "David Acevedo - Frontend Developer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modals,
}: Readonly<{
  children: React.ReactNode;
  modals: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#262626" />
      </head>
      <body className={cn(ubuntu.className, lora.variable, "bg-alt")}>
        {children}
        {modals}
      </body>
    </html>
  );
}
