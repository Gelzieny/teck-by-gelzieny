import Link from 'next/link'
import { ProjectCard } from './project-card'

export function ProjectsList() {
  return (
    <section className="container  grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      <Link href="/projects/1">
        <ProjectCard />
      </Link>

      <ProjectCard />
      <ProjectCard />

    </section>
  )
}
