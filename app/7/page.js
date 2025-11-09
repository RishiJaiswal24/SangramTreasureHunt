import React from 'react'

const page = () => {
    return (
        <main className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 text-white">

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl leading-relaxed text-lg animate-fadeIn max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] animate-pulse mb-6">
                    The Symmetry Principle
                </h1>
                <p>
                    Stand at any point where your reflection is partially visible.
                    Adjust your position until what you see appears balanced but not identical.

                    When symmetry looks slightly wrong yet intentional, you’ve found the marker.
                </p>
            </div>
        </main>
    )
}

export default page
