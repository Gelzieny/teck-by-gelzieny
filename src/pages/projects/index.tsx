import { z } from 'zod'

import { ProjectsPageData } from '@/types/page-info'
import { PageIntroduction } from '@/components/pages/projects/page-introduction'
import { ProjectsList } from '@/components/pages/projects/projects-list'
import { PageTitle } from '@/components/page-title'

type ProjectsProps = {
  projectsData: ProjectsPageData | null
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
            projects {
              shortDescription
              slug
              title
              thumbnail {
                url
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

    if (!json.data || !json.data.projects) {
      throw new Error('Dados não encontrados')
    }

    return json.data.projects
  } catch (error) {
    console.error('Erro ao obter a página:', error)
    throw error
  }
}

export async function getServerSideProps() {
  try {
    const projectsData = await getPages()

    return {
      props: { projectsData },
    }
  } catch (error) {
    console.error('Erro ao carregar os dados:', error)
    return {
      props: { pageData: null, error: 'Erro ao carregar os dados' },
    }
  }
}

export default function Projects({ projectsData }: ProjectsProps) {
  return (
    <>
      <PageTitle title="Projetos" description="Projetos" />
      <PageIntroduction />
      <ProjectsList projects={projectsData} />
    </>
  )
}
