import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandDialog,
} from '@/components/shadcnUI/command'
import { Button } from '@/components/shadcnUI/button'
import { CAR_LIST, LINK_PATHS } from '@/constants/constants'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

type SearchCommandProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

function SearchCommand({ open, setOpen }: SearchCommandProps) {
  const navigate = useNavigate()

  const handleItemClick = (category: string, id: string) => {
    setOpen(false)
    navigate(LINK_PATHS.goToProduct(category, id))
  }

  return (
    <>
      <Button
        variant='outline'
        className='hidden h-full xs:block'
        onClick={() => setOpen(!open)}
      >
        <p className='flex items-center gap-6 text-sm text-muted-foreground'>
          <span className='flex items-center gap-2'>
            <Search size={16} />
            <span className='font-normal'>Search</span>
          </span>
          <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[11px] font-bold text-muted-foreground opacity-100'>
            <span>Ctrl</span>
            <span>K</span>
          </kbd>
        </p>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='cars'>
            {CAR_LIST.map((car, index) => (
              <CommandItem
                key={index}
                onSelect={() => handleItemClick(car.type, car.id)}
              >
                {car.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default SearchCommand
