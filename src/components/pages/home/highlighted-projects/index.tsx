import { ProejctCard } from './project-card'
import { SectionTitle } from '../../../section-title'
import { Divider } from '../../../divider'

export function HighlightedProjects() {
  return (
    <section className="container py-12">
      <SectionTitle title="Projetos em destaque" subtitle="destaques" />

      <Divider className="mb-16" />
      <ProejctCard />
    </section>
  )
}
