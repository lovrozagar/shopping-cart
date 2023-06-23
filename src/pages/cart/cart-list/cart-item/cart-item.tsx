import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcnUI/select'
import { Separator } from '@/components/shadcnUI/separator'
import { ScrollArea } from '@/components/shadcnUI/scroll-area'
import LazyImage from '@/components/lazy-image/lazy-image'

import { Fragment } from 'react'
import { isLastItem, formatCarPrice } from '@/utils/utils'
import { PAYMENT } from '@/constants/constants'
import { CarProduct } from '@/types/car-types'

type CartItem = {
  car: CarProduct
  index: number
  handleQuantityChange: (value: string, car: CarProduct) => void
}

function CartItem({ car, index, handleQuantityChange }: CartItem) {
  return (
    <>
      {index === 0 ? null : <Separator className='mt-5' />}
      <div className='my-8 grid gap-x-4 xs:grid-cols-[1fr_auto]'>
        <div className='flex flex-col justify-between gap-y-4'>
          <div className='grid gap-2'>
            <div className='text-md font-medium leading-none'>{car.name}</div>
            <div className='flex gap-1 text-sm italic text-muted-foreground'>
              {[car.type, car.brand, car.color].map((tag, index, array) => (
                <Fragment key={index}>
                  <span>{tag.toLowerCase()}</span>
                  {!isLastItem(array, index) ? <span>|</span> : null}
                </Fragment>
              ))}
            </div>
          </div>
          <div className='max-w-[300px] overflow-hidden rounded shadow-around-low'>
            <LazyImage src={car.images[0]} />
          </div>
        </div>
        <div className='-mb-1 mt-3 grid h-full items-end gap-2 xs:mb-0 xs:mt-0 xs:justify-end xs:gap-4'>
          <Select onValueChange={(value) => handleQuantityChange(value, car)}>
            <SelectTrigger className='max-w-[75px] self-start text-center xs:justify-self-end xs:text-start'>
              <SelectValue placeholder={car.quantity} />
            </SelectTrigger>
            <SelectContent className='min-w-9'>
              <ScrollArea className='h-[80px]'>
                {PAYMENT.QUANTITY_RANGE.map((option, index) => (
                  <SelectItem
                    className='m-0 flex w-[55px] justify-start gap-2 py-1 pl-3 pr-0'
                    key={index}
                    value={option.toString()}
                  >
                    {option}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Select>
          <div className='grid gap-3 xs:gap-2'>
            <div className='w-fit text-sm italic text-muted-foreground'>
              <table className='w-full'>
                <thead>
                  <tr className='m-0 grid grid-cols-2 border-t p-0 text-xs even:bg-muted'>
                    <th className='border-x border-secondary px-2 py-1 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
                      option
                    </th>
                    <th className='border-x border-secondary  px-2 py-1 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
                      cost
                    </th>
                  </tr>
                </thead>
              </table>
              <div className='grid w-full gap-3'>
                <tbody className='grid text-xs'>
                  <tr className='m-0 grid grid-cols-2 border-t p-0 lowercase even:bg-muted'>
                    {car.upgrades &&
                      car.upgrades
                        ?.filter((upgrade) => upgrade.selected)
                        .map((upgrade) => (
                          <>
                            <td className='border border-secondary  px-2 py-1 text-start [&[align=center]]:text-center [&[align=right]]:text-right'>
                              {upgrade.option}
                            </td>
                            <td className='border border-secondary  px-2 py-1 text-end [&[align=center]]:text-center [&[align=right]]:text-right'>
                              {formatCarPrice(upgrade.cost * car.quantity)}
                            </td>
                          </>
                        ))}
                    <td className='border border-secondary  px-2 py-1 text-start [&[align=center]]:text-center [&[align=right]]:text-right'>
                      base price
                    </td>
                    <td className='border border-secondary  px-2 py-1 text-end [&[align=center]]:text-center [&[align=right]]:text-right'>
                      {formatCarPrice(car.basePrice * car.quantity)}
                    </td>
                  </tr>
                </tbody>
              </div>
            </div>
            <p className='text-md justify-font-medium mr-1 mt-1 font-semibold leading-none xs:text-end'>
              {formatCarPrice(car.price * car.quantity)}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem
