import { Box, Heading, Text, Container, VStack, Button, keyframes } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu-section')
    menuSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box
      py={32}
      textAlign="center"
      position="relative"
      overflow="hidden"
      width="100%"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 100%)',
        zIndex: 1,
      }}
      _after={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("/images/kolhapuri-pattern.png")',
        opacity: 0.15,
        zIndex: 1,
        animation: `${shimmer} 20s linear infinite`,
      }}
    >
      <Container maxW="100%" position="relative" zIndex={2}>
        <VStack spacing={8} maxW="1200px" mx="auto">
          <Heading
            as="h1"
            size="3xl"
            color="brand.primary"
            fontFamily="heading"
            textShadow="2px 2px 4px rgba(0,0,0,0.5), 0 0 20px rgba(255,165,0,0.3)"
            animation={`${fadeIn} 1s ease-out`}
            letterSpacing="tight"
            position="relative"
            _after={{
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '120px',
              height: '3px',
              bg: 'brand.secondary',
              borderRadius: 'full',
              boxShadow: '0 0 10px rgba(255,165,0,0.5)'
            }}
          >
            Hotel Jagdamb
          </Heading>
          <Text 
            fontSize="3xl" 
            color="brand.secondary"
            fontWeight="medium"
            textShadow="1px 1px 2px rgba(0,0,0,0.5), 0 0 15px rgba(255,165,0,0.2)"
            animation={`${fadeIn} 1s ease-out 0.2s backwards`}
            fontFamily="heading"
            letterSpacing="wider"
          >
            स्वादिष्ट गवरन मटण थाळी | स्वागत आहे
          </Text>
          <Text 
            fontSize="xl" 
            color="gray.300"
            maxW="600px"
            lineHeight="1.8"
            animation={`${fadeIn} 1s ease-out 0.4s backwards`}
            fontFamily="body"
            textShadow="0 0 10px rgba(0,0,0,0.5)"
          >
            Experience the authentic taste of Maharashtra
          </Text>
          <Button
            size="lg"
            colorScheme="orange"
            mt={4}
            px={10}
            py={6}
            fontSize="lg"
            onClick={scrollToMenu}
            position="relative"
            overflow="hidden"
            borderRadius="full"
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, #FFA500, #FFD700, #FFA500)',
              backgroundSize: '200% 200%',
              opacity: 0,
              transition: 'all 0.3s ease',
              animation: `${shimmer} 3s linear infinite`,
            }}
            _hover={{
              transform: 'translateY(-2px) scale(1.02)',
              boxShadow: '0 4px 20px rgba(255, 165, 0, 0.4), 0 0 30px rgba(255, 165, 0, 0.2)',
              _before: {
                opacity: 0.3,
              },
            }}
            transition="all 0.3s ease"
            animation={`${fadeIn} 1s ease-out 0.6s backwards`}
          >
            Explore Our Menu
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}

export default Hero 