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
    url: "https://pitbosshq.com",
    siteName: "PitBoss HQ",
    type: "website",
    images: [
      {
        url: "https://www.pitbosshq.com/og-image.png",
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
    images: ["https://www.pitbosshq.com/og-image.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/69ddc52fd40df41c35757615/1jm54kggd';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}