import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Path from "@/components/Path";

const pixelify = Pixelify_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Dmytro Shchepinskyi",
  description: "Dmytro Shchepinskyi's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pixelify.className}>
        <main className="grid grid-rows-[25px_50px_1fr] bg-slate-900 h-screen w-screen text-white">
          <Path />
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
