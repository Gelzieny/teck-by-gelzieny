import { PageTitle } from '../components/page-title'
import { HeroSection } from '../components/pages/home/hero-section'
import { WorkExperience } from '../components/pages/home/work-experience'
import { KnowledgeSection } from '../components/pages/home/knowledge-section'
import { HighlightedProjects } from '../components/pages/home/highlighted-projects'

export default function Home() {
  return (
    <>
      <PageTitle title="Tech by Gelzieny" description="Tech by Gelzieny" />

      <HeroSection />
      <KnowledgeSection />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}
