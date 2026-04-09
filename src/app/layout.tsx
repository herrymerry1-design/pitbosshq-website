import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PitBoss HQ — Software for Casino Party Operators",
  description:
    "The all-in-one booking, staffing, and operations platform built specifically for casino party operators. Replace your spreadsheets with one powerful system.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "PitBoss HQ — Software for Casino Party Operators",
    description:
      "The all-in-one booking, staffing, and operations platform built specifically for casino party operators.",
    url: "https://pittbosshq.com",
    siteName: "PitBoss HQ",
    type: "website",
    images: [
      {
        url: "https://www.pittbosshq.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "PitBoss HQ — Software for Casino Party Operators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PitBoss HQ — Software for Casino Party Operators",
    description:
      "The all-in-one booking, staffing, and operations platform built specifically for casino party operators.",
    images: ["https://www.pittbosshq.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}