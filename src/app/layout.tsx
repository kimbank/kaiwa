import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaiwa",
  description: "Japanese language learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="" translate="no">
      <body>{children}</body>
    </html>
  );
}
