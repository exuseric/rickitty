import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const work_sans = Work_Sans({subsets: ["latin"], weight: "400"})

export const metadata: Metadata = {
  title: "Rickitty",
  description: "Explore the rick and morty world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={work_sans.className}>{children}</body>
    </html>
  );
}
