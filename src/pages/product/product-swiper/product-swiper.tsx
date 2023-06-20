import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-ignore
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useEffect, useState } from 'react'
import LazyImage from '@/components/lazy-image/lazy-image'

type ProductSwiper = {
  images: string[]
}

function ProductSwiper({ images }: ProductSwiper) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const visibleCardOptions = ''

  return (
    <div className='grid'>
      <Swiper
        className='aspect-video h-full w-full'
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        <SwiperSlide className='h-full w-full '>
          <LazyImage src={images[0]} />
        </SwiperSlide>
        <SwiperSlide className='grid '>
          <LazyImage src={images[1]} />
        </SwiperSlide>
        <SwiperSlide className='grid'>
          <LazyImage src={images[2]} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mt-2 grid aspect-video w-full grid-cols-3 md:h-[100px] lg:h-[125px]'
      >
        <SwiperSlide className='h-full w-full'>
          <LazyImage src={images[0]} />
        </SwiperSlide>
        <SwiperSlide className='grid '>
          <LazyImage src={images[1]} />
        </SwiperSlide>
        <SwiperSlide className='grid'>
          <LazyImage src={images[2]} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProductSwiper
