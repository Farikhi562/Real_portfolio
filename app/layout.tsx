import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://frikhii.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: "Zan — AI Engineer in the Making",
  description:
    "Personal portfolio of Muhamad Fauzan Al Farikhi, an Informatics student building toward AI Engineering through AI, data, software, and technology projects.",
  applicationName: "Zan — Personal Portfolio",
  openGraph: {
    title: "Zan — AI Engineer in the Making",
    description:
      "Informatics student building toward AI Engineering through AI, data, software, and technology projects.",
    siteName: "Zan — Personal Portfolio",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zan — AI Engineer in the Making" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zan — AI Engineer in the Making",
    description:
      "Informatics student building toward AI Engineering through AI, data, software, and technology projects.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
