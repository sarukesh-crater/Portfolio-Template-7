import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abisheak | Video Editor & Motion Designer",
  description:
    "Abisheak is a video editor and motion designer creating SaaS animations, cinematic edits, and kinetic visual stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
