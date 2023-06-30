import PageSectionHeading from '@/components/page-section-heading/page-section-heading'
import { getLikedCars } from '@/utils/utils'
import { CAR_LIST } from '@/constants/constants'
import { useEffect, useState } from 'react'
import { CarProduct } from '@/types/car-types'
import GarageItem from './garage-item/garage-item'

function Garage() {
  const [likedCars, setLikedCars] = useState(() => getLikedCars())
  const CAR_MAP = new Map(CAR_LIST.map((car) => [car.name, car]))
  const [likedCarList, setLikedCarList] = useState<CarProduct[]>([])

  useEffect(() => {
    setLikedCarList(
      likedCars
        .map((carName) => CAR_MAP.get(carName))
        .filter((car): car is CarProduct => car !== undefined)
    )
  }, [likedCars])

  return (
    <div className='mx-auto grid h-full overflow-x-hidden py-6 xl:max-w-[1280px]'>
      <PageSectionHeading
        title='My garage'
        description='Browse your favorites.'
      />
      <div className='mt-3 grid grid-cols-fill-min gap-3 sm:grid-cols-fill-max'>
        {likedCarList.map((car) => (
          <GarageItem key={car.id} car={car} setLikedCars={setLikedCars} />
        ))}
      </div>
    </div>
  )
}

export default Garage
