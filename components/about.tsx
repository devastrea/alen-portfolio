export default function About() {
    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center gap-10 px-20">

            {/* steve jobs quote block */}

            <div className="text-right w-full">
                <p className="text-4xl font-bold leading-snug">"Design is not just what it looks like and feel like.<br />
                    Design is how it works."</p>
                <p className="text-3xl font-semibold mt-2 text-yellow-300">-Steve Jobs</p>
            </div>

            {/* code block */}

            <div className="bg-[#1B263B] rounded-2xl p-10 text-base w-full max-w-2xl self-start" style={{fontFamily: "Courier New, monospace"}}>
                <p><span className="text-pink-400"style={{fontFamily: "Courier New, monospace"}}>const</span> <span className="text-blue-400">developer</span> = {"{"}</p>
                <div className="ml-6 flex flex-col gap-1 mt-2" style={{fontFamily:"Courier New, monospace"}}>
                    <p><span className="text-white">name:</span> <span className="text-green-400">"Alen Sebastian"</span>,</p>
                    <p><span className="text-white">role:</span> <span className="text-green-400">"Web Developer"</span>,</p>
                    <p><span className="text-white">stack:</span> [<span className="text-yellow-400">"React"</span>,<span className="text-yellow-400">"Node"</span>,<span className="text-yellow-400">"MongoDB"</span>,<span className="text-yellow-400">"Figma"</span>],</p>
                    <p><span className="text-white">passion:</span> <span className="text-green-400">"Building great apps"</span>,</p>
                    <p><span className="text-white">focus:</span> [<span className="text-yellow-400">"Full Stack Development"</span>,<span className="text-yellow-400">"UI/UX"</span>],</p>
                    <p><span className="text-white">currentlyLearning:</span> <span className="text-green-400">"Advanced React & System Design"</span></p>
                </div>
                <p className="mt-2">{"}"}</p>
            </div>

            {/* moving tech badges */}

            <div className="w-full overflow-hidden relative mt-45" style={{zIndex: 0}}>
                <div className="flex gap-7 animate-marquee whitespace-nowrap">
                    <div className="bg-[#1B263B] px-6 py-3 rounded-xl font-mono font-bold text-lg">React ⚛️</div>
                    <div className="bg-[#1B263B] px-6 py-3 rounded-xl font-mono font-bold text-lg">nodejs 🟩</div>
                    <div className="bg-[#1B263B] px-6 py-3 rounded-xl font-mono font-bold text-lg">mongoDB 🍃</div>
                    <div className="bg-[#1B263B] px-6 py-3 rounded-xl font-mono font-bold text-lg">Firebase 🔥</div>

                    {/* Duplicate for seamless loop */}
                    
                    <div className="bg-[#1B263B] px-6 py-3 rounded-xl font-mono font-bold text-lg">React ⚛️</div>
                    <div className="bg-[#1B263B] px-6 py-3 rounded-xl font-mono font-bold text-lg">nodejs 🟩</div>
                    <div className="bg-[#1B263B] px-6 py-3 rounded-xl font-mono font-bold text-lg">mongoDB 🍃</div>
                    <div className="bg-[#1B263B] px-6 py-3 rounded-xl font-mono font-bold text-lg">Firebase 🔥</div>

                    {/* fill the line */}

                    <div className="bg-[#1B263B] px-6 py-3 rounded-xl font-mono font-bold text-lg">React ⚛️</div>
                    <div className="bg-[#1B263B] px-6 py-3 rounded-xl font-mono font-bold text-lg">nodejs 🟩</div>
                    <div className="bg-[#1B263B] px-6 py-3 rounded-xl font-mono font-bold text-lg">mongoDB 🍃</div>
                    <div className="bg-[#1B263B] px-6 py-3 rounded-xl font-mono font-bold text-lg">Firebase 🔥</div>

                    {/* Duplicate for seemless */}

                    <div className="bg-[#1B263B] px-6 py-3 rounded-xl font-mono font-bold text-lg">React ⚛️</div>
                    <div className="bg-[#1B263B] px-6 py-3 rounded-xl font-mono font-bold text-lg">nodejs 🟩</div>
                    <div className="bg-[#1B263B] px-6 py-3 rounded-xl font-mono font-bold text-lg">mongoDB 🍃</div>
                </div>
            </div>

        </section>
    )
}