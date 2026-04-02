"use client";

import dynamic from "next/dynamic";

const VideoLoader = dynamic(() => import("./VideoLoader"), { ssr: false });

export function AppChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VideoLoader /> {/* 👈 replace ho gaya */}
      {children}
    </>
  );
}
