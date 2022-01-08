import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'

// enable ChakraUI features via ChakraProvider
function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App