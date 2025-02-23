import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";

const Home = () => {
  
  return (
    <main className="flex flex-col items-center justify-center w-full mx-auto sm:max-w-[48rem] px-4 py-8 sm:py-12 md:py-16 lg:py-20 space-y-8 md:space-y-12 lg:space-y-16 text-primary dark:text-primary-foreground">
      <Intro />
      <About />
      <Experience />
      <Projects />
      <ContactForm />
    </main>
  );
}

export default Home;