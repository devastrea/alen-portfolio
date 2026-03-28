import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";
export default function Home(){
  return(
    <main className="bg-[#0D1B2A] text-[#E0E1DD] min-h-screen">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  )
   
}