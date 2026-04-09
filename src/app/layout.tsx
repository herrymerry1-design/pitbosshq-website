import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PitBoss HQ — Software for Casino Party Operators",
  description:
    "The all-in-one booking, staffing, and operations platform built specifically for casino party operators. Replace your spreadsheets with one powerful system.",
  keywords: [
    "casino party software",
    "casino party booking",
    "fun casino hire software",
    "event staffing software",
    "casino party operators",
    "NACPO",
  ],
  openGraph: {
    title: "PitBoss HQ — Software for Casino Party Operators",
    description:
      "The all-in-one booking, staffing, and operations platform built specifically for casino party operators.",
    url: "https://pittbosshq.com",
    siteName: "PitBoss HQ",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}