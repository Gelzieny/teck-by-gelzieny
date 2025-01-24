import { ProjectDetails } from '@/components/pages/project/project-details'
import { ProjectSections } from '@/components/pages/project/project-sections'
import { z } from 'zod'
import { ProjectPageData } from '../../../types/page-info'

type ProjectProps = {
  params: {
    slug: string
  }
}

type ProjectPageProps = {
  projectData: ProjectPageData | null
}

async function getPages({
  params: { slug },
}: ProjectProps): Promise<ProjectPageData | null> {
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
          query PageInfoQuery ($slug: String!){
            project(where: {slug: $slug}) {
              pageThumbnail {
                url
              }
              thumbnail {
                url
              }
              sections {
                title
                image {
                  url
                }
              }
              title
              shortDescription
              description {
                raw
                text
              }
              technologies {
                name
              }
              liveProjectUrl
              githubUrl
            }
          }
        `,
        variables: { slug },
      }),
    })

    if (!response.ok) {
      throw new Error('Erro na requisição para o Hygraph')
    }

    const json = await response.json()

    if (!json.data || !json.data.project) {
      throw new Error('Dados não encontrados')
    }

    return json.data.project
  } catch (error) {
    console.error('Erro ao obter a página:', error)
    throw error
  }
}

export async function getServerSideProps(context: ProjectProps) {
  try {
    const { params } = context
    const projectsData = await getPages({ params })

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

export default function Project({ projectsData }: ProjectPageProps) {
  console.log('projectsData', projectsData)

  return (
    <>
      <ProjectDetails />
      <ProjectSections />
    </>
  )
}
