import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

import { Header } from '../components/header'
import { ThemeProvider } from '../components/theme/theme-provider'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={`${poppins.variable}`}>
        <Header />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
