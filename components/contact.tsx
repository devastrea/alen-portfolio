export default function Contact() {
    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center gap-6 px-10">

            {/* Neon Outline Heading */}
            <h1
                className="text-[12vw] font-bold mb-4"
                style={{
                    color: "transparent",
                    WebkitTextStroke: "2px #CCFF00",
                }}
            >
                Contact Me
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-gray-400 font-mono mb-6">
                " I'm always open to discussing new projects, collaborations, or opportunities "
            </p>

            {/* Buttons Row - all on the right */}
            {/* Buttons */}
            <div className="flex justify-between w-full items-end">

                {/* GitHub on the left */}
                <a
                    href="https://github.com/devastrea"
                    target="_blank"
                    className="bg-[#415A77] hover:bg-[#527A99] transition px-8 py-4 rounded-lg text-sm font-semibold"
                >
                    GitHub
                </a>

                {/* Send Email + Download Resume stacked on the right */}
                <div className="flex flex-col gap-3 items-end">
                    <a
                        href="mailto:alensebu2004@gmail.com"
                        className="bg-[#415A77] hover:bg-[#527A99] transition px-8 py-4 rounded-lg text-sm font-semibold"
                    >
                        Send Email
                    </a>
                    <a
                        href="/resume.pdf"
                        download="Alen_Sebastian_Resume.pdf"
                        className="bg-[#415A77] hover:bg-[#527A99] transition px-8 py-4 rounded-lg text-sm font-semibold"
                    >
                        Download Resume
                    </a>
                </div>

            </div>

        </section>
    );
}