import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/shadcnUI/card'
import { Separator } from '@/components/shadcnUI/separator'
import CartItem from '@/pages/cart/cart-list/cart-item/cart-item'

import { Info } from 'lucide-react'
import { getDeliveryDateRange } from '@/utils/utils'
import { CarProduct } from '@/types/car-types'

type CartListProps = {
  cart: CarProduct[]
  handleQuantityChange: (value: string, car: CarProduct) => void
}

function CartList({ cart, handleQuantityChange }: CartListProps) {
  const [startDate, endDate] = getDeliveryDateRange()

  return (
    <Card>
      <CardHeader className='py-4'>
        <CardDescription className='flex items-center gap-2'>
          <Info size={18} />
          <>Products in cart are not reserved</>
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className='py-3'>
        <div className='mb-8 mt-2 flex flex-wrap items-center justify-between gap-3'>
          <p className='text-md font-bold italic'>Delivery</p>
          <div className='flex gap-1 rounded-full bg-secondary px-3 text-sm font-semibold leading-7'>
            <span className='text-constant-red'>{startDate}</span>
            <span>-</span>
            <span className='text-constant-blue'>{endDate}</span>
          </div>
        </div>
        {cart.map((car, index) => (
          <CartItem
            car={car}
            index={index}
            handleQuantityChange={handleQuantityChange}
          />
        ))}
      </CardContent>
    </Card>
  )
}

export default CartList
