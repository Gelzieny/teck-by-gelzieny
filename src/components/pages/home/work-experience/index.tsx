import { ExperienceItem } from './experience-item'
import { SectionTitle } from '../../../section-title'
import { WorkExperiences as IWorkExperience } from '@/types/page-info'

type WorkExperienceProps = {
  experiences: IWorkExperience[]
}

export function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <section className="container py-8 flex lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle
          title="Experiência Profissional"
          subtitle="experiências"
        />
        <p className="dark:text-gray-400  mt-6 text-justify mb-12">
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
          trabalhar juntos para criar soluções incríveis para sua empresa!
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {experiences?.map(experience => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  )
}
