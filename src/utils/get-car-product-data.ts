import carList from '@/constants/car-list'

type carProduct = {
  name: string
  price: number
  type: string
  color: string
  brand: string
  image: string
  description: string
  id: string
  upgrades?: { option: string; cost: number }[]
}

const getCarProductData = (product: string | undefined): carProduct | null => {
  if (!product) return null

  const carProduct = carList.filter((car) => car.id === product)[0]
  return carProduct ? carProduct : null
}

export default getCarProductData
