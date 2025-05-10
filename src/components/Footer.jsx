import { Box, Container, Grid, GridItem, Heading, Text, Link, Icon, VStack, HStack } from '@chakra-ui/react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box bg="gray.800" py={10} width="100%">
      <Container maxW="100%" mx="auto">
        <Grid 
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} 
          gap={8}
          maxW="1400px"
          mx="auto"
          px={{ base: 4, md: 6, lg: 8 }}
        >
          <GridItem>
            <VStack align="start" spacing={6}>
              <Heading size="lg" color="brand.primary">
                Contact Us | संपर्क साधा
              </Heading>
              <VStack align="start" spacing={4}>
                <Link href="tel:+919876543210" _hover={{ textDecoration: 'none' }}>
                  <HStack spacing={3}>
                    <Icon as={FaPhone} color="brand.secondary" />
                    <Text>+91 98765 43210</Text>
                  </HStack>
                </Link>
                <Link href="https://wa.me/919876543210" _hover={{ textDecoration: 'none' }}>
                  <HStack spacing={3}>
                    <Icon as={FaWhatsapp} color="brand.secondary" />
                    <Text>WhatsApp</Text>
                  </HStack>
                </Link>
                <Link href="mailto:info@hoteljagdamb.com" _hover={{ textDecoration: 'none' }}>
                  <HStack spacing={3}>
                    <Icon as={FaEnvelope} color="brand.secondary" />
                    <Text>info@hoteljagdamb.com</Text>
                  </HStack>
                </Link>
                <HStack spacing={3}>
                  <Icon as={FaMapMarkerAlt} color="brand.secondary" />
                  <Text>123, Main Street, Mumbai, Maharashtra</Text>
                </HStack>
                <HStack spacing={3}>
                  <Icon as={FaClock} color="brand.secondary" />
                  <Text>Open Hours: 11:00 AM - 11:00 PM</Text>
                </HStack>
              </VStack>
            </VStack>
          </GridItem>
          <GridItem>
            <Box
              borderRadius="lg"
              overflow="hidden"
              height="300px"
              boxShadow="xl"
              width="100%"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0026936844427!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </GridItem>
        </Grid>
        <Text 
          textAlign="center" 
          mt={8} 
          color="gray.400"
          maxW="1400px"
          mx="auto"
          px={{ base: 4, md: 6, lg: 8 }}
        >
          © {new Date().getFullYear()} Hotel Jagdamb. All rights reserved.
        </Text>
      </Container>
    </Box>
  )
}

export default Footer 