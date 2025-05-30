import { Box } from '@chakra-ui/react'
import Hero from './components/Hero'
import ImageSlider from './components/ImageSlider'
import Menu from './components/Menu'
import Footer from './components/Footer'
import SEO from './components/SEO'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <Box as="main" minH="100vh">
        <Box as="header">
          <Hero />
        </Box>
        
        <Box as="section" aria-label="Gallery">
          <ImageSlider />
        </Box>
        
        <Box as="section" id="menu-section" aria-label="Menu">
          <Menu />
        </Box>
        
        <Box as="footer">
          <Footer />
        </Box>
      </Box>
    </HelmetProvider>
  )
}

export default App
