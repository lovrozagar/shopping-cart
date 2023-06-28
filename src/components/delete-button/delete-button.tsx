import { cn } from '@/lib/utils'
import { Trash } from 'lucide-react'
import { Button } from '../shadcnUI/button'

type DeleteButtonProps = {
  className?: string
  variant?:
    | 'ghost'
    | 'default'
    | 'destructive'
    | 'destructive_outline'
    | 'info'
    | 'outline'
    | 'secondary'
    | 'link'
    | null
    | undefined
  iconSize?: number
  iconColor?: string
  handler: () => void
}

function DeleteButton({
  handler,
  className,
  variant = 'ghost',
  iconSize = 18,
  iconColor = 'text-constant-red',
}: DeleteButtonProps) {
  return (
    <Button
      variant={variant}
      className={cn(
        'h-auto self-center rounded-full p-2 hover:bg-constant-red/10',
        className
      )}
      onClick={handler}
    >
      <Trash size={iconSize} className={iconColor} />
    </Button>
  )
}

export default DeleteButton
