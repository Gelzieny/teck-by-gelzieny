import { z } from 'zod'
import { PageTitle } from '../components/page-title'
import ScrollToContact from '../components/scroll-contact'
import { WorkExperience } from '../components/pages/home/work-experience'
import { KnowledgeSection } from '../components/pages/home/knowledge-section'
import { HighlightedProjects } from '../components/pages/home/highlighted-projects'

export const metadata = {
  title: 'Home',
}

// Função para obter os dados da página
async function getPages() {
  // Validação da variável de ambiente com Zod
  const envSchema = z.object({
    NEXT_HYGRAPH_ENDPOINT: z
      .string()
      .url('O endpoint do Hygraph deve ser uma URL válida'),
  })

  // Realizando a validação das variáveis de ambiente
  const parsedEnv = envSchema.safeParse(process.env)

  if (!parsedEnv.success) {
    console.error(
      'Erro de validação das variáveis de ambiente:',
      parsedEnv.error.format()
    )
    throw new Error('Variáveis de ambiente inválidas')
  }

  // Pegando o endpoint validado
  const hygraphEndpoint = parsedEnv.data.NEXT_HYGRAPH_ENDPOINT

  try {
    // Fazendo a requisição com o endpoint validado
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
            }
          }
        `,
      }),
    })

    // Verificando se a requisição foi bem-sucedida
    if (!response.ok) {
      throw new Error('Erro na requisição para o Hygraph')
    }

    // Pegando os dados da resposta
    const json = await response.json()

    // Verificando se os dados estão corretos
    if (!json.data || !json.data.page) {
      throw new Error('Dados da página não encontrados')
    }

    return json.data.page // Retorna a página específica, não um array
  } catch (error) {
    console.error('Erro ao obter a página:', error)
    throw error // Relança o erro para ser tratado externamente, se necessário
  }
}

// Usando getServerSideProps para buscar dados do servidor
export async function getServerSideProps() {
  try {
    const pageData = await getPages() // Busca os dados da página

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

export default function Home({ pageData, error }: any) {
  console.log(pageData, error)

  return (
    <>
      <PageTitle title="Tech by Gelzieny" description="Tech by Gelzieny" />
      <ScrollToContact />
      {/* Você pode passar pageData para os componentes */}
      <KnowledgeSection />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}
