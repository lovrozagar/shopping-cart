import { CarProduct } from '@/types/car-types'
import { getBase, getShipping } from '@/utils/utils'

const getTotal = (cart: CarProduct[]) => {
  return getBase(cart) + getShipping(cart)
}

export default getTotal
