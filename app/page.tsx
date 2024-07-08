import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";

const Home = () => {
  return (
    <main className="flex flex-col items-center px-4 py-[10rem]">
      <Intro />
      <About />
      <Projects />
      <Experience />
      <ContactForm />
    </main>
  );
}


export default Home