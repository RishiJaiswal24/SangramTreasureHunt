import React from 'react'

const page = () => {
    return (
        <main className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 text-white">

            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] animate-pulse mb-6">
                Boy's Hostel
            </h1>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl leading-relaxed text-lg animate-fadeIn max-w-2xl">
                <div>
                    I am stationary giant, felled from sky.
                    My true work begins where the light meets the eye.
                </div>
                <div>
                    I manage extremes without ever a sound,
                    one vein brings the warmth, the other, the frostbound.
                </div>
                <div>
                    I possess, I stand steady toward all internal debate,
                    providing true balance before it's too late
                </div>
            </div>
        </main>
    )
}

export default page
