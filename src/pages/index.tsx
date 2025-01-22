import { z } from 'zod'

import { PageTitle } from '../components/page-title'
import ScrollToContact from '../components/scroll-contact'
import { HeroSection } from '../components/pages/home/hero-section'
import { WorkExperience } from '../components/pages/home/work-experience'
import { KnowledgeSection } from '../components/pages/home/knowledge-section'
import { HighlightedProjects } from '../components/pages/home/highlighted-projects'
import { HomePageData } from '../types/page-info'

export const metadata = {
  title: 'Home',
}

type ErrorProps = {
  message: string
}

type HomeProps = {
  pageData: HomePageData | null
  error: ErrorProps | null
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
            }
          }
        `,
      }),
    })

    if (!response.ok) {
      throw new Error('Erro na requisição para o Hygraph')
    }

    const json = await response.json()

    if (!json.data || !json.data.page) {
      throw new Error('Dados da página não encontrados')
    }

    return json.data.page
  } catch (error) {
    console.error('Erro ao obter a página:', error)
    throw error
  }
}

export async function getServerSideProps() {
  try {
    const pageData = await getPages()

    return {
      props: { pageData },
    }
  } catch (error) {
    console.error('Erro ao carregar os dados:', error)
    return {
      props: { pageData: null, error: 'Erro ao carregar os dados' },
    }
  }
}

export default function Home({ pageData }: HomeProps) {
  return (
    <>
      <PageTitle title="Tech by Gelzieny" description="Tech by Gelzieny" />
      <ScrollToContact />
      <HeroSection homeInfo={pageData} />
      <KnowledgeSection techs={pageData} />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}
