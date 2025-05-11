import { Box, Container, useBreakpointValue } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ImageSlider = () => {
  const images = [
    '/images/mutton-thali.jpeg',
    '/images/mutton.jpeg',
    '/images/veg-thali.jpeg'
  ]

  const height = useBreakpointValue({
    base: '300px',
    sm: '400px',
    md: '500px',
    lg: '600px'
  })

  return (
    <Box 
      width="100%" 
      position="relative"
      bg="black"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)',
        zIndex: 2,
        pointerEvents: 'none'
      }}
    >
      <Container maxW="100%" p={0}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            enabled: true,
            hideOnClick: true,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={800}
          loop={true}
          watchSlidesProgress={true}
          preventInteractionOnTransition={true}
          style={{
            '--swiper-navigation-color': '#FFA500',
            '--swiper-pagination-color': '#FFA500',
            '--swiper-pagination-bullet-inactive-color': '#999999',
            '--swiper-pagination-bullet-inactive-opacity': '0.5',
            '--swiper-pagination-bullet-size': '10px',
            '--swiper-pagination-bullet-horizontal-gap': '6px',
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} style={{ opacity: 1 }}>
              <Box
                width="100%"
                height={height}
                position="relative"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
                  zIndex: 1,
                }}
              >
                <Box
                  as="img"
                  src={image}
                  alt={`Slide ${index + 1}`}
                  width="100%"
                  height="100%"
                  objectFit="contain"
                  objectPosition="center"
                  transition="all 0.5s ease"
                  _hover={{
                    transform: 'scale(1.02)',
                    filter: 'brightness(1.1)',
                  }}
                  loading="lazy"
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  )
}

export default ImageSlider 