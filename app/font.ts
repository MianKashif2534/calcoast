import localFont from "next/font/local";

export const futuraHeavy = localFont({
  src: [
    {
      path: "./fonts/futuraef-heavy.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-futura-heavy",
  display: "swap",
});
