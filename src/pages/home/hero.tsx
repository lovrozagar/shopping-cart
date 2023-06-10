import { Button } from '@/components/shadcnUI/button'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import LINK_PATHS from '@/constants/link-paths'

type HeroProps = {
  mode: boolean
}

function Hero({ mode }: HeroProps) {
  return (
    <div className='mx-auto mb-7 grid max-w-[800px] content-start justify-center gap-y-6 pl-3 lg:mb-0 lg:mr-6 lg:mt-2'>
      <h2 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Where Automotive Dreams Become Reality
      </h2>
      <p className='leading-7'>
        Explore our exclusive collection of high-performance vehicles that
        embody power, precision, and unmatched luxury. From sleek sports cars to
        record-breaking hypercars, find your automotive masterpiece and embrace
        the extraordinary. Start your exhilarating journey with CarQuest today.
      </p>
      <div className='flex flex-wrap-reverse justify-center gap-3 lg:justify-start'>
        <Button
          asChild
          size='lg'
          variant={`outline`}
          className='mt-1 flex min-w-[200px] flex-1 sm:flex-none'
        >
          <Link to='/shopping-cart/cars/random'>Random Car</Link>
        </Button>
        <Button
          asChild
          size='lg'
          variant={`${mode ? 'info' : 'default'}`}
          className='relative mt-1 flex min-w-[200px] flex-1 items-center gap-2 sm:flex-none'
        >
          <Link to={LINK_PATHS.TO_CARS_ALL}>
            <ArrowRight size='18' className='absolute right-3' /> See Cars
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Hero
