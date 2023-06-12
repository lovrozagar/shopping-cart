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
import { Wrench } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'

function Upgrades({
  available,
  upgrades,
  setUpgradeCost,
}: {
  available: boolean
  upgrades: { option: string; cost: number }[]
  setUpgradeCost: Dispatch<SetStateAction<number>>
}) {
  const [upgradeCheckboxes, setUpgradeCheckboxes] = useState(
    upgrades.map(() => false)
  )

  const handleCheckboxChange = (
    checked: boolean | string,
    index: number,
    upgrade: { option: string; cost: number }
  ) => {
    if (checked) {
      setUpgradeCost((prevCost) => prevCost + upgrade.cost)
    } else {
      setUpgradeCost((prevCost) => prevCost - upgrade.cost)
    }
    setUpgradeCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox, chx_index) =>
        index === chx_index ? !checkbox : checkbox
      )
    )
  }

  return (
    <>
      {available ? (
        <div className='flex'>
          <Popover>
            <PopoverTrigger asChild>
              <Button
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
                <>
                  <label
                    key={index}
                    htmlFor={`checkbox-upgrade-${index}`}
                    className='flex flex-wrap items-center  gap-3 rounded p-3 hover:bg-secondary'
                  >
                    <Checkbox
                      id={`checkbox-upgrade-${index}`}
                      checked={upgradeCheckboxes[index]}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(checked, index, upgrade)
                      }
                    />
                    <p className='font-medium'>{`${upgrade.option}`}</p>
                    <p className='ml-auto text-muted-foreground'>{`$${upgrade.cost}`}</p>
                  </label>
                  {index !== array.length - 1 ? (
                    <Separator className='my-2' />
                  ) : null}
                </>
              ))}
            </PopoverContent>
          </Popover>
          <div className='mx-2 flex w-full items-center justify-start overflow-x-auto pr-2 font-medium italic text-muted-foreground'>
            {upgradeCheckboxes.map((checkbox, index, array) => (
              <>
                <p className='min-w-fit text-sm'>
                  {checkbox
                    ? `+ ${upgrades[index].option}${
                        index !== array.length - 1 ? ',' : ''
                      } ${' '}`
                    : null}
                </p>
                <span className='pr-1'></span>
              </>
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
