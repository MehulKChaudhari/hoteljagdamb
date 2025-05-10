import { Box, Container } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ImageSlider = () => {
  const images = [
    '/images/mutton-thali.jpeg',
    '/images/mutton.jpeg',
    '/images/veg-thali.jpeg'
  ]

  return (
    <Box width="100%" position="relative">
      <Container maxW="100%" p={0}>
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          style={{
            '--swiper-navigation-color': '#FFA500',
            '--swiper-pagination-color': '#FFA500',
            '--swiper-pagination-bullet-inactive-color': '#999999',
            '--swiper-pagination-bullet-inactive-opacity': '0.5',
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box
                width="100%"
                height="500px"
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
                  transition="transform 0.3s ease"
                  _hover={{
                    transform: 'scale(1.02)',
                  }}
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