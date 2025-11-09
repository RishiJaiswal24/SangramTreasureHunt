import React from 'react'

const page = () => {
    return (
        <main className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] animate-pulse mb-6">
                Think out of the box
            </h1>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl leading-relaxed text-lg animate-fadeIn max-w-2xl">
                <p>
                    Where the walls exhale the ghosts of laughter past,
                    A room that forgets the hours, devours the cast.
                    Cushions sag like old confessions,
                    The air tastes of midnight & half-spoken sessions.
                </p>
            </div>
        </main>
    )
}

export default page
