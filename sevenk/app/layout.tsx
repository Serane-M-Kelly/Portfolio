import type { Metadata } from "next";
import { Ghibli, Ghibli_Bold } from "./fonts";

import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seven-K - My Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          Ghibli.variable,
          Ghibli_Bold.variable,
          "antialiased font-ghibli "
        )}
      >
        {children}
      </body>
    </html>
  );
}
