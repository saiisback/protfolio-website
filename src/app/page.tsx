import BackgroundGradient from "@/components/BackgroundGradient";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Tweets from "@/components/Tweets";
import Hackathons from "@/components/Hackathons";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <BackgroundGradient />

      <div className="relative z-10">
        <Header />

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-28 px-6 pb-24">
          <Hero />
          <Services />
          <Experience />
          <Projects />
          <Tweets />
          <Hackathons />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
