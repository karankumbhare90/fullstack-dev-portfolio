import Experience from "./_components/Experience";
import LatestProjects from "./_components/LatestProjects";

export default function Home() {
  return (
    <div className="lg:ml-10 min-h-screen">
      <Experience />
      <LatestProjects />
    </div>
  )
}