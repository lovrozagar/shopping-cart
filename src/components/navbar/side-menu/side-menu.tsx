import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/shadcnUI/sheet'
import { Button } from '@/components/shadcnUI/button'
import { Heart, ShoppingBag, Menu, Home, Car } from 'lucide-react'

import Title from '../title/title'
import SettingsDropdown from '../settings-dropdown/settings-dropdown'
import { useContext } from 'react'
import { ModeContext } from '@/App'

function SideMenu() {
  const { mode, modeToggle } = useContext(ModeContext)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className='flex items-center sm:hidden'>
          <Button type='button' data-testid='menu-button' variant='ghost'>
            <Menu className='w-5' />
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent position='right' size='content'>
        <SheetHeader className='mb-4 min-w-[225px]'>
          <SheetTitle className='mb-2'>
            <Title mode={mode} isActiveLink={false} />
          </SheetTitle>
          <SheetDescription>
            Embark on an adventure. <br /> Your quest, our cars.
          </SheetDescription>
        </SheetHeader>
        <div className='grid gap-2'>
          <Button variant='ghost' className='flex justify-start gap-4'>
            <Home /> Home
          </Button>
          <Button variant='ghost' className='flex justify-start gap-4'>
            <Car /> Cars
          </Button>
          <SettingsDropdown
            mode={mode}
            modeToggle={modeToggle}
            isInMenu={true}
          />
          <Button variant='ghost' className='flex justify-start gap-4'>
            <Heart /> Saved
          </Button>
          <Button variant='ghost' className='flex justify-start gap-4'>
            <ShoppingBag /> Cart
          </Button>
        </div>
        <SheetFooter className='mt-5'>
          <SheetClose asChild>
            <Button type='submit'>Done</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default SideMenu
