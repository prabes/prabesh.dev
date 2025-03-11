import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Navigation from "@/container/AllBars/Navigation"
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "prabesh.dev",
  description: "Digitally Prabesh!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <Navigation>{children}</Navigation>
      </body>
    </html>
  );
}
