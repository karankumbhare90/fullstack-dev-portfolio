import Contact from "./_components/Contact";
import ContactInfo from "./_components/ContactInfo";
import Education from "./_components/Education";
import Experience from "./_components/Experience";
import LatestProjects from "./_components/LatestProjects";
import Skills from "./_components/Skills";
import SocialLinks from "./_components/SocialLinks";
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

      <div className='lg:hidden flex flex-wrap gap-5 md:gap-0 items-start justify-between py-6 -mx-3'>
        <div className="w-full md:w-1/2 px-3 grid grid-cols-1 gap-4">
          <ContactInfo />
        </div>
        <div className='w-full md:w-1/2 px-3 grid-cols-4 md:grid-cols-2 gap-4 lg:hidden grid'>
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}