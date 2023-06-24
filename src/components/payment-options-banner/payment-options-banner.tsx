import mastercard from '@/assets/images/cards/mastercard.avif'
import maestro from '@/assets/images/cards/maestro.avif'
import visa from '@/assets/images/cards/visa.avif'
import googlepay from '@/assets/images/cards/googlepay.webp'
import applepay from '@/assets/images/cards/applepay.avif'

function PaymentOptionsBanner() {
  return (
    <div className='flex flex-nowrap gap-4 overflow-hidden'>
      {[mastercard, maestro, visa, googlepay, applepay].map((payment) => (
        <img
          src={payment}
          alt={payment.split('/').at(-1)?.split('.').at(0)}
          className='h-[28px]'
        />
      ))}
    </div>
  )
}

export default PaymentOptionsBanner
