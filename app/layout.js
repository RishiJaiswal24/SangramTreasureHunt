import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Find the Treasure in You",
  description: "A journey through curiosity and discovery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen overflow-x-hidden m-0 p-0`}
        style={{
          backgroundImage: `url("/bgImage.jpeg")`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center",
        }}
      >
        {/* Dark + blur overlay */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            backdropFilter: "blur(6px)",
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            zIndex: -1,
          }}
        />

        {/* Translucent content container */}
        <main
          className="flex items-center justify-center min-h-screen p-4"
        >
          <div
            className="w-[95vw] md:w-[80vw] rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.4)] 
                       backdrop-blur-xl bg-white/20 py-5 
                       transition-all duration-300"
          >
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
