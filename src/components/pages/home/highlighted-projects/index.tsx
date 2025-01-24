import { HiArrowNarrowRight } from 'react-icons/hi'

import { ProejctCard } from './project-card'
import { Link } from '../../../link'
import { Divider } from '../../../divider'
import { SectionTitle } from '../../../section-title'
import { HomePageInfo } from '../../../../types/page-info'

type HighlightedProjectsProps = {
  projects: HomePageInfo | null | undefined
}

export function HighlightedProjects({ projects }: HighlightedProjectsProps) {
  const project = projects?.highlightProjects

  return (
    <section className="container py-12">
      <SectionTitle title="Projetos em destaque" subtitle="destaques" />

      <Divider className="mb-16" />

      <div>
        {project?.map(item => (
          <div key={item.slug}>
            <ProejctCard project={item} />
            <Divider className="my-16" />
          </div>
        ))}

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400 font-bold">Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
