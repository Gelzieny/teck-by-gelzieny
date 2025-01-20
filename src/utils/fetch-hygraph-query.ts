type Props = {
  query: string
  variables?: number
}

export async function fetchHygraphQuery({ query, variables }: Props) {
  const hygraphUrl = process.env.NEXT_PUBLIC_HYGRAPH_URL // Acessando a URL pública
  const hygraphToken = process.env.HYGRAPH_TOKEN // Acessando o token privado

  console.log(hygraphUrl, hygraphToken)

  // if (!hygraphUrl || !hygraphToken) {
  //   throw new Error(
  //     'Missing required environment variables: NEXT_HYGRAPH_ENDPOINT or NEXT_HYGRAPH_TOKEN'
  //   )
  // }

  // return fetch(hygraphUrl, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${hygraphToken}`,
  //   },
  //   body: JSON.stringify({
  //     query,
  //     variables,
  //   }),
  // })
  //   .then(res => res.json())
  //   .then(res => res.data)
  //   .catch(error => {
  //     console.error('Error fetching data:', error)
  //   })
}
