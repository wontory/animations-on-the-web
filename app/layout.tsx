import type { Metadata } from "next";
import localFont from "next/font/local";

import "~/styles/globals.css";
import { cn } from "~/utils/cn";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Animations on the web",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(geistSans.variable, geistMono.variable, "antialiased")}
      >
        <div className="flex min-h-dvh max-w-dvw flex-col items-center justify-center gap-20 bg-black py-20 text-center">
          {children}
        </div>
      </body>
    </html>
  );
}
