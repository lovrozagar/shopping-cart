import { SAVED_CARS_KEY } from '@/constants/storage-keys'

const unsaveUnlikedCar = (carName: string): void => {
  const saveCarsString = localStorage.getItem(SAVED_CARS_KEY)
  const savedCarsArray = JSON.parse(saveCarsString ? saveCarsString : '[]')

  if (!savedCarsArray.length) return
  else {
    let newSavedCars = savedCarsArray.filter((car: string) => carName !== car)
    localStorage.setItem(SAVED_CARS_KEY, JSON.stringify(newSavedCars))
  }
}

export default unsaveUnlikedCar
