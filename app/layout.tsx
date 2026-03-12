import type { Metadata } from "next";
import { Navbar } from "@/app/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calcoast Logistics",
  description: "Logistics solutions by Calcoast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
