import React from 'react'

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
        </main>
    )
}

export default page
