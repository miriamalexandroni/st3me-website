import Header from "@/components/Header";
import InfoBar from "@/components/InfoBar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Projects from "@/components/Projects";
import Sermons from "@/components/Sermons";
import Donations from "@/components/Donations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <InfoBar />
      <main>
        <Hero />
        <Vision />
        <Projects />
        <Sermons />
        <Donations />
      </main>
      <Footer />
    </>
  );
}
