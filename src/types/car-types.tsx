type CarProduct = {
  name: string
  price: number
  type: string
  color: string
  brand: string
  image: string
  description: string
  id: string
  upgrades?: { option: string; cost: number }[]
}

export type { CarProduct }
