import '../styles/globals.css'
import '../styles/HomePage.css'
import '../styles/mountPage.css'
import '../styles/AmountPage.css'
import type {AppProps} from 'next/app'
import RealmListProvider from "../store/RealmContext/RealmList";
import {Provider} from "react-redux";
import store from "../store/store";
import {ChakraProvider, DarkMode} from "@chakra-ui/react";
import theme from "../utils/theme/theme";

function MyApp({Component, pageProps}: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<DarkMode>
				<Provider store={store}>
					<RealmListProvider>
						<Component {...pageProps} />
					</RealmListProvider>
				</Provider>
			</DarkMode>
		</ChakraProvider>
	)
}

export default MyApp
