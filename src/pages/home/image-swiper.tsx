import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-ignore
import SwiperCore, { Autoplay } from 'swiper'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useState, useEffect } from 'react'

import bmw_grey from '@/assets/images/bmw/bmw_grey.webp'
import mustang_red from '@/assets/images/mustang/mustang_red.webp'
import lamborghini_yellow from '@/assets/images/lamborghini/lamborghini_yellow.webp'
import nevera_blue from '@/assets/images/nevera/nevera_blue.webp'
import white from '@/assets/images/placeholder/white.webp'

// SwiperCore.use([EffectCards, Autoplay])

function ImageSwiper() {
  const [visibleCardOptions, setVisibleCardOptions] = useState('invisible')

  useEffect(() => {
    const optionsTimeout = setTimeout(() => {
      setVisibleCardOptions('visible')
    }, 500)
    return () => {
      clearTimeout(optionsTimeout)
    }
  }, [])

  return (
    <Swiper className='h-full w-full'>
      <SwiperSlide>
        <div className='grid'>
          <img
            src={bmw_grey}
            alt='grey BMW'
            className={`aspect-video h-full rounded-lg object-cover shadow-xl`}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className='grid '>
        <LazyLoadImage
          src={mustang_red}
          placeholderSrc={white}
          alt='Image Alt'
          className={`aspect-video w-full rounded-lg object-cover shadow-xl ${visibleCardOptions}`}
        />
      </SwiperSlide>
      <SwiperSlide className='grid'>
        <LazyLoadImage
          src={lamborghini_yellow}
          placeholderSrc={white}
          alt='Image Alt'
          className={`aspect-video w-full rounded-lg object-cover shadow-xl ${visibleCardOptions}`}
        />
      </SwiperSlide>
      <SwiperSlide className='grid'>
        <LazyLoadImage
          src={nevera_blue}
          placeholderSrc={white}
          alt='Image Alt'
          className={`aspect-video w-full rounded-lg object-cover shadow-xl ${visibleCardOptions}`}
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default ImageSwiper
