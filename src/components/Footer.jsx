import { Box, Container, Heading, Text, VStack, HStack, Icon, Button, useColorModeValue, Grid, GridItem } from '@chakra-ui/react'
import { FaMapMarkerAlt, FaPhone, FaBuilding } from 'react-icons/fa'

const Footer = () => {
  const handlePhoneCall = () => {
    window.open('tel:+919356646005', '_self')
  }

  const handleGetDirections = () => {
    const url = 'https://www.google.com/maps/dir/?api=1&destination=18.459063,73.823619'
    window.open(url, '_blank')
  }

  const bgGradient = useColorModeValue(
    'linear(to-b, gray.900, gray.800)',
    'linear(to-b, gray.900, gray.800)'
  )

  return (
    <Box
      as="footer"
      width="100%"
      py={20}
      bgGradient={bgGradient}
      position="relative"
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
      <Container maxW="container.xl" px={4}>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8}>
          <GridItem>
            <VStack align="start" spacing={6}>
              <Heading
                as="h2"
                size="xl"
                bgGradient="linear(to-r, orange.400, yellow.400)"
                bgClip="text"
              >
                Contact Us
              </Heading>
              <VStack align="start" spacing={4}>
                <HStack>
                  <Icon as={FaBuilding} color="orange.400" />
                  <Text color="gray.300">1st floor, Hotel Jagdamb, Navle Bridge, Pune, 411041</Text>
                </HStack>
                <Button
                  variant="unstyled"
                  onClick={handlePhoneCall}
                  _hover={{ color: 'orange.400' }}
                  transition="color 0.2s"
                  display="flex"
                  alignItems="center"
                  gap={3}
                  p={0}
                  h="auto"
                >
                  <Icon as={FaPhone} color="orange.400" transform="rotate(180deg)" />
                  <Text color="gray.300">+91 9356646005</Text>
                </Button>
              </VStack>
            </VStack>
          </GridItem>

          <GridItem>
            <VStack spacing={4} align="stretch">
              <Box
                width="100%"
                height="300px"
                position="relative"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="0 4px 20px rgba(0,0,0,0.3)"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2405.9872843646704!2d73.82302426956635!3d18.45902699891391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI3JzMyLjUiTiA3M8KwNDknMjUuMiJF!5e0!3m2!1sen!2sin!4v1647881234567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
              <Button
                size="md"
                colorScheme="orange"
                variant="solid"
                onClick={handleGetDirections}
                alignSelf="flex-end"
                bg="brand.primary"
                color="white"
                _hover={{
                  bg: 'brand.secondary',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 20px rgba(255, 165, 0, 0.3)',
                }}
              >
                <HStack spacing={2}>
                  <Icon as={FaMapMarkerAlt} />
                  <Text>Get Directions</Text>
                </HStack>
              </Button>
            </VStack>
          </GridItem>
        </Grid>

        <Text
          textAlign="center"
          color="gray.500"
          fontSize="sm"
          mt={12}
          position="relative"
          zIndex={1}
        >
          © {new Date().getFullYear()} Hotel Jagdamb. All rights reserved.
        </Text>
      </Container>
    </Box>
  )
}

export default Footer 