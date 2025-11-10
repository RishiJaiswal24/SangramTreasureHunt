"use client"
import Link from "next/link"

const page = () => {
    return (
        <main className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 text-white">

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl leading-relaxed text-lg animate-fadeIn max-w-2xl">
                <p>
                    Solve mini-grid to reveal 6-letter words that tell you which ciphers to use.
                    Convert the binary string to ASCII to get a cipher text.
                    Apply the named cipher to cipher text & break the mirage.
                </p>
                <div>1 20 2</div>
                <div>1 19 8</div>
                <div>01011001 01011010 01011000 01010000 00100000 01010100 01011010 01000111 01010110</div>
            </div>
            <div className="flex md:flex-row flex-col gap-6 mt-10">
                {/* Back Button */}
                <Link
                    href="/3"
                    className="bg-white/20 border border-white/30 text-white px-6 py-2 rounded-full font-medium hover:bg-white/30 hover:scale-105 transition-all duration-200 text-center"
                >
                    ⬅ Back
                </Link>

                {/* Rickroll Button */}
                <button
                    onClick={() =>
                        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
                    }
                    className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-pink-600 hover:scale-105 transition-all duration-200"
                >
                    Never Gonna Give You Up
                </button>

                {/* Next Button */}
                <Link
                    href="/5"
                    className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-200 text-center"
                >
                    Next ➡
                </Link>
            </div>

        </main>
    )
}

export default page
