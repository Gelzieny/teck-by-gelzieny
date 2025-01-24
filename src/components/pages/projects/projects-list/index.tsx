import Link from 'next/link'
import { ProjectCard } from './project-card'

import { Project } from '@/types/page-info'

type ProjectsListProps = {
  projects: Project[]
}

export function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <section className="container  grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map(project => (
        <Link href={`/projects/${project.slug}`} key={project.slug}>
          <ProjectCard project={project} />
        </Link>
      ))}
    </section>
  )
}
