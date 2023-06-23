import { Fragment, useState, useMemo } from 'react'
import carList from '@/constants/car-list'
import { PRICE_SLIDER } from '@/constants/constants'
import FilterBadge from './filter-badge/filter-badge'
import SortSelect from './sort-select/sort-select'
import CarCard from './car-card/car-card'
import FilterPopover from './filter-popover/filter-popover'
import { useParams } from 'react-router-dom'
import { getCapsStart } from '@/utils/utils'
import PageSectionHeading from '@/components/page-section-heading/page-section-heading'

function CarsAll() {
  const { category } = useParams()

  const cars = useMemo(() => carList, [])
  const [carsSorted, setCarsSorted] = useState(cars)

  const [filtersType, setFiltersType] = useState(() => {
    if (!category || category === 'all') return new Map()
    else {
      const categoryFormatted = getCapsStart(category)
      return new Map([[`${categoryFormatted}`, `${categoryFormatted}`]])
    }
  })

  const [filtersColor, setFiltersColor] = useState(new Map())
  const [filtersBrand, setFiltersBrand] = useState(new Map())
  const [range, setRange] = useState([PRICE_SLIDER.max])

  const handleFilterOptionClick = (
    filterMapOfType: 'type' | 'color' | 'brand',
    filter: string
  ) => {
    let filterMap
    switch (filterMapOfType) {
      case 'type':
        filterMap = new Map(filtersType)
        break
      case 'color':
        filterMap = new Map(filtersColor)
        break
      case 'brand':
        filterMap = new Map(filtersBrand)
        break
    }

    if (filterMap.get(filter)) filterMap.delete(filter)
    else filterMap.set(filter, filter)

    switch (filterMapOfType) {
      case 'type':
        setFiltersType(filterMap)
        break
      case 'color':
        setFiltersColor(filterMap)
        break
      case 'brand':
        setFiltersBrand(filterMap)
        break
    }
  }

  const handleFiltersReset = () => {
    setFiltersType(new Map())
    setFiltersColor(new Map())
    setFiltersBrand(new Map())
  }

  const handleRemoveFilterClick = (filter: string): void => {
    if (filtersType.has(filter)) {
      const newMap = new Map(filtersType)
      newMap.delete(filter)
      setFiltersType(newMap)
    }
    if (filtersColor.has(filter)) {
      const newMap = new Map(filtersColor)
      newMap.delete(filter)
      setFiltersColor(newMap)
    }
    if (filtersBrand.has(filter)) {
      const newMap = new Map(filtersBrand)
      newMap.delete(filter)
      setFiltersBrand(newMap)
    }
  }

  const handleRangeDrag = (e: number[]): void => {
    setRange(e)
  }

  return (
    <div className='mx-auto grid pt-6 xl:max-w-[1280px]'>
      <PageSectionHeading
        title='All cars'
        description='Discover Your Perfect Ride.'
      />
      <div className='mt-3 w-full items-center justify-between gap-2 sm:flex'>
        <div className='my-2 flex flex-wrap gap-1 overflow-x-auto'>
          {[...filtersType, ...filtersColor, ...filtersBrand].map(
            ([value, key]) => (
              <FilterBadge
                key={key}
                onClick={() => handleRemoveFilterClick(value)}
              >
                {value}
              </FilterBadge>
            )
          )}
        </div>
        <div className='grid grid-cols-1 justify-end gap-2 sm:flex sm:grid-cols-none'>
          <FilterPopover
            range={range}
            filters={{ filtersType, filtersColor, filtersBrand }}
            onRangeDrag={handleRangeDrag}
            onFilterClick={handleFilterOptionClick}
            onFiltersReset={handleFiltersReset}
          />
          <SortSelect cars={cars} setCarsSorted={setCarsSorted} />
        </div>
      </div>
      <div
        className={`mt-3 grid grid-cols-fill-min gap-3 sm:grid-cols-fill-max`}
      >
        {carsSorted?.map((car) => (
          <Fragment key={car.id}>
            {(filtersType.size === 0 || filtersType.get(car.type)) &&
              (filtersColor.size === 0 || filtersColor.get(car.color)) &&
              (filtersBrand.size === 0 || filtersBrand.get(car.brand)) &&
              range[0] >= car.price && (
                <CarCard category={category || 'all'} car={car} />
              )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default CarsAll
