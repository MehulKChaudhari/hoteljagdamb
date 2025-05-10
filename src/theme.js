import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#FFA500',
      secondary: '#FFD700',
      dark: '#1A202C',
      gradient: {
        start: '#000000',
        mid: '#1A1A1A',
        end: '#2D2D2D',
      },
    },
  },
  fonts: {
    heading: '"Playfair Display", serif',
    body: '"Poppins", sans-serif',
  },
  styles: {
    global: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        bg: 'brand.gradient.start',
        color: 'white',
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden',
        background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #2D2D2D 100%)',
        backgroundAttachment: 'fixed',
      },
      '#root': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      },
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW: '100%',
        px: { base: 4, md: 6, lg: 8 },
        mx: 'auto',
        width: '100%',
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'full',
        textTransform: 'uppercase',
        letterSpacing: 'wider',
      },
      defaultProps: {
        colorScheme: 'orange',
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'heading',
        fontWeight: 'bold',
        letterSpacing: 'tight',
      },
    },
  },
})

export { theme } 