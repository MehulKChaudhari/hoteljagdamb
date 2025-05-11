import { Box, Container, Heading, Text, Button, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const bgGradient = useColorModeValue(
    'linear(to-b, gray.900, gray.800)',
    'linear(to-b, gray.900, gray.800)'
  )

  return (
    <Box
      as="header"
      width="100%"
      minH="100vh"
      position="relative"
      bgGradient={bgGradient}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(/images/kolhapuri-pattern.png)',
        backgroundSize: '200px',
        opacity: 0.05,
        zIndex: 0,
      }}
    >
      <Container maxW="100%" px={4} position="relative" zIndex={1}>
        <VStack
          spacing={8}
          align="center"
          justify="center"
          minH="100vh"
          textAlign="center"
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              as="h1"
              size="4xl"
              mb={6}
              bgGradient="linear(to-r, orange.400, yellow.400)"
              bgClip="text"
              textShadow="0 2px 4px rgba(0,0,0,0.3)"
            >
              Hotel Jagdamb
            </Heading>
            <Text
              fontSize="2xl"
              color="gray.300"
              mb={8}
              maxW="800px"
              mx="auto"
            >
              Experience the authentic taste of Maharashtra with our signature Mutton Thali, 
              Bokad Mutton, and Kala Rassa. Best traditional Maharashtrian cuisine in Pune.
            </Text>
            <Button
              size="lg"
              colorScheme="orange"
              onClick={scrollToMenu}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 20px rgba(255, 165, 0, 0.3)',
              }}
            >
              Explore Our Menu
            </Button>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Text
              color="gray.400"
              fontSize="lg"
              maxW="600px"
              mx="auto"
            >
              Famous for our traditional Maharashtrian dishes, 
              we bring you the authentic flavors of Pune's culinary heritage.
            </Text>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}

export default Hero 