import { SectionTitle } from '../../../section-title'
import { KnowTech } from './know-tech'

const skillItem = [
  {
    imgSrc: '/images/icons/python.svg',
    label: 'Python',
    starDate: '2019/09/18',
  },
  {
    imgSrc: '/images/icons/fastapi.svg',
    label: 'FastAPI',
    starDate: '2019/09/18',
  },
  {
    imgSrc: '/images/icons/django.svg',
    label: 'Django',
    starDate: '2019/09/18',
  },
  {
    imgSrc: '/images/icons/javascript.svg',
    label: 'JavaScript',
    starDate: '2019/09/18',
  },
  {
    imgSrc: '/images/icons/html5.svg',
    label: 'HTML5',
    starDate: '2019/09/18',
  },
  {
    imgSrc: '/images/icons/css3.svg',
    label: 'CSS3',
    starDate: '2029/09/18',
  },

  {
    imgSrc: '/images/icons/tailwindcss.svg',
    label: 'TailwindCSS',
    starDate: '2024/01/02',
  },
]

export function KnowledgeSection() {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="competências" />

      <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] pt-[5%]">
        {skillItem.map((item, index) => (
          <KnowTech
            key={index}
            imgSrc={item.imgSrc}
            label={item.label}
            starDate={item.starDate}
          />
        ))}
      </div>
    </section>
  )
}
