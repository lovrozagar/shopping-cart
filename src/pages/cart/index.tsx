import PageSectionHeading from '@/components/page-section-heading/page-section-heading'
import { useContext } from 'react'
import { CartContext } from '@/App'
import { PAYMENT } from '@/constants/constants'
import { CarProduct } from '@/types/car-types'

import PaymentSummary from './payment-summary/payment-summary'
import CartList from '@/pages/cart/cart-list/cart-list'
import { isExactSameCar } from '@/utils/utils'

function Cart() {
  const { cart, setCart } = useContext(CartContext)

  const getBase = () => {
    if (!cart.length) return 0
    return cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
  }

  const getShipping = () => {
    if (getBase() > PAYMENT.FREE_SHIPPING_MINIMUM_TOTAL) return 0
    else return PAYMENT.STANDARD_SHIPPING
  }

  const getTotal = () => {
    return getBase() + getShipping()
  }

  const handleQuantityChange = (value: string, car: CarProduct) => {
    if (!car) return

    setCart((prevCart) =>
      prevCart.map((product) => {
        if (!(product.name === car.name && isExactSameCar(product, car)))
          return product

        return { ...product, quantity: parseInt(value) }
      })
    )
  }

  return (
    <div className='mx-auto grid pt-6 xl:max-w-[1280px]'>
      <PageSectionHeading
        title='Cart'
        description='One step away from real speed.'
      />
      <div className='mt-4 grid gap-8 md:grid-cols-[1.5fr_1fr]'>
        <div className='grid gap-y-3 self-start md:order-2'>
          <PaymentSummary
            cart={cart}
            getTotal={getTotal}
            getShipping={getShipping}
          />
        </div>
        <div className='self-start overflow-hidden rounded-lg shadow-around-low lg:order-1 '>
          <CartList cart={cart} handleQuantityChange={handleQuantityChange} />
        </div>
      </div>
    </div>
  )
}

export default Cart
