import { HomePageInfo } from '@/types/page-info'
import { SectionTitle } from '../../../section-title'
import { KnowTech } from './know-tech'

type KnownTechsProps = {
  techs: HomePageInfo | null | undefined
}

export function KnowledgeSection({ techs }: KnownTechsProps) {
  const techItems = techs?.knownTechs ?? []

  const techComponents = techItems.map(item => ({
    ...item,
    starDate: item.startDate.replace(/-/g, '/'),
  }))

  return (
    <section className="container py-12">
      <SectionTitle title="Conhecimentos" subtitle="competências" />

      <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] pt-[5%]">
        {techComponents.map((item, index) => (
          <KnowTech
            key={index}
            imgSrc={item.imageSvg.url}
            label={item.name}
            starDate={item.starDate}
          />
        ))}
      </div>
    </section>
  )
}
