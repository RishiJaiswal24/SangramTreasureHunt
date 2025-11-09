"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center text-white overflow-hidden font-sans">
      {/* Floating glowing background orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-3xl animate-pulse" />

      {/* Main Content */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-300 drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] mb-4 animate-pulse">
          Find the Treasure in You
        </h1>
      <section className="relative z-10 max-w-3xl px-6 py-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl">

        <p className="text-lg md:text-xl text-gray-300 mb-6">
          🧭 The journey begins with curiosity. Decode. Discover. Dominate.
        </p>

        {/* Mysterious Prologue */}
        <div className="text-gray-300 text-base md:text-lg space-y-3 mb-10 leading-relaxed">
          <p>
            Somewhere within these digital walls lies a secret — a whisper left by those who sought before you.
            Not all clues are true, and not every truth will guide you. Some paths lead only to confusion...
          </p>
          <p className="italic text-yellow-200/80">
            “The first step is not to rush — for those who hurry often miss the signs right before their eyes.”
          </p>
          <p>
            The pages you’ll open, the hints you’ll chase — all are pieces of something bigger.
            What that “something” is, only the patient will uncover.
          </p>
        </div>

        

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://docs.google.com/document/d/1vYga_7F5ZETKL7EMnebChilKGgYxxbjcZzbMz1zfPLY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-105 transition-all">
              📜 Code of Conduct
            </Button>
          </Link>

          <Link href="/login">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-full border border-gray-600 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transition-all">
              🔐 Login
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Sangram 2.0 – Treasure Hunt
      </footer>
    </main>
  );
}
