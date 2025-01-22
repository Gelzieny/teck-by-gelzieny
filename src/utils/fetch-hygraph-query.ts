import { z } from 'zod'

type Props = {
  query: string
}

export async function fetchHygraphQuery({ query }: Props) {
  console.log('Vai da certo', process.env.NEXT_HYGRAPH_ENDPOINT)

  const envSchema = z.object({
    NEXT_HYGRAPH_ENDPOINT: z
      .string()
      .url('O endpoint do Hygraph deve ser uma URL válida'),
  })

  const parsedEnv = envSchema.safeParse(process.env)

  if (!parsedEnv.success) {
    console.error(
      'Erro ao validar as variáveis de ambiente',
      parsedEnv.error.format()
    )
    throw new Error('Erro ao validar as variáveis de ambiente')
  }

  const heygraphRes = parsedEnv.data.NEXT_HYGRAPH_ENDPOINT

  try {
    const response = await fetch(heygraphRes, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
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
    if (error instanceof Error) {
      console.error('Mensagem de erro:', error.message)
    }
    throw new Error('Erro ao obter a página')
  }
}
