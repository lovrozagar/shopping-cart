import { ReactNode } from 'react'
import { Button } from '@/components/shadcnUI/button'
import { Badge } from '@/components/shadcnUI/badge'
import { X } from 'lucide-react'

type FilterBadgeProps = {
  children: ReactNode
  onClick?: () => void
}

function FilterBadge({ children, onClick }: FilterBadgeProps) {
  return (
    <Badge className='relative flex gap-1' variant='secondary'>
      {children}
      <Button
        variant='secondary'
        size='sm'
        className='max-h-[18px] max-w-[18px] p-0'
        onClick={onClick}
      >
        <X size={16} />
      </Button>
    </Badge>
  )
}

export default FilterBadge
