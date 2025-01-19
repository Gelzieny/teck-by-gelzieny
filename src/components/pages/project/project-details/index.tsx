import { FiGlobe } from 'react-icons/fi'
import { HiArrowNarrowLeft } from 'react-icons/hi'

import { Link } from '../../../link'
import { TechIcon } from '../../../tech-icon'
import { SectionTitle } from '../../../section-title'
import { Button } from '../../../button'
import { TbBrandGithub } from 'react-icons/tb'

const skillItem = [
  {
    imgSrc: '/images/icons/python.svg',
    label: 'Python',
  },
  {
    imgSrc: '/images/icons/fastapi.svg',
    label: 'FastAPI',
  },
  {
    imgSrc: '/images/icons/django.svg',
    label: 'Django',
  },
  {
    imgSrc: '/images/icons/javascript.svg',
    label: 'JavaScript',
  },
  {
    imgSrc: '/images/icons/html5.svg',
    label: 'HTML5',
  },
  {
    imgSrc: '/images/icons/css3.svg',
    label: 'CSS3',
  },

  {
    imgSrc: '/images/icons/tailwindcss.svg',
    label: 'TailwindCSS',
  },
]

export function ProjectDetails() {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat bg-opacity-50" />
      <SectionTitle
        subtitle="projetos"
        title="portfolio1"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />

      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nemo
        id tempora libero quas laborum, dolor optio possimus sed repudiandae
        ipsum eaque velit? Nam molestias voluptate dolores, ea fuga quo?
      </p>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        {skillItem.map(({ imgSrc, label }, key) => (
          <TechIcon key={key} imgSrc={imgSrc} label={label} />
        ))}
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a href="https://github.com/gelzieny" target="_blank" rel="noreferrer">
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>
        </a>
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}
