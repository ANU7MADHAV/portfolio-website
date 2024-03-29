import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FourthSection from "@/components/hompage/fourthSection/FourthSection";
import Navbar from "@/components/navbar/Navbar";
import { Providers } from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <nav>
            <Navbar />
          </nav>
          <main className="bg-gray-100 px-5 overflow-x-hidden dark:bg-gray-900 overflow-hidden">
            {children}
          </main>
          <footer>
            <FourthSection />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
