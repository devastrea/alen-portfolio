"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Navbar() {
    const [active, setActive] = useState("about");
    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 , rootMargin:"-50px 0px -50px 0px" } // ← change 0.6 to 0.3
        );
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [])
    const linkstyle = (section: string) =>
        active === section
            ? "text-white font-semibold"
            : "text-[#E0E1DD] hover:text-white";
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#415A77]/60 backdrop-blur-md px-18 py-2 rounded-[15px] flex gap-17 text-[#E0E1DD] shadow-md z-50">
            <Link href="#about" className={linkstyle("about")}>About</Link>
            <Link href="#projects" className={linkstyle("projects")}>Projects</Link>
            <Link href="#contact" className={linkstyle("contact")}>Contact</Link>
        </nav>

    )
}