import { z } from 'zod'

import { PageTitle } from '@/components/page-title'
import ScrollToContact from '@/components/scroll-contact'
import { HeroSection } from '@/components/pages/home/hero-section'
import { WorkExperience } from '@/components/pages/home/work-experience'
import { KnowledgeSection } from '@/components/pages/home/knowledge-section'
import { HighlightedProjects } from '@/components/pages/home/highlighted-projects'
import { HomePageData, WorkExperiences } from '@/types/page-info'

export const metadata = {
  title: 'Home',
}

type ErrorProps = {
  message: string
}

type HomeProps = {
  pageData: HomePageData | null
  error: ErrorProps | null
  workExperiences: WorkExperiences[]
}

async function getPages() {
  const envSchema = z.object({
    NEXT_HYGRAPH_ENDPOINT: z
      .string()
      .url('O endpoint do Hygraph deve ser uma URL válida'),
  })

  const parsedEnv = envSchema.safeParse(process.env)

  if (!parsedEnv.success) {
    console.error(
      'Erro de validação das variáveis de ambiente:',
      parsedEnv.error.format()
    )
    throw new Error('Variáveis de ambiente inválidas')
  }

  const hygraphEndpoint = parsedEnv.data.NEXT_HYGRAPH_ENDPOINT

  try {
    const response = await fetch(hygraphEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query PageInfoQuery {
            page(where: {slug: "home"}) {
              introduction {
                raw
              }
              technologies {
                name
              }
              profilePicture {
                url
              }
              sociais {
                url 
                iconSvg
              }
              knownTechs {
                name
                startDate
                imageSvg {
                  url
                }
              }
              highlightProjects {
                slug
                thumbnail {
                  url
                }
                title
                shortDescription
                technologies {
                  name
                  imageSvg {
                    url
                  }
                }
              }
            }
            workExperiences {
              companyLogo {
                url
              }
              role
              companyName
              companyUrl
              startDate
              endDate
              description {
                raw
              }
              technologies {
                name
              }
            }  
          }
        `,
      }),
    })

    if (!response.ok) {
      throw new Error('Erro na requisição para o Hygraph')
    }

    const json = await response.json()

    if (!json.data || !json.data.page || !json.data.workExperiences) {
      throw new Error('Dados não encontrados')
    }

    return {
      pageData: json.data,
      workExperiences: json.data.workExperiences,
    }
  } catch (error) {
    console.error('Erro ao obter a página:', error)
    throw error
  }
}

export async function getServerSideProps() {
  try {
    const { pageData, workExperiences } = await getPages()

    return {
      props: { pageData, workExperiences },
    }
  } catch (error) {
    console.error('Erro ao carregar os dados:', error)
    return {
      props: { pageData: null, error: 'Erro ao carregar os dados' },
    }
  }
}

export default function Home({ pageData, workExperiences }: HomeProps) {
  return (
    <>
      <PageTitle title="Tech by Gelzieny" description="Tech by Gelzieny" />
      <ScrollToContact />
      <HeroSection homeInfo={pageData?.page} />
      <KnowledgeSection techs={pageData?.page} />
      <HighlightedProjects projects={pageData?.page} />
      <WorkExperience experiences={workExperiences} />
    </>
  )
}
