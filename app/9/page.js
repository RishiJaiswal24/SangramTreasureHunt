import React from 'react'

const page = () => {
    return (
        <main className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 text-white">

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl leading-relaxed text-lg animate-fadeIn max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-extrabold text-green-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] animate-pulse mb-6">
                    Yaah There
                </h1>
                <p>
                    I stand where green fingers reach for the sky,
                    Petals and leaves in the sunlight lie.
                    Find the spot where three friends grow tall — a lizard, a spiky one, and one that smells better at all.
                    Beneath the middle, dig just a hand deep,
                    Your prize awaits where the roots quietly sleep.
                </p>
            </div>
        </main>
    )
}

export default page
