import type { Metadata } from "next";
import "@/app/globals.css"; // Global CSS import
import { AppChrome } from "@/app/components/AppChrome";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { futuraHeavy } from "@/app/font";
import { ScrollProvider } from "./components/ScrollContext";

export const metadata: Metadata = {
  title: "Calcoast Logistics",
  description: "Logistics solutions by Calcoast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={futuraHeavy.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try {
                if(!sessionStorage.getItem('hasLoaded'))
                  document.documentElement.classList.add('cc-video-loader-pending');
              } catch(e){}
            })()`,
          }}
        />
      </head>

      <body
        className={`${futuraHeavy.className} flex min-h-screen flex-col bg-white antialiased overflow-x-hidden`}
      >
        <ScrollProvider>
          <AppChrome>
            <Navbar />

            <main className="flex-1 pt-[60px] md:pt-0 w-full overflow-x-hidden">
              {children}
            </main>

            <Footer />
          </AppChrome>
        </ScrollProvider>
      </body>
    </html>
  );
}
