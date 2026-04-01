"use client";

import dynamic from "next/dynamic";

const Preloader = dynamic(
  () => import("./Preloader").then((m) => m.Preloader),
  { ssr: false }
);

export function AppChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Preloader />
      {children}
    </>
  );
}
