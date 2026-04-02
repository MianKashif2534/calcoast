"use client";

import { createContext, useContext, useMemo, useState } from "react";

type ScrollContextValue = {
  scrolled: boolean;
  setScrolled: (next: boolean) => void;
};

const ScrollContext = createContext<ScrollContextValue | null>(null);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  const value = useMemo<ScrollContextValue>(
    () => ({ scrolled, setScrolled }),
    [scrolled],
  );

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
}

export function useScrollState() {
  const ctx = useContext(ScrollContext);
  if (!ctx) {
    throw new Error("useScrollState must be used within <ScrollProvider />");
  }
  return ctx;
}
