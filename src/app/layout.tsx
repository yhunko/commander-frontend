import type { Metadata } from "next";
import "./globals.css";
import { cx } from "@/shared/utils";
import { dos } from "@/shared/assets/fonts";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Commander",
  description: "Simple app featuring legendary Commander UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="flex min-h-screen items-center justify-center bg-secondary"
    >
      <body
        className={cx(
          "flex h-full min-h-screen w-full max-w-screen-xl flex-col",
          dos.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
