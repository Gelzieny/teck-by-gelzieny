import { PageTitle } from '../components/page-title'
import { HeroSection } from '../components/pages/home/hero-section'
import { KnowledgeSection } from '../components/pages/home/knowledge-section'

export default function Home() {
  return (
    <>
      <PageTitle title="Tech by Gelzieny" description="Tech by Gelzieny" />

      <HeroSection />
      <KnowledgeSection />

      {/* <HighlightedProjects /> */}
      {/* <WorkExperience /> */}
    </>
  )
}
