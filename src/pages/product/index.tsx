import { Badge } from '@/components/shadcnUI/badge'
import { useParams } from 'react-router-dom'
import { getCarProductData, formatCarPrice } from '@/utils/utils'
import { useState } from 'react'
import { Button } from '@/components/shadcnUI/button'
import Upgrades from './upgrades/upgrades'
import NotifyMeForm from './notify-me-form/notify-me-form'
import LikeButton from '@/components/like-button/like-button'
import DetailsAccordion from '../cars/details-accordion/details-accordion'
import ProductSwiper from '@/pages/product/product-swiper/product-swiper'

function CarProduct() {
  const { product } = useParams()
  const [car] = useState(getCarProductData(product))
  const [upgradeCost, setUpgradeCost] = useState(0)

  if (!car)
    return (
      <div>
        Failed to load car data, please refresh the page or try again later.
      </div>
    )

  return (
    <div className='mx-auto mt-6 max-w-[1200px] px-1 lg:mt-10 lg:px-0'>
      <div className='grid gap-y-4 lg:grid-cols-2'>
        <div className='aspect-[4/3]'>
          <ProductSwiper images={car.image} />
        </div>
        <div className='flex flex-col justify-between gap-3 lg:pl-6'>
          <div>
            <h2 className='w-fit scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
              {car.name}
            </h2>
            <div className='mt-4 flex gap-2'>
              {[car.type, car.color, car.brand].map((tag, index) => (
                <Badge key={index} variant='secondary'>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className='mt-3 flex w-fit justify-start py-1 text-xl font-medium'>
            <p>{formatCarPrice(car.price + upgradeCost)}</p>
          </div>
          <div className='mt-1 grid gap-2'>
            <Upgrades
              upgrades={
                car.upgrades && car.upgrades.length !== 0 ? car.upgrades : []
              }
              available={
                car.upgrades?.length && car.upgrades.length !== 0 ? true : false
              }
              setUpgradeCost={setUpgradeCost}
            />
            {car.upgrades?.length && car.upgrades.length !== 0 ? null : (
              <NotifyMeForm />
            )}
          </div>
          <div className='mt-1 grid grid-cols-[auto_1fr] items-center gap-2 sm:mr-auto sm:flex sm:flex-row-reverse'>
            <LikeButton
              carName={car.name}
              className='rounded-full bg-secondary p-[10px]'
            />
            <Button className='sm:min-w-[250px]'>Add to cart</Button>
          </div>
          <p className='mt-2 text-sm text-muted-foreground'>
            {car.description}
          </p>
        </div>
      </div>
      <DetailsAccordion />
    </div>
  )
}

export default CarProduct
