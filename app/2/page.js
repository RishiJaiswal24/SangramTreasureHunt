import React from 'react'

const page = () => {
    return (
        <main className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 text-white">
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] animate-pulse mb-6">
                The Founder’s Fourth
            </h1>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl leading-relaxed text-lg animate-fadeIn max-w-2xl">
                <p>
                    Count the fourth brick from the left on the oldest wall in the courtyard. Beneath its shadow at noon the day after a Friday, whisper “seven” and the bench will answer. (If it doesn’t, try again on a Tuesday.)</p>
            </div>

        </main>
    )
}

export default page
