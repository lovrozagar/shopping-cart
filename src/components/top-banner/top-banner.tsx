import { ModeContext } from '@/App'
import { cn } from '@/lib/utils'
import { Truck } from 'lucide-react'
import { useContext } from 'react'

function TopBanner() {
  const { mode } = useContext(ModeContext)

  return (
    <div
      className={cn(
        'flex items-center justify-center gap-2 px-1 py-2.5',
        mode ? 'bg-constant-blue text-foreground' : 'bg-primary text-background'
      )}
    >
      <p className='text-center text-xs font-medium uppercase leading-none'>
        Free car transport on orders over $500,000
      </p>
      <Truck size={18} className={mode ? 'text-ghost' : 'text-ring'} />
    </div>
  )
}
export default TopBanner
