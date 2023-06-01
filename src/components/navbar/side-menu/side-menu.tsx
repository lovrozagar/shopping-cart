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
import {
  NavigationMenu as Menu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from '@/components/shadcnUI/navigation-menu'
import { Heart, ShoppingBag, Menu as MenuIcon, Home, Car } from 'lucide-react'
import { Button } from '@/components/shadcnUI/button'
import { Separator } from '@/components/shadcnUI/separator'

import Title from '@/components/navbar/title/title'
import SettingsDropdown from '@/components/navbar/settings-dropdown/settings-dropdown'
import ListItem from '@/components/navbar/navigation-menu/navigation-menu-list-item'
import categories from '@/components/navbar/navigation-menu/car-categories'

import { useNavigate } from 'react-router-dom'
import { useContext, Fragment } from 'react'
import { ModeContext } from '@/App'
import {
  handleMenuRemoveOnClick,
  handleLinkClickMenuClose,
} from '@/components/navbar/navigation-menu/car-item-handlers'

function SideMenu() {
  const { mode, modeToggle } = useContext(ModeContext)
  const navigate = useNavigate()

  const handleAllCarsNavigationOnClick = (location: string) => {
    handleLinkClickMenuClose()
    navigate(`/shopping-cart/${location}`)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className='flex items-center sm:hidden'>
          <Button type='button' data-testid='side-menu-button' variant='ghost'>
            <MenuIcon className='w-5' />
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
          <Button
            variant='ghost'
            className='flex justify-start gap-4'
            onMouseDown={() => handleAllCarsNavigationOnClick('')}
          >
            <Home /> Home
          </Button>
          <Menu className='grid w-full justify-stretch'>
            <NavigationMenuList className='grid w-full justify-stretch'>
              <NavigationMenuItem className='grid w-full justify-stretch'>
                <NavigationMenuTrigger
                  className='flex w-full justify-start bg-transparent ring-offset-background focus:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
                  onClick={handleMenuRemoveOnClick}
                  onMouseDown={() => handleAllCarsNavigationOnClick('cars')}
                >
                  <>
                    <Car />
                    <p className='ml-4'>Cars</p>
                  </>
                </NavigationMenuTrigger>
                <NavigationMenuContent id='navigation-menu'>
                  <ul className='grid w-[271px]'>
                    {categories.map((category, index, array) => (
                      <Fragment key={category.title}>
                        <ListItem title={category.title} to={category.to}>
                          {category.description}
                        </ListItem>
                        {index < array.length - 1 && (
                          <div className='w-full px-2'>
                            <Separator />
                          </div>
                        )}
                      </Fragment>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </Menu>
          <SettingsDropdown
            mode={mode}
            modeToggle={modeToggle}
            isInMenu={true}
          />
          <Button
            variant='ghost'
            className='flex justify-start gap-4'
            onMouseDown={() => handleAllCarsNavigationOnClick('saved')}
          >
            <Heart /> Saved
          </Button>
          <Button
            variant='ghost'
            className='flex justify-start gap-4'
            onMouseDown={() => handleAllCarsNavigationOnClick('cart')}
          >
            <ShoppingBag /> Cart
          </Button>
        </div>
        <SheetFooter className='mt-5'>
          <SheetClose asChild>
            <Button id='side-menu-done-button' type='submit'>
              Done
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default SideMenu
