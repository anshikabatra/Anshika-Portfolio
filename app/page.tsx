import { Hero } from '@/components/Hero'
import { ProjectRow } from '@/components/ProjectRow'
import { projects } from '@/content/projects'

const homeProjects = projects

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        id="projects"
        aria-label="Selected work"
        className="relative z-content overflow-x-clip pb-16 md:pb-24"
      >
        <div className="pt-4 md:pt-8" />
        <h2 className="sr-only">Selected work</h2>

        <div className="mx-auto max-w-shell px-6 md:px-8">
          {homeProjects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} flip={i % 2 === 1} />
          ))}
        </div>
      </section>
    </>
  )
}
