import { Button } from '@/components/shadcnUI/button'
import { Link } from 'react-router-dom'
import { Wrench } from 'lucide-react'
import LINK_PATHS from '@/constants/link-paths'

type ViewAndCustomizeButtonProps = {
  category: string
  id: string
}

function ViewAndCustomizeButton({ category, id }: ViewAndCustomizeButtonProps) {
  return (
    <Button
      asChild
      variant='outline'
      className='group overflow-hidden shadow-sm sm:min-w-[250px]'
    >
      <Link
        to={LINK_PATHS.goToProduct(category, id)}
        className='relative flex w-full justify-center gap-2'
      >
        <div>View and customize</div>
        <Wrench
          size={20}
          className='pointer-events-none transition-transform sm:absolute sm:right-3 sm:translate-y-[-60px] sm:group-hover:translate-y-[0px]'
        />
      </Link>
    </Button>
  )
}

export default ViewAndCustomizeButton
