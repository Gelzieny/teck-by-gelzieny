import Head from 'next/head'

interface PageTitleProps {
  title: string
  description: string
}

export function PageTitle({ title, description }: PageTitleProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
