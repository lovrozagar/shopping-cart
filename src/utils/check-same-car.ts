import { CarProduct } from '@/types/car-types'

const areSameUpgrades = (
  productUpgrades: { option: string; cost: number; selected: boolean }[],
  carUpgrades: { option: string; cost: number; selected: boolean }[]
) => {
  return JSON.stringify(productUpgrades) === JSON.stringify(carUpgrades)
}

const isExactSameCar = (product: CarProduct, car: CarProduct) => {
  return (
    product.name === car.name &&
    product.upgrades &&
    car.upgrades &&
    areSameUpgrades(product.upgrades, car.upgrades)
  )
}

export { areSameUpgrades, isExactSameCar }
