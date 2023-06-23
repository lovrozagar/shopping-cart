import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/shadcnUI/popover'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/shadcnUI/tooltip'
import { Button } from '@/components/shadcnUI/button'
import { Checkbox } from '@/components/shadcnUI/checkbox'
import { Separator } from '@/components/shadcnUI/separator'
import { Wrench, Check } from 'lucide-react'
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Badge } from '@/components/shadcnUI/badge'
import { CarProduct } from '@/types/car-types'

function Upgrades({
  available,
  upgrades,
  setCar,
}: {
  available: boolean
  upgrades: { option: string; cost: number; selected: boolean }[]
  setCar: Dispatch<SetStateAction<CarProduct | null>>
}) {
  const handleCheckboxChange = (checked: boolean, index: number) => {
    setCar((prevCar) => {
      if (!prevCar) return null

      const upgrades = { ...prevCar }.upgrades?.map((upgrade, upgradeIndex) => {
        if (upgradeIndex === index) return { ...upgrade, selected: checked }
        return upgrade
      })

      const upgradesCost =
        upgrades
          ?.filter((upgrade) => upgrade.selected === true)
          .reduce((acc, cur) => acc + cur.cost, 0) || 0

      return { ...prevCar, price: prevCar.basePrice + upgradesCost, upgrades }
    })
  }

  return (
    <>
      {available ? (
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                size='lg'
                disabled={available ? false : true}
                variant='outline'
                className='flex gap-2'
              >
                <Wrench size={20} />
                <>Upgrades</>
              </Button>
            </PopoverTrigger>
            <PopoverContent className='px-2'>
              {upgrades.map((upgrade, index, array) => (
                <Fragment key={index}>
                  <label
                    htmlFor={`checkbox-upgrade-${index}`}
                    className='flex flex-wrap items-center gap-3 rounded p-3 hover:bg-secondary'
                  >
                    <Checkbox
                      id={`checkbox-upgrade-${index}`}
                      checked={upgrades[index].selected}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(checked as boolean, index)
                      }
                    />
                    <p className='font-medium'>{`${upgrade.option}`}</p>
                    <p className='ml-auto text-muted-foreground'>{`$${upgrade.cost}`}</p>
                  </label>
                  {index !== array.length - 1 ? (
                    <Separator className='my-2' />
                  ) : null}
                </Fragment>
              ))}
            </PopoverContent>
          </Popover>
          <div className='mt-2 flex w-full flex-wrap items-center justify-start gap-2 pr-2 font-medium text-muted-foreground'>
            {upgrades
              .filter((upgrade) => upgrade.selected === true)
              .map((upgrade, index) => (
                <Badge key={index} className='flex items-center gap-1'>
                  {upgrade.option}
                  <Check size={16} />
                </Badge>
              ))}
          </div>
        </div>
      ) : (
        <div className='grid'>
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild className='inline-block'>
                  <span>
                    <Button
                      disabled
                      variant='outline'
                      className='pointer-events-auto flex gap-2'
                    >
                      <Wrench size={20} />
                      <>Upgrades</>
                    </Button>
                  </span>
                </TooltipTrigger>
                <TooltipContent
                  className='max-w-[275px] px-2 py-3 text-center'
                  sideOffset={-120}
                >
                  <p className='text-sm text-muted-foreground'>
                    Updates for this car are currently unavailable.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      )}
    </>
  )
}

export default Upgrades
