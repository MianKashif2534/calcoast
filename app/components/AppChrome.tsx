"use client";

import VideoLoader from "./VideoLoader";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function AppChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VideoLoader />
      {children}
      <WhatsAppFloat />
    </>
  );
}
