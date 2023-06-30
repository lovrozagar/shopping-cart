import { Button } from '@/components/shadcnUI/button'
import { Link } from 'react-router-dom'
import { LINK_PATHS } from '@/constants/constants'

function EmptyAlert() {
  return (
    <div className='fixed left-0 right-0 mx-auto grid h-[400px] w-fit place-content-center py-4 text-primary-foreground tall:h-[600px]'>
      <div className='absolute -left-[140px] top-[70px] -z-10 h-80 w-80 rotate-[160deg] tall:top-36'>
        <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
          <path
            className='bg-constant-red text-constant-red'
            fill='#ef4343'
            d='M45.4,-50.9C60.9,-41.2,76.9,-28.8,79,-14.3C81.1,0.2,69.4,16.8,59.1,33.6C48.8,50.4,39.8,67.5,25.6,74.5C11.4,81.4,-7.9,78.2,-23.4,70C-39,61.9,-50.6,49,-59,34.2C-67.3,19.4,-72.3,2.9,-70.4,-13.1C-68.4,-29.1,-59.4,-44.6,-46.5,-54.8C-33.6,-64.9,-16.8,-69.7,-0.9,-68.6C15,-67.6,30,-60.6,45.4,-50.9Z'
            transform='translate(100 100)'
          />
        </svg>
      </div>
      <div className='absolute left-7 top-[70px] -z-20 h-80 w-80 tall:top-[160px]'>
        <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
          <path
            className='bg-constant-red text-constant-red'
            fill='#3c83f6'
            d='M45.4,-50.9C60.9,-41.2,76.9,-28.8,79,-14.3C81.1,0.2,69.4,16.8,59.1,33.6C48.8,50.4,39.8,67.5,25.6,74.5C11.4,81.4,-7.9,78.2,-23.4,70C-39,61.9,-50.6,49,-59,34.2C-67.3,19.4,-72.3,2.9,-70.4,-13.1C-68.4,-29.1,-59.4,-44.6,-46.5,-54.8C-33.6,-64.9,-16.8,-69.7,-0.9,-68.6C15,-67.6,30,-60.6,45.4,-50.9Z'
            transform='translate(100 100)'
          />
        </svg>
      </div>
      <div className='mt-16 grid tall:mt-6'>
        <div className='backdrop-blur-2xl'>
          <p className='text-center text-xl font-medium'>No items in cart</p>
          <p className='text-md text-center'>Keep exploring and come back</p>
        </div>

        <Button
          asChild
          className='mt-6 bg-background text-primary'
          variant='ghost'
        >
          <Link to={LINK_PATHS.TO_CARS_ALL}>Explore cars</Link>
        </Button>
      </div>
    </div>
  )
}

export default EmptyAlert
