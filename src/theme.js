import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
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
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
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
        bg: '#000000',
        color: '#E2E8F0',
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
      variants: {
        solid: {
          bg: '#FFA500',
          color: 'white',
          _hover: {
            bg: '#FFD700',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 20px rgba(255, 165, 0, 0.3)',
          },
        },
        outline: {
          borderColor: '#FFA500',
          color: '#FFA500',
          _hover: {
            bg: 'rgba(255, 165, 0, 0.1)',
            borderColor: '#FFD700',
            color: '#FFD700',
          },
        },
      },
      defaultProps: {
        variant: 'solid',
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'heading',
        fontWeight: 'bold',
        letterSpacing: 'tight',
        color: '#FFA500',
      },
    },
    Text: {
      baseStyle: {
        color: '#E2E8F0',
      },
    },
    Badge: {
      baseStyle: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
      },
      variants: {
        solid: {
          bg: '#FFA500',
          color: 'white',
        },
        outline: {
          borderColor: '#FFA500',
          color: '#FFA500',
        },
      },
    },
  },
})

export { theme } 