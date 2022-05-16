import '../styles/globals.css'
import '../styles/HomePage.css'
import '../styles/mountPage.css'
import '../styles/AmountPage.css'
import type { AppProps } from 'next/app'
import RealmListProvider from "../store/RealmContext/RealmList";
import {Provider} from "react-redux";
import store from "../store/store";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "../utils/theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <ChakraProvider theme={theme}>
          <Provider store={store}>
              <RealmListProvider>
                <Component {...pageProps} />
              </RealmListProvider>
          </Provider>
      </ChakraProvider>
      )
}

export default MyApp
