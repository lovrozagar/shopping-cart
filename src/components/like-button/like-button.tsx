import { useState } from 'react'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MouseEvent } from '@/types/event-types'
import { isCarLiked, saveLikedCar, unsaveUnlikedCar } from '@/utils/utils'

type LikeButtonProps = {
  carName: string
  className: string
}

function LikeButton({ carName, className }: LikeButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isSelected, setIsSelected] = useState(isCarLiked(carName))

  const handleOnClick = (e: MouseEvent) => {
    e.preventDefault()

    if (isSelected) {
      setIsHovered(false)
      setIsSelected(false)
      unsaveUnlikedCar(carName)
    } else {
      setIsSelected(true)
      saveLikedCar(carName)
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const isDarkMode = Boolean(
    document.documentElement.classList.contains('dark')
  )
  const iconOutlineColor = isSelected
    ? isDarkMode
      ? 'white'
      : 'black'
    : isHovered
    ? isDarkMode
      ? '#dedede'
      : '#232323'
    : isDarkMode
    ? 'white'
    : 'black'
  const iconFillColor = isSelected
    ? isDarkMode
      ? 'white'
      : 'black'
    : isHovered
    ? isDarkMode
      ? '#dedede'
      : '#232323'
    : isDarkMode
    ? 'transparent'
    : 'transparent'

  return (
    <button
      className={className}
      onClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Heart
        color={iconOutlineColor}
        fill={iconFillColor}
        strokeWidth={2.5}
        size={20}
        className={cn(
          'font-bold text-primary-foreground transition-colors',
          isSelected ? 'animate-scale' : ''
        )}
      />
    </button>
  )
}

export default LikeButton
