import { Card, CardContent } from '@/components/shadcnUI/card'
import LazyImage from '@/components/lazy-image/lazy-image'
import LikeButton from '@/components/like-button/like-button'
import AddToCartButton from '@/components/add-to-cart-button/add-to-cart-button'
import { Link } from 'react-router-dom'
import { LINK_PATHS } from '@/constants/constants'
import { CarProduct } from '@/types/car-types'
import { getLikedCars, handleAddToCart } from '@/utils/utils'
import { Dispatch, SetStateAction, useContext } from 'react'
import { CartContext } from '@/App'
import { useToast } from '@/hooks/use-toast'
import ViewAndCustomizeButton from '@/components/view-and-customize-button/view-and-customize-button'
import CarCardDetailsBar from '@/components/car-card-details-bar/car-card-details-bar'
import CarCardNamePriceBar from '@/components/car-card-name-price-bar/car-card-name-price-bar'

type GarageItemProps = {
  car: CarProduct
  setLikedCars: Dispatch<SetStateAction<string[]>>
}

function GarageItem({ car, setLikedCars }: GarageItemProps) {
  const { cart, setCart } = useContext(CartContext)
  const { toast } = useToast()

  return (
    <Card className='transition-shadow duration-300 hover:shadow-around-low'>
      <CardContent className='grid h-full overflow-hidden rounded-md p-0 shadow-md'>
        <div className='relative grid h-[270px] overflow-hidden'>
          <Link to={LINK_PATHS.goToProduct(car.type, car.id)} className=''>
            <LazyImage src={car.images[0]} />
            <LikeButton
              carName={car.name}
              className='absolute bottom-2 right-2 z-10 rounded-full bg-background/70 p-[6px]'
              handler={() => setLikedCars(() => getLikedCars())}
            />
          </Link>
        </div>
        <div className='grid gap-4 px-4 pb-5 pt-3'>
          <div className='ml-1 grid gap-3'>
            <CarCardNamePriceBar
              name={car.name}
              type={car.type}
              id={car.id}
              price={car.price}
            />
          </div>
          <div className='ml-1'>
            <CarCardDetailsBar color={car.color} upgrades={car.upgrades} />
          </div>
          <div className='grid gap-2'>
            <ViewAndCustomizeButton category={car.type} id={car.id} />
            <AddToCartButton
              handler={() => handleAddToCart(car, cart, setCart, toast)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default GarageItem
