import { useContext } from 'react'
import { ModeContext } from '@/App'
import Hero from '@/pages/home/hero'
import ImageSwiper from '@/pages/home/image-swiper'
import CategoryCard from '@/pages/home/category-card'

function Home() {
  const { mode } = useContext(ModeContext)

  return (
    <div className='mx-auto max-w-[800px] lg:max-w-none xl:mx-auto xl:max-w-[1280px]'>
      <div className='mt-8 grid grid-cols-1 lg:mt-10 lg:grid-cols-2'>
        <Hero mode={mode} />
        <div className='grid content-center xl:justify-end'>
          <div className='mx-3 grid'>
            <ImageSwiper />
          </div>
        </div>
      </div>
      <div className='mt-6 grid gap-6 sm:mt-10 md:mt-8 lg:grid-cols-3'>
        <CategoryCard type='sport' />
        <CategoryCard type='super' />
        <CategoryCard type='hyper' />
      </div>
    </div>
  )
}

export default Home
