"use client"
import Link from "next/link"
const page = () => {
    return (
        <main className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] animate-pulse mb-6">
                End of Beginning!
            </h1>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl leading-relaxed text-lg animate-fadeIn max-w-2xl">
                <div>

                    Crossroads converge where no compass aligns,
                    Only the mindful discern my signs.
                </div>
                <div>
                    Often I stand, yet my secret is sealed;
                    Rules are my realm, by order revealed.
                </div>
                <div>

                    Doors do not bind me, yet gates I command,
                    I grant no passage to an unready hand.
                </div>
                <div>

                    Neither coin nor code can purchase my grace,
                    Trust not the map, but the mind that guides.
                </div>
                <div>

                    On my verdict the pathway divides.
                    Return when your riddle-born trials are done —
                </div>
                <div>

                    The keeper awaits; key is one.All must earn entry through wit and chase
                </div>
            </div>
            <div className="flex md:flex-row flex-col gap-6 mt-10">
                {/* Back Button */}
                <Link
                    href="/26"
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
            </div>

        </main>
    )
}

export default page
