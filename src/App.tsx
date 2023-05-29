import useMode from '@/hooks/useMode'
import { Button } from '@/components/shadcnUI/button'
import { Sun, Moon } from 'lucide-react'

function App() {
  const { mode, modeToggle } = useMode()

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <h1 className='text-center'>Hello, Project!</h1>
      <div className='flex justify-center'>
        <Button
          variant='outline'
          className='mx-auto flex gap-2'
          onClick={modeToggle}
        >
          {mode ? <Moon /> : <Sun />}Change theme
        </Button>
      </div>
    </div>
  )
}

export default App
