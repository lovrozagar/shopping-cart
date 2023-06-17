import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcnUI/select'
import { ArrowDownUp } from 'lucide-react'
import { CarProduct } from '@/types/car-types'

type SortSelectProps = {
  cars: CarProduct[]
  setCarsSorted: React.Dispatch<React.SetStateAction<CarProduct[]>>
}

function SortSelect({ cars, setCarsSorted }: SortSelectProps) {
  const handleCarSortOnSelect = (
    e: 'recommended' | 'price-low' | 'price-high'
  ) => {
    if (e === 'recommended') setCarsSorted(cars)
    else if (e === 'price-low') {
      setCarsSorted((prevCars) =>
        [...prevCars].sort((a, b) => b.price - a.price)
      )
    } else {
      setCarsSorted((prevCars) =>
        [...prevCars].sort((a, b) => a.price - b.price)
      )
    }
  }

  return (
    <Select onValueChange={handleCarSortOnSelect}>
      <SelectTrigger className='transition-colors hover:bg-secondary focus:outline-none'>
        <div className='mx-auto flex gap-2 font-medium'>
          <ArrowDownUp size={16} />
          <SelectValue placeholder='Recommended' />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='recommended'>Recommended</SelectItem>
        <SelectItem value='price-high'>Lowest price</SelectItem>
        <SelectItem value='price-low'>Highest price</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SortSelect
