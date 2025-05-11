import { Box, Container, Heading, SimpleGrid, Text, VStack, Badge, keyframes, useBreakpointValue } from '@chakra-ui/react'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`

const Menu = () => {
  const menuItems = [
    {
      name: 'Bokad Mutton Thali',
      description: 'Authentic Maharashtrian thali with mutton curry, bhakri, rice, and more',
      price: '₹350',
      marathiName: 'बोकड मटण थाळी',
      isSpecial: true
    },
    {
      name: 'Special Veg Thali',
      description: 'Complete vegetarian thali with seasonal vegetables and rotis',
      price: '₹250',
      marathiName: 'विशेष शाकाहारी थाळी'
    },
    {
      name: 'Gavran Chicken Thali',
      description: 'Authentic Maharashtrian thali with chicken curry, bhakri, rice, and more',
      price: '₹400',
      marathiName: 'गवरन चिकन थाळी'
    }
  ]

  const columns = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 3
  })

  // Enhanced SEO Structured Data
  const menuStructuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Hotel Jagdamb",
    "image": "/images/mutton-thali.jpeg",
    "description": "Authentic Maharashtrian restaurant in Pune, famous for our signature Mutton Thali, Bokad Mutton Thali, and traditional dishes.",
    "servesCuisine": ["Maharashtrian", "Indian"],
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.459063",
      "longitude": "73.823619"
    },
    "openingHours": "Mo-Su 11:00-23:00",
    "telephone": "+91-XXXXXXXXXX",
    "menu": {
      "@type": "Menu",
      "name": "Hotel Jagdamb Menu",
      "description": "Authentic Maharashtrian cuisine featuring special thalis and traditional dishes",
      "offers": menuItems.map(item => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "MenuItem",
          "name": item.name,
          "alternateName": item.marathiName,
          "description": item.description,
          "offers": {
            "@type": "Offer",
            "price": item.price.replace('₹', ''),
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/hoteljagdamb",
      "https://www.instagram.com/hoteljagdamb"
    ]
  }

  return (
    <Box 
      id="menu-section"
      py={24} 
      position="relative" 
      width="100%"
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
      _after={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("/images/kolhapuri-pattern.png")',
        opacity: 0.07,
        zIndex: 0,
        animation: `${shimmer} 20s linear infinite`,
      }}
    >
      <Container maxW="100%" position="relative" zIndex={1}>
        <VStack spacing={16} maxW="1400px" mx="auto" px={{ base: 4, md: 6, lg: 8 }}>
          <Heading
            as="h2"
            size="2xl"
            textAlign="center"
            color="brand.primary"
            position="relative"
            fontFamily="heading"
            animation={`${fadeIn} 1s ease-out, ${float} 6s ease-in-out infinite`}
            textShadow="2px 2px 4px rgba(0,0,0,0.5), 0 0 20px rgba(255,165,0,0.3)"
            _after={{
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '3px',
              bg: 'brand.secondary',
              borderRadius: 'full',
              boxShadow: '0 0 10px rgba(255,165,0,0.5)'
            }}
          >
            Our Menu | आमचे मेनू
          </Heading>
          <SimpleGrid 
            columns={columns} 
            spacing={8} 
            width="100%"
            px={{ base: 4, md: 6, lg: 8 }}
          >
            {menuItems.map((item, index) => (
              <Box
                key={index}
                p={8}
                bg="rgba(26, 32, 44, 0.8)"
                borderRadius="xl"
                backdropFilter="blur(10px)"
                position="relative"
                animation={`${fadeIn} 1s ease-out ${index * 0.2}s backwards`}
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  border: '1px solid',
                  borderColor: 'brand.primary',
                  borderRadius: 'xl',
                  opacity: 0.2,
                  transform: 'scale(1.02)',
                  transition: 'all 0.3s ease',
                }}
                _hover={{
                  transform: 'translateY(-5px) scale(1.02)',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 20px rgba(255, 165, 0, 0.3), 0 0 30px rgba(255, 165, 0, 0.1)',
                  _before: {
                    opacity: 0.4,
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {item.isSpecial && (
                  <Badge
                    position="absolute"
                    top={4}
                    right={4}
                    colorScheme="orange"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    boxShadow="0 2px 10px rgba(255, 165, 0, 0.3)"
                    animation={`${pulse} 2s infinite`}
                  >
                    Special
                  </Badge>
                )}
                <VStack align="start" spacing={4}>
                  <VStack align="start" spacing={1}>
                    <Text 
                      fontSize="2xl" 
                      fontWeight="bold" 
                      color="brand.secondary"
                      fontFamily="heading"
                      textShadow="0 0 10px rgba(255,165,0,0.2)"
                      transition="all 0.3s ease"
                      _hover={{
                        color: 'brand.primary',
                        transform: 'translateX(5px)',
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text 
                      color="gray.400" 
                      fontSize="xl"
                      fontFamily="body"
                      letterSpacing="wider"
                      fontWeight="medium"
                      transition="all 0.3s ease"
                      _hover={{
                        color: 'gray.300',
                        transform: 'translateX(5px)',
                      }}
                    >
                      {item.marathiName}
                    </Text>
                  </VStack>
                  <Text 
                    color="gray.300" 
                    fontSize="md"
                    lineHeight="1.6"
                    fontFamily="body"
                  >
                    {item.description}
                  </Text>
                  <Text 
                    color="brand.primary" 
                    fontWeight="bold" 
                    fontSize="xl"
                    fontFamily="heading"
                    textShadow="0 0 10px rgba(255,165,0,0.2)"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: 'scale(1.05)',
                      textShadow: '0 0 15px rgba(255,165,0,0.4)',
                    }}
                  >
                    {item.price}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <script type="application/ld+json">
        {JSON.stringify(menuStructuredData)}
      </script>
    </Box>
  )
}

export default Menu 