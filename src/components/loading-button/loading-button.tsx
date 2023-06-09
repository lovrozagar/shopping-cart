import { useEffect, useRef, useState } from 'react'
import { Button } from '../shadcnUI/button'
import { Loader2 as Loader } from 'lucide-react'

type LoadingButtonProps = {
  isValidSubmit: boolean
  text: string
  loadingText: string
  successText: string
  variant?:
    | 'default'
    | 'destructive'
    | 'destructive_outline'
    | 'info'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null
    | undefined
}

function LoadingButton({
  isValidSubmit,
  text,
  loadingText,
  successText,
  variant = 'default',
}: LoadingButtonProps) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  let timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleLoadOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isValidSubmit && success) {
      e.preventDefault()
      setSuccess(false)
    }
    if (!isValidSubmit) return

    setLoading(true)
    timeout.current = setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 500)
  }

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current)
    }
  }, [])

  return (
    <Button
      variant={variant}
      className='flex gap-2'
      onClick={handleLoadOnClick}
    >
      {<>{loading ? loadingText : success ? successText : text}</>}
      {loading ? <Loader className='animate-spin' /> : null}
    </Button>
  )
}

export default LoadingButton
