import isLastItem from '@/utils/is-last-item'
import { Upgrade } from '@/types/car-types'
import { cn } from '@/lib/utils'
import { Fragment } from 'react'

type CarCardDetailsBarProps = {
  color: string | undefined
  upgrades: Upgrade[] | undefined
}

function CarCardDetailsBar({ color, upgrades }: CarCardDetailsBarProps) {
  if (!color || !upgrades) return null

  const getPreviewColor = () => {
    switch (color.toLowerCase()) {
      case 'blue':
        return 'bg-blue-500'
      case 'violet':
        return 'bg-violet-500'
      case 'grey':
        return 'bg-neutral-400'
      case 'grey-blue':
        return 'bg-slate-300'
    }
  }

  return (
    <div className='grid grid-cols-[auto_auto_1fr] items-center gap-2 overflow-hidden'>
      <span className={cn('h-4 w-4 rounded-full', getPreviewColor())}></span>
      <p className='overflow-hidden text-ellipsis whitespace-nowrap break-keep text-xs text-muted-foreground'>
        <span className='text-xs text-muted-foreground'>upgrades: </span>
        {upgrades.length > 0 ? (
          upgrades.map((upgrade, index, array) => (
            <Fragment key={index}>{`${upgrade.option.toLowerCase()}${
              isLastItem(array, index) ? '' : ', '
            }`}</Fragment>
          ))
        ) : (
          <span>currently not available</span>
        )}
      </p>
    </div>
  )
}

export default CarCardDetailsBar
