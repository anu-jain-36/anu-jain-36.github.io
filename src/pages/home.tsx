import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Journal from "@/components/journal";



export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Journal />
      <Contact />
      <Footer />
    </div>
  );
}
