import type { Metadata } from "next";
import { AppChrome } from "@/app/components/AppChrome";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { futuraHeavy } from "@/app/font";
import { ScrollProvider } from "./components/ScrollContext";
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
    <html lang="en" className={futuraHeavy.variable}>
      <body
        className={`${futuraHeavy.className} flex min-h-screen flex-col bg-white antialiased`}
      >
        <ScrollProvider>
          <AppChrome>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </AppChrome>
        </ScrollProvider>
      </body>
    </html>
  );
}
