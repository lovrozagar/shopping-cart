import { useState } from 'react'

function useMode() {
  const [mode, setMode] = useState<boolean>(() =>
    document.documentElement.classList.contains('dark')
  )

  const modeToggle = () => {
    setMode((prevMode) => {
      if (prevMode) {
        document.documentElement.classList.remove('dark')
        return false
      }
      document.documentElement.classList.add('dark')
      return true
    })
  }

  return { mode, modeToggle }
}

export default useMode
