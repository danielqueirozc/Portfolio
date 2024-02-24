

import type { Metadata } from "next";

import { heebo } from "./fonts";

import "@/globals.css";

import { ThemeProvider } from "./ThemeProvider"; 

export const metadata: Metadata = {
  title: "Portfolio - Daniel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
