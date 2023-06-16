import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/shadcnUI/popover'
import { Button } from '@/components/shadcnUI/button'
import { Separator } from '@/components/shadcnUI/separator'
import { Slider } from '@/components/shadcnUI/slider'
import { SlidersHorizontal, RotateCcw } from 'lucide-react'
import { PRICE_SLIDER } from '@/constants/constants'

type FilterPopoverProps = {
  range: number[]
  filters: Filters
  onRangeDrag: (e: number[]) => void
  onFilterClick: (
    filterMapOfType: 'type' | 'color' | 'brand',
    filter: string
  ) => void
  onFiltersReset: () => void
}

interface Filters {
  filtersType: Map<string, string>
  filtersColor: Map<string, string>
  filtersBrand: Map<string, string>
}

function FilterPopover({
  range,
  filters,
  onRangeDrag,
  onFilterClick,
  onFiltersReset,
}: FilterPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' className='flex gap-2'>
          <SlidersHorizontal size={16} /> <>Filter</>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='p-0'>
        <div className='h-100 w-full rounded-md border p-2'>
          <div className='grid gap-4 px-2 pb-2'>
            <div>
              <h4 className='mb-3 mt-1 font-medium leading-none'>Price</h4>
              <div className='flex justify-between pb-1'>
                <output>0</output>
                <output>{range}</output>
              </div>

              <Slider
                defaultValue={range}
                onValueChange={onRangeDrag}
                max={PRICE_SLIDER.max}
                min={PRICE_SLIDER.min}
              />
            </div>
            <div>
              <h4 className='mb-3 mt-1 font-medium leading-none'>Type</h4>
              <div className='flex flex-wrap gap-2'>
                {['Sport', 'Super', 'Hyper'].map((button, index) => (
                  <Button
                    key={index}
                    variant={
                      filters.filtersType.size &&
                      filters.filtersType.get(button)
                        ? 'default'
                        : 'outline'
                    }
                    className='flex'
                    onClick={() => onFilterClick('type', button)}
                  >
                    {button}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h4 className='mb-3 mt-1 font-medium leading-none'>Color</h4>
              <div className='flex flex-wrap gap-2'>
                {[
                  'Red',
                  'Blue',
                  'Black',
                  'Grey',
                  'Purple',
                  'Green',
                  'Yellow',
                ].map((button, index) => (
                  <Button
                    key={index}
                    variant={
                      filters.filtersColor.size &&
                      filters.filtersColor.get(button)
                        ? 'default'
                        : 'outline'
                    }
                    className='flex'
                    onClick={() => onFilterClick('color', button)}
                  >
                    {button}
                  </Button>
                ))}
              </div>
            </div>
            <Separator />
            <Button
              size='sm'
              variant='outline'
              onClick={onFiltersReset}
              className='mx-auto flex gap-2'
            >
              <RotateCcw size={16} />
              <>Reset</>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default FilterPopover
