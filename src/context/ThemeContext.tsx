"use client";

import React, { createContext, useState, ReactNode } from "react";

interface ThemeContextType {
  toggle: (value: string) => void;
  mode: string;
}

// export const ThemeContext = createContext<ThemeContextType | undefined>(
//   undefined
// );

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const toggle = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};