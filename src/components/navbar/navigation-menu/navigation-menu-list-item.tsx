import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import { cn } from '@/lib/utils'

type NavigationMenuListItemProps = {
  className?: string
  title: string
  to: string
  children: ReactNode
}

function NavigationMenuListItem({
  className,
  title,
  to,
  children,
}: NavigationMenuListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          to={to}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default NavigationMenuListItem
