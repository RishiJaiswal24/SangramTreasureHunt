import React from 'react'

const page = () => {
    return (
        <main className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 text-white">

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl leading-relaxed text-lg animate-fadeIn max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] animate-pulse mb-6">
                    Still Here!
                </h1>
                <p>
                    Where the weary rest and hunger meets its end,
                    The guardians blow a chill that never bends.
                    Its breath is cold, its filters hide the proof.
                    Mirage will cry: “The second from the right.”
                    Repeat the lie: “Third left alone is right.”
                    Within the grate, a frosted strip is sealed — decode the ice, the clue will be revealed.
                </p>
            </div>
        </main>
    )
}

export default page
