import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Inter_Tight } from "next/font/google";



export const metadata: Metadata = {
  title: 'Ballian Cafe & Restaurant | Premium Royal Dining',
  description: 'Experience luxury dining and premium flavors at Ballian Cafe & Restaurant, Raniganj Bazar. Perfect ambience for friends and family.',
  openGraph: {
    "title": "Ballian Cafe & Restaurant",
    "description": "Experience luxury dining.",
    "siteName": "Ballian Cafe"
  },
};

const interTight = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${interTight.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
