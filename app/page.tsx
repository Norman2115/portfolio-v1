import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Section from "@/components/Section";
import Skills from "@/components/Skills";
import TopNavBar from "@/components/TopNavBar";

export default function Home() {
  return (
    <main className="bg-dark-background">
      <TopNavBar />
      <Section id="home">
        <HeroSection />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="skill">
        <Skills />
      </Section>
      <Section id="project">
        <Projects />
      </Section>
      <Section id="contact">
        <ContactForm />
      </Section>
    </main>
  );
}
