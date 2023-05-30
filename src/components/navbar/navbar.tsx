import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/shadcnUI/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/shadcnUI/dropdown-menu'
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
import { Separator } from '@/components/shadcnUI/separator'
import { Label } from '@/components/shadcnUI/label'
import { Switch } from '@/components/shadcnUI/switch'
import { Button } from '@/components/shadcnUI/button'
import { Settings, Heart, ShoppingBag, Menu, Home, Car } from 'lucide-react'
import { Link } from 'react-router-dom'

import useMode from '@/hooks/useMode'

function Navbar() {
  const { mode, modeToggle } = useMode()

  const textShadowRed = mode ? '5px 0px 20px #ef4444' : '5px 0px 60px #ef4444'
  const textShadowBlue = mode ? '5px 0px 20px #3b82f6' : '5px 0px 60px #3b82f6'

  return (
    <header className='flex min-h-[56px] w-full justify-between overflow-hidden px-3 py-2 shadow-md shadow-secondary'>
      <div className='flex min-h-[56px] w-full justify-between xl:mx-auto xl:max-w-[1280px]'>
        <Link to='/' className='flex items-center'>
          <h1 className='px-1 text-3xl font-bold italic'>
            <span
              className='text-red-500'
              style={{ textShadow: textShadowRed }}
            >
              C
            </span>
            <span style={{ textShadow: textShadowRed }}>ar</span>
            <span
              className='text-blue-500'
              style={{ textShadow: textShadowBlue }}
            >
              Q
            </span>
            <span style={{ textShadow: textShadowBlue }}>uest</span>
          </h1>
        </Link>
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
            <div className='flex items-center'>
              <DropdownMenu>
                <Button
                  asChild
                  type='button'
                  data-testid='settings-button'
                  variant='ghost'
                >
                  <DropdownMenuTrigger>
                    <Settings className='w-5' />
                  </DropdownMenuTrigger>
                </Button>
                <DropdownMenuContent className='grid gap-y-2 px-4 py-2'>
                  <DropdownMenuLabel className='px-0'>
                    Settings
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div>
                    <div className='flex items-center justify-between space-x-4 py-2'>
                      <Label htmlFor='dark-mode'>Dark mode</Label>
                      <Switch
                        checked={mode}
                        onCheckedChange={modeToggle}
                        id='dark-mode'
                        data-testid='mode-switch'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center justify-between space-x-4 py-2'>
                      <Label htmlFor='local-storage'>Local storage</Label>
                      <Switch
                        disabled
                        id='local-storage'
                        data-testid='storage-switch'
                      />
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
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
            <Sheet>
              <SheetTrigger asChild>
                <div className='flex items-center sm:hidden'>
                  <Button
                    type='button'
                    data-testid='menu-button'
                    variant='ghost'
                  >
                    <Menu className='w-5' />
                  </Button>
                </div>
              </SheetTrigger>
              <SheetContent position='right' size='content'>
                <SheetHeader className='mb-4 min-w-[250px]'>
                  <SheetTitle>Menu </SheetTitle>
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
                  <div className='grid items-center'>
                    <DropdownMenu>
                      <Button
                        asChild
                        type='button'
                        data-testid='settings-button'
                        variant='ghost'
                        className='flex justify-start gap-4'
                      >
                        <DropdownMenuTrigger>
                          <Settings className='w-5' /> Settings
                        </DropdownMenuTrigger>
                      </Button>
                      <DropdownMenuContent className='grid gap-y-2 px-4 py-2'>
                        <DropdownMenuLabel className='px-0'>
                          Settings
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div>
                          <div className='flex items-center justify-between space-x-4 py-2'>
                            <Label htmlFor='dark-mode'>Dark mode</Label>
                            <Switch
                              checked={mode}
                              onCheckedChange={modeToggle}
                              id='dark-mode'
                            />
                          </div>
                        </div>
                        <div>
                          <div className='flex items-center justify-between space-x-4 py-2'>
                            <Label htmlFor='local-storage'>Local storage</Label>
                            <Switch disabled id='local-storage' />
                          </div>
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <Button variant='ghost' className='flex justify-start gap-4'>
                    <Heart /> Saved
                  </Button>
                  <Button variant='ghost' className='flex justify-start gap-4'>
                    <ShoppingBag /> Cart
                  </Button>
                </div>
                <SheetFooter className='mt-4'>
                  <SheetClose asChild>
                    <Button type='submit'>Done</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
