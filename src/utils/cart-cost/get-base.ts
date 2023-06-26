import { CarProduct } from '@/types/car-types'

const getBase = (cart: CarProduct[]) => {
  if (!cart.length) return 0
  return cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
}

export default getBase
