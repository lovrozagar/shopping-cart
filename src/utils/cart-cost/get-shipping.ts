import { CarProduct } from '@/types/car-types'
import { getBase } from '@/utils/utils'
import { PAYMENT } from '@/constants/constants'

const getShipping = (cart: CarProduct[]) => {
  if (getBase(cart) > PAYMENT.FREE_SHIPPING_MINIMUM_TOTAL) return 0
  else return PAYMENT.STANDARD_SHIPPING
}

export default getShipping
