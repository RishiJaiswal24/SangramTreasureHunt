"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 text-white">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl leading-relaxed text-lg animate-fadeIn max-w-2xl">
        <p>
          Silence speaks in primes & mirrors each shelf guards a modded echo.
          Letters are just numbers pretending to read:
          76, 73, 66, 82, 65, 82, 89 & descend all the numbers from the cube of
          a cube root but not of a cube. Whose square is a mirror & base is a
          loop & find your destiny by decoding it.
        </p>
      </div>

      <div className="flex md:flex-row flex-col gap-6 mt-10">

        <button
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
          }
          className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-pink-600 hover:scale-105 transition-all duration-200"
        >
          Never Gonna Give You Up
        </button>

        <button
          onClick={() => router.push("/2")}
          className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-200"
        >
          Next ➡
        </button>
      </div>
    </main>
  );
};

export default Page;
