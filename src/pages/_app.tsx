import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Home from '.'
export default function App({ Component, pageProps }: AppProps) {
  return<ChakraProvider>
    <Home />
    <Component {...pageProps} />
  </ChakraProvider>
  
}
