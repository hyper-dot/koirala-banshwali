import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koirala Samaj",
  description:
    "Koirala Sewa Samaj Nepal is a nonprofit social entity that is devoted to unite all Koiralas across Nepal and the globe. This institution aims to serve and uplift all communities in Nepal through this unity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
