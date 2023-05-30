import { Separator } from '@/components/shadcnUI/separator'
import { Button } from '@/components/shadcnUI/button'
import { Heart, ShoppingBag } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import Title from './title/title'
import SideMenu from './side-menu/side-menu'
import SettingsDropdown from './settings-dropdown/settings-dropdown'
import { useContext } from 'react'
import { ModeContext } from '@/App'
import NavigationMenu from './navigation-menu/navigation-menu'

function Navbar() {
  const { mode, modeToggle } = useContext(ModeContext)
  const navigate = useNavigate()

  const handleMenuRemoveOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // IF MOBILE EXIT AS ON MOBILE CLICK BRINGS UP THE MENU INSTEAD OF HOVER
    if (window.matchMedia('(pointer: coarse)').matches) return

    const target = e.target as Element
    document.getElementById('navigation-menu')?.remove()

    const menuWrapper = target.closest('div')
    if (menuWrapper) {
      menuWrapper.style.pointerEvents = 'none'
      setTimeout(() => {
        menuWrapper.style.pointerEvents = 'all'
      }, 750)
    }
  }

  const handleAllCarsNavigationOnClick = () => navigate('/cars')

  return (
    <header className='flex min-h-[56px] w-full justify-between px-3 py-2 shadow-md shadow-secondary'>
      <div className='flex min-h-[56px] w-full justify-between xl:mx-auto xl:max-w-[1280px]'>
        <div className='flex items-center'>
          <Title mode={mode} isActiveLink={true} />
        </div>
        <div className='flex'>
          <div className='hidden sm:flex'>
            <NavigationMenu
              onClick={handleMenuRemoveOnClick}
              onMouseDown={handleAllCarsNavigationOnClick}
            />
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
