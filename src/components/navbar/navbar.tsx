import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/shadcnUI/navigation-menu'
import { Separator } from '@/components/shadcnUI/separator'
import { Button } from '@/components/shadcnUI/button'
import { Heart, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import useMode from '@/hooks/useMode'

import Title from './title/title'
import SideMenu from './side-menu/side-menu'
import SettingsDropdown from './settings-dropdown/settings-dropdown'

function Navbar() {
  const { mode, modeToggle } = useMode()
  return (
    <header className='flex min-h-[56px] w-full justify-between overflow-hidden px-3 py-2 shadow-md shadow-secondary'>
      <div className='flex min-h-[56px] w-full justify-between xl:mx-auto xl:max-w-[1280px]'>
        <div className='flex items-center'>
          <Title mode={mode} isActiveLink={true} />
        </div>
        <div className='flex'>
          <div className='hidden sm:flex'>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Button asChild variant='ghost'>
                    <Link to='/'>Home</Link>
                  </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button asChild variant='ghost'>
                    <Link to='/'>Cars</Link>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Separator orientation='vertical' className='mx-2' />
            <SettingsDropdown mode={mode} modeToggle={modeToggle} />
            <Separator orientation='vertical' className='mx-2' />
          </div>
          <div className='flex'>
            <div className='hidden items-center sm:flex'>
              <Button type='button' data-testid='heart-button' variant='ghost'>
                <Heart className='w-5' />
              </Button>
            </div>
            <div className='flex items-center'>
              <Button type='button' data-testid='cart-button' variant='ghost'>
                <ShoppingBag className='w-5' />
              </Button>
            </div>
            <SideMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
