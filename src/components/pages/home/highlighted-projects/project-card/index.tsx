import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

import { Link } from '../../../../link'
import { Project } from '../../../../../types/page-info'

const teckItem = [
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
  {
    imgSrc: '/images/icons/react.svg',
    label: 'React.js',
  },
  {
    imgSrc: '/images/icons/next.svg',
    label: 'Next.js',
  },
  {
    imgSrc: '/images/icons/vite.svg',
    label: 'Vite.js',
  },
]

type ProjectCardProps = {
  project: Project
}

export function ProejctCard({ project }: ProjectCardProps) {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row ">
      <div className="w-full h-full">
        <Image
          src={project.thumbnail.url}
          alt="Project Card"
          width={500}
          height={500}
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>
      <div className="mb-8">
        <h3 className="flex items-center gap-3 font-medium text-lg  ">
          <Image
            src="/images/icons/logo-project.svg"
            width={20}
            height={20}
            alt="Logo"
          />
          <span>{project.title}</span>
        </h3>
        <p className=" my-6 text-justify">{project.shortDescription}</p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[300px]">
          {project.technologies.map(({ name, imageSvg }, key) => (
            <Image
              src={imageSvg.url}
              alt={name}
              width={30}
              height={30}
              key={key}
            />
          ))}
        </div>
        <Link href={`/projects/${project.slug}`}>
          Ver projeto
          <HiArrowNarrowRight className=" dark:text-pure-white text-dark-black w-5 h-5 hover:text-main-site-color transition-colors " />
        </Link>
      </div>
    </div>
  )
}
