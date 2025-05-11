import { Box, Container, SimpleGrid, Text, VStack, Heading, Button, HStack, Icon } from '@chakra-ui/react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const handleGetDirections = () => {
    const hotelLocation = 'Hotel Jagdamb, Kolhapur'
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(hotelLocation)}`
    window.open(mapsUrl, '_blank')
  }

  return (
    <Box 
      bg="gray.900" 
      color="gray.300" 
      width="100%"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.97) 0%, rgba(26,32,44,0.97) 100%)',
        zIndex: 0,
      }}
    >
      <Container maxW="100%" position="relative" zIndex={1}>
        <SimpleGrid 
          columns={{ base: 1, md: 2 }} 
          spacing={10} 
          maxW="1400px" 
          mx="auto" 
          px={{ base: 4, md: 6, lg: 8 }}
          py={16}
        >
          <VStack align="start" spacing={6}>
            <Heading 
              as="h3" 
              size="lg" 
              color="brand.primary"
              fontFamily="heading"
              textShadow="0 0 10px rgba(255,165,0,0.2)"
            >
              Contact Us
            </Heading>
            <VStack align="start" spacing={3}>
              <Text fontSize="lg">
                📍 123 Main Street, Kolhapur
              </Text>
              <Text fontSize="lg">
                📞 +91 1234567890
              </Text>
              <Text fontSize="lg">
                ✉️ info@hoteljagdamb.com
              </Text>
            </VStack>
          </VStack>
          <VStack align="start" spacing={6}>
            <Heading 
              as="h3" 
              size="lg" 
              color="brand.primary"
              fontFamily="heading"
              textShadow="0 0 10px rgba(255,165,0,0.2)"
            >
              Location
            </Heading>
            <Box 
              width="100%" 
              height="300px" 
              borderRadius="xl" 
              overflow="hidden"
              boxShadow="0 4px 20px rgba(0,0,0,0.3)"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15377.123456789012!2d74.2297!3d16.7050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQyJzE4LjAiTiA3NMKwMTMnNDYuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
            <Button
              size="md"
              variant="outline"
              colorScheme="whiteAlpha"
              onClick={handleGetDirections}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: '0 2px 8px rgba(255, 255, 255, 0.2)',
                bg: 'whiteAlpha.200',
              }}
              transition="all 0.3s ease"
              alignSelf="flex-end"
            >
              <HStack spacing={2}>
                <Icon as={FaMapMarkerAlt} color="white" />
                <Text>Get Directions</Text>
              </HStack>
            </Button>
          </VStack>
        </SimpleGrid>
        <Box 
          borderTop="1px solid" 
          borderColor="gray.700" 
          py={8} 
          textAlign="center"
          maxW="1400px"
          mx="auto"
          px={{ base: 4, md: 6, lg: 8 }}
        >
          <Text>
            © {new Date().getFullYear()} Hotel Jagdamb. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer 