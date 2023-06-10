import { SAVED_CARS_KEY } from '@/constants/storage-keys'

const isCarLiked = (carName: string) => {
  const savedCarsString = localStorage.getItem(SAVED_CARS_KEY)
  const savedCarsArray = JSON.parse(savedCarsString ? savedCarsString : '[]')

  if (!savedCarsArray.length) return false

  return savedCarsArray.filter((car: string) => carName === car).length === 1
}

export default isCarLiked
