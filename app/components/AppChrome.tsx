"use client";

import VideoLoader from "./VideoLoader";

export function AppChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VideoLoader />
      {children}
    </>
  );
}
