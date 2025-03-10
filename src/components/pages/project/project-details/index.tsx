import { FiGlobe } from 'react-icons/fi'
import { TbBrandGithub } from 'react-icons/tb'
import { HiArrowNarrowLeft } from 'react-icons/hi'

import { Link } from '../../../link'
import { Button } from '../../../button'
import { Project } from '@/types/page-info'
import { RichText } from '../../../rich-text'
import { TechIcon } from '../../../tech-icon'
import { SectionTitle } from '../../../section-title'

type ProjectDetailsProps = {
  project: Project | null | undefined
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat bg-opacity-50" />
      <SectionTitle
        subtitle="projetos"
        title={project?.title || 'Título Padrão'}
        className="text-center items-center sm:[&>h3]:text-4xl"
      />

      <div className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        {project?.description.raw && (
          <RichText content={project.description.raw} />
        )}
      </div>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        {project?.technologies.map((item, key) => (
          <TechIcon key={key} imgSrc={item.imageSvg.url} label={item.name} />
        ))}
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        {project?.liveProjectUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <Button className="min-w-[180px]">
              <TbBrandGithub size={20} />
              Repositório
            </Button>
          </a>
        )}
        {project?.liveProjectUrl && (
          <a href={project.liveProjectUrl} target="_blank" rel="noreferrer">
            <Button className="min-w-[180px]">
              <FiGlobe size={20} />
              Projeto Online
            </Button>
          </a>
        )}
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}
