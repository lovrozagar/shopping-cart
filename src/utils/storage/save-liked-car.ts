import { SAVED_CARS_KEY } from '@/constants/storage-keys'

const saveLikedCar = (carName: string): void => {
  const saveCarsString = localStorage.getItem(SAVED_CARS_KEY)
  const savedCarsArray = JSON.parse(saveCarsString ? saveCarsString : '[]')

  localStorage.setItem(
    SAVED_CARS_KEY,
    JSON.stringify([...savedCarsArray, carName])
  )
}

export default saveLikedCar
