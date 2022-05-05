import '../styles/globals.css'
import '../styles/HomePage.css'
import '../styles/mountPage.css'
import '../styles/AmountPage.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
