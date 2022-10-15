import '../styles/globals.css'
import ContextProvider from "../src/Context/Context";

function MyApp({ Component, pageProps }) {
  return <ContextProvider> <Component {...pageProps} /> </ContextProvider>
}

export default MyApp
