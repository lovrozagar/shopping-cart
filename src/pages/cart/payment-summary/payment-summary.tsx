import { Card, CardContent } from '@/components/shadcnUI/card'
import { Separator } from '@/components/shadcnUI/separator'
import LoadingButton from '@/components/loading-button/loading-button'
import PaymentOptionsBanner from '@/components/payment-options-banner/payment-options-banner'

import { BadgePercent } from 'lucide-react'
import { formatCarPrice } from '@/utils/utils'
import { CarProduct } from '@/types/car-types'

type PaymentSummaryProps = {
  cart: CarProduct[]
  getTotal: () => number
  getShipping: () => number
}

function PaymentSummary({ cart, getTotal, getShipping }: PaymentSummaryProps) {
  return (
    <>
      <Card>
        <div className='shadow-around-low'>
          <CardContent className='grid gap-y-2 pt-4'>
            <div className='flex justify-between gap-x-2'>
              <div className='flex flex-wrap items-center gap-x-2'>
                <p className='text-lg font-semibold'>Total</p>
                <p className='text-sm text-muted-foreground'>tax included</p>
              </div>
              <p className='text-lg font-semibold'>
                {formatCarPrice(getTotal())}
              </p>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm font-medium'>Shipping</p>
              <p className='text-sm font-medium'>
                {formatCarPrice(getShipping())}
              </p>
            </div>
            <LoadingButton
              disabled={cart.length > 0 ? false : true}
              className='mt-4 w-full font-semibold shadow-around-low'
              isValidSubmit={true}
              text='Proceed with payment'
              loadingText='Continuing with payment'
              successText='Continuing with payment'
            />
          </CardContent>
          <Separator />
          <CardContent className='mt-4'>
            <PaymentOptionsBanner />
          </CardContent>
        </div>
      </Card>
      <Card>
        <div className='shadow-around-low '>
          <CardContent className='flex items-center gap-2 p-4 text-sm text-muted-foreground'>
            <BadgePercent size={18} />
            <p>
              Discount codes and gift cards can be entered in the next screen
            </p>
          </CardContent>
        </div>
      </Card>
    </>
  )
}

export default PaymentSummary
