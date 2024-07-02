import localFont from "next/font/local";

export const dos = localFont({
  src: "./ModernDOS8x16.ttf",
  variable: "--font-dos",
  fallback: ["Courier New", "Courier", "monospace"],
});
