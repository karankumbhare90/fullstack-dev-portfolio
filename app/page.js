import Contact from "./_components/Contact";
import Education from "./_components/Education";
import Experience from "./_components/Experience";
import LatestProjects from "./_components/LatestProjects";
import Skills from "./_components/Skills";
import Tools from "./_components/Tools";

export default function Home() {
  return (
    <div className="lg:ml-10 min-h-screen">
      <Experience />
      <LatestProjects />
      <Education />
      <Skills />
      <Tools />
      <Contact />
    </div>
  )
}