import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { LINK_PATHS } from '@/constants/constants'
import { CarProduct } from '@/types/car-types'
import { Card, CardContent } from '@/components/shadcnUI/card'
import LikeButton from '@/components/like-button/like-button'
import formatCarPrice from '@/utils/format-car-price'

type CarCardProps = {
  category: string
  car: CarProduct
}

function CarCard({ category, car }: CarCardProps) {
  return (
    <Card className='transition-shadow duration-300 hover:shadow-xl'>
      <CardContent className='grid h-full overflow-hidden rounded-md p-0 shadow-md'>
        <div className='relative grid h-[270px] overflow-hidden'>
          <Link to={LINK_PATHS.goToProduct(category, car.id)} tabIndex={-1}>
            <LazyLoadImage
              src={car.image}
              className='absolute top-0 aspect-video h-full w-full object-cover object-center'
            />
            <LikeButton
              carName={car.name}
              className='absolute bottom-2 right-2 z-10 rounded-full bg-background/70 p-[6px]'
            />
          </Link>
        </div>
        <div className='grid gap-3 px-4 pb-5 pt-3'>
          <div className='flex items-center justify-between gap-2'>
            <h4 className='ml-[2px] scroll-m-20 text-xl font-semibold tracking-tight'>
              <Link
                to={LINK_PATHS.goToProduct(category, car.id)}
                className='hover:text-constant-blue hover:underline'
              >
                {car.name}
              </Link>
            </h4>
            <Card className='mr-[2px] rounded-md bg-secondary px-2 py-1 text-lg font-medium italic'>
              {formatCarPrice(car.price)}
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CarCard
