import { ChakraProvider, Box } from '@chakra-ui/react'
import { theme } from './theme'
import Hero from './components/Hero'
import Menu from './components/Menu'
import ImageSlider from './components/ImageSlider'
import Footer from './components/Footer'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box 
        bg="gray.900" 
        minH="100vh" 
        color="white"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Hero />
        <ImageSlider />
        <Menu />
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default App
