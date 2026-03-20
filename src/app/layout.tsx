import { Syne, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import EditorShell from "../components/EditorShell";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${geistMono.variable} antialiased editor-bg`}
      >
        <EditorShell>{children}</EditorShell>
      </body>
    </html>
  );
}

