import {
  NavigationMenu as Menu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from '@/components/shadcnUI/navigation-menu'
import { Button } from '@/components/shadcnUI/button'
import { Link } from 'react-router-dom'
import { Separator } from '@radix-ui/react-separator'
import ListItem from '@/components/navbar/navigation-menu/navigation-menu-list-item'
import { Fragment } from 'react'

const components: { title: string; to: string; description: string }[] = [
  {
    title: 'All Cars',
    to: '/cars',
    description:
      'Explore a wide variety of cars with detailed information and specifications.',
  },
  {
    title: 'Sport Cars',
    to: '/cars/sport',
    description:
      'Discover thrilling and agile cars built for performance enthusiasts.',
  },
  {
    title: 'Super Cars',
    to: '/cars/super',
    description:
      'Experience the ultimate in luxury and high-performance automotive engineering.',
  },
  {
    title: 'Hyper Cars',
    to: '/cars/hyper',
    description:
      'Unleash your passion with cutting-edge design and unmatched performance in hypercars.',
  },
]

type NavigationMenuProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onMouseDown: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function NavigationMenu({ onClick, onMouseDown }: NavigationMenuProps) {
  return (
    <Menu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Button asChild variant='ghost'>
            <Link to='/'>Home</Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className='ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
            onClick={onClick}
            onMouseDown={onMouseDown}
          >
            Cars
          </NavigationMenuTrigger>
          <NavigationMenuContent id='navigation-menu'>
            <ul className='grid w-[300px]'>
              {components.map((component, index, array) => (
                <Fragment key={component.title}>
                  <ListItem title={component.title} to={component.to}>
                    {component.description}
                  </ListItem>
                  {index < array.length - 1 && (
                    <div className='px-2'>
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
  )
}

export default NavigationMenu
