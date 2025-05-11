import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box
      as="header"
      width="100%"
      minH="100vh"
      position="relative"
      bg="gray.900"
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
          py={20}
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              as="h1"
              size="4xl"
              mb={8}
              color="#FFA500"
              fontFamily="heading"
              fontWeight="bold"
              letterSpacing="tight"
              lineHeight="1.2"
              textShadow="2px 2px 4px rgba(0,0,0,0.5), 0 0 20px rgba(255,165,0,0.3)"
              _after={{
                content: '""',
                display: 'block',
                width: '80px',
                height: '3px',
                bg: '#FFD700',
                mx: 'auto',
                mt: 4,
                borderRadius: 'full',
                boxShadow: '0 0 10px rgba(255,165,0,0.5)'
              }}
            >
              Hotel Jagdamb
            </Heading>
            <Text
              fontSize="2xl"
              color="#E2E8F0"
              mb={8}
              maxW="800px"
              mx="auto"
              lineHeight="1.6"
            >
              Experience the authentic taste of Maharashtra with our signature Mutton Thali, 
              Bokad Mutton, and Kala Rassa. Best traditional Maharashtrian cuisine in Pune.
            </Text>
            <Button
              size="lg"
              bg="#FFA500"
              color="white"
              _hover={{
                bg: '#FFD700',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 20px rgba(255, 165, 0, 0.3)',
              }}
              onClick={scrollToMenu}
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
              color="#A0AEC0"
              fontSize="lg"
              maxW="600px"
              mx="auto"
              lineHeight="1.6"
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