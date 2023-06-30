import { Link } from 'react-router-dom'
import { formatCarPrice } from '@/utils/utils'
import { LINK_PATHS } from '@/constants/constants'

type CarCardNamePriceBarProps = {
  name: string | undefined
  type: string | undefined
  id: string | undefined
  price: number | undefined
}

function CarCardNamePriceBar({
  name,
  type,
  id,
  price,
}: CarCardNamePriceBarProps) {
  if (!name || !type || !id || !price) return null

  return (
    <>
      <div className='grid items-center justify-between gap-1'>
        <h4 className='ml-[2px] scroll-m-20 text-sm font-medium uppercase'>
          <Link
            to={LINK_PATHS.goToProduct(type, id)}
            className='hover:text-constant-blue hover:underline'
          >
            {name}
          </Link>
        </h4>
      </div>
      <p className='text-sm font-medium'>{formatCarPrice(price)}</p>
    </>
  )
}

export default CarCardNamePriceBar
