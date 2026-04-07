import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import MeetingHours from "@/components/MeetingHours";
import Projects from "@/components/Projects";
import Sermons from "@/components/Sermons";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Vision />
        <MeetingHours />
        <Projects />
        <Sermons />
      </main>
      <Footer />
    </>
  );
}
