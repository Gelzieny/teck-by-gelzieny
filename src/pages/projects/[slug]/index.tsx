import { ProjectPageData } from '@/types/page-info'
import { ProjectDetails } from '@/components/pages/project/project-details'
import { ProjectSections } from '@/components/pages/project/project-sections'

type ProjectProps = {
  params: {
    slug: string
  }
}

type ProjectPageProps = {
  projectsData: ProjectPageData | null | undefined
}

async function fetchHygraphData<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  const hygraphEndpoint = process.env.NEXT_HYGRAPH_ENDPOINT

  if (!hygraphEndpoint) {
    throw new Error(
      'NEXT_HYGRAPH_ENDPOINT não configurado nas variáveis de ambiente.'
    )
  }

  try {
    const response = await fetch(hygraphEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    })

    if (!response.ok) {
      throw new Error('Erro na requisição para o Hygraph')
    }

    const json = await response.json()
    if (!json.data) {
      throw new Error('Nenhum dado retornado pelo Hygraph')
    }

    return json.data
  } catch (error) {
    console.error('Erro ao buscar dados do Hygraph:', error)
    throw error
  }
}

export async function getStaticPaths() {
  const query = `
    query ProjectsSlugsQuery {
      projects(first: 100) {
        slug
      }
    }
  `

  try {
    const data = await fetchHygraphData<{ projects: { slug: string }[] }>(query)
    const paths = data.projects.map(project => ({
      params: { slug: project.slug },
    }))

    return {
      paths,
      fallback: 'blocking',
    }
  } catch (error) {
    console.error('Erro em getStaticPaths:', error)
    return { paths: [], fallback: false }
  }
}

export async function getStaticProps({ params }: ProjectProps) {
  const query = `
    query ProjectDetails($slug: String!) {
      project(where: { slug: $slug }) {
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
          imageSvg {
            url
          }
        }
        liveProjectUrl
        githubUrl
      }
    }
  `

  try {
    const data = await fetchHygraphData<{ project: ProjectPageData }>(query, {
      slug: params.slug,
    })

    const project = data.project

    if (!project) {
      return { notFound: true }
    }

    return {
      props: { projectsData: project },
      revalidate: 10, // ISR
    }
  } catch (error) {
    console.error('Erro em getStaticProps:', error)
    return {
      props: { projectsData: null },
    }
  }
}

export async function generateMetadata({ params: { slug } }: ProjectProps) {
  const query = `
    query ProjectMetadata($slug: String!) {
      project(where: { slug: $slug }) {
        title
        description {
          text
        }
        thumbnail {
          url
        }
      }
    }
  `

  try {
    const data = await fetchHygraphData<{
      project: {
        title: string
        description: { text: string }
        thumbnail: { url: string }
      }
    }>(query, { slug })

    const project = data.project

    if (!project) {
      return {
        title: 'Projeto não encontrado',
        description: 'O projeto solicitado não foi encontrado.',
      }
    }

    return {
      title: project.title,
      description: project.description.text,
      openGraph: {
        images: [
          {
            url: project.thumbnail.url,
            width: 1200,
            height: 630,
          },
        ],
      },
    }
  } catch (error) {
    console.error('Erro em generateMetadata:', error)
    return {
      title: 'Erro ao carregar metadados',
      description: 'Houve um erro ao buscar os metadados do projeto.',
    }
  }
}

export default function Project({ projectsData }: ProjectPageProps) {
  return (
    <>
      <ProjectDetails project={projectsData} />
      <ProjectSections sections={projectsData?.sections} />
    </>
  )
}
