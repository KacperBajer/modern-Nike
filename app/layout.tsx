import type { Metadata } from "next";
import { Merriweather, Nunito, Roboto } from 'next/font/google'
import "./globals.css";

const roboto = Nunito({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Modern nike",
  description: "This is modern nike clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
