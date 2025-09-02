import { Metadata } from "next";

export const metadata: Metadata = {
  title: "David Acevedo - Frontend Development Blog",
  description:
    "Explore articles and guides on frontend development, web performance, animations, accessibility, and creative coding.",
  metadataBase: new URL("https://www.david-acevedo.tech"),
  keywords: [
    "Frontend Blog",
    "React",
    "Next.js",
    "Web Animations",
    "Web Performance",
    "Web Accessibility",
    "Creative Development",
    "Programming Articles",
    "David Acevedo",
  ],
  openGraph: {
    title: "David Acevedo - Frontend Development Blog",
    description:
      "Explore articles and guides on frontend development, web performance, animations, accessibility, and creative coding.",
    url: "https://www.david-acevedo.tech/my/blog",
    images: [
      {
        url: "/static/images/blog-cover.webp",
        width: 1200,
        height: 630,
        alt: "David Acevedo's Frontend Development Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Acevedo - Frontend Development Blog",
    description:
      "Explore articles and guides on frontend development, web performance, animations, accessibility, and creative coding.",
    images: ["/static/images/blog-cover.webp"],
    creator: "@AcevedoChris90",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
