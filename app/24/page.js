import React from 'react'

const page = () => {
    return (
        <main className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] animate-pulse mb-6">
                Time to GiveUp?
            </h1>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl leading-relaxed text-lg animate-fadeIn max-w-2xl">
                I live in the shadow of towering green hand,
                a small structured circle in the middle of the land.
                <div>

                    I rise just enough to disclaim the wet dust,
                    and hold the fierce contest fueled by teenage lust.
                </div>
                <div>

                    I am a boundary drawn, yet my borders are mocked,
                    too minor for notice, too humble for pride.
                </div>
                <div>

                    I host the entire kingdom, but refuse a grand name.
                    The ones who remain together with me have the key.
                </div>
            </div>
        </main>
    )
}

export default page
