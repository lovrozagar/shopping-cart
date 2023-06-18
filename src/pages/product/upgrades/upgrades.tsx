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
import { Dispatch, SetStateAction, useState } from 'react'
import { Badge } from '@/components/shadcnUI/badge'

function Upgrades({
  available,
  upgrades,
  setUpgradeCost,
}: {
  available: boolean
  upgrades: { option: string; cost: number; selected: boolean }[]
  setUpgradeCost: Dispatch<SetStateAction<number>>
}) {
  const [upgradeCheckboxes, setUpgradeCheckboxes] = useState([...upgrades])

  const handleCheckboxChange = (
    checked: boolean | string,
    index: number,
    upgrade: { option: string; cost: number; selected: boolean }
  ) => {
    if (checked) {
      setUpgradeCost((prevCost) => prevCost + upgrade.cost)
    } else {
      setUpgradeCost((prevCost) => prevCost - upgrade.cost)
    }
    setUpgradeCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox, chx_index) =>
        index === chx_index
          ? { ...checkbox, selected: !checkbox.selected }
          : checkbox
      )
    )
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
                <>
                  <label
                    key={index}
                    htmlFor={`checkbox-upgrade-${index}`}
                    className='flex flex-wrap items-center  gap-3 rounded p-3 hover:bg-secondary'
                  >
                    <Checkbox
                      id={`checkbox-upgrade-${index}`}
                      checked={upgradeCheckboxes[index].selected}
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
          <div className='mt-2 flex w-full flex-wrap items-center justify-start gap-1 pr-2 font-medium text-muted-foreground'>
            {upgradeCheckboxes
              .filter((upgrade) => upgrade.selected === true)
              .map((upgrade) => (
                <Badge className='flex items-center gap-1'>
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
