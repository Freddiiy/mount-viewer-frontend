import '../styles/globals.css'
import '../styles/HomePage.css'
import type { AppProps } from 'next/app'
import RealmListProvider from "../store/RealmContext/RealmList";

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <RealmListProvider>
        <Component {...pageProps} />
      </RealmListProvider>
      )
}

export default MyApp
