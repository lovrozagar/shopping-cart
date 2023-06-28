import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/shadcnUI/popover'
import { ScrollArea } from '@/components/shadcnUI/scroll-area'
import { Button } from '@/components/shadcnUI/button'
import { Separator } from '@/components/shadcnUI/separator'
import LazyImage from '@/components/lazy-image/lazy-image'
import DeleteButton from '@/components/delete-button/delete-button'
import { LINK_PATHS } from '@/constants/constants'
import { ShoppingBag } from 'lucide-react'
import { useContext, useEffect, useState, Fragment, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '@/App'
import { cn } from '@/lib/utils'
import {
  isLastItem,
  getCartSize,
  formatCarPrice,
  getUpgradesLength,
  toggleFixedCartPreview,
  getBase,
  deleteProductFromCart,
} from '@/utils/utils'
import useViewport from '@/hooks/use-viewport'
import useOnClickOutside from '@/hooks/use-click-outside'
import useScreenWidth from '@/hooks/use-screen-width'

function CartButton() {
  const { cart, setCart } = useContext(CartContext)
  const [cartSize, setCartSize] = useState<number>(() => getCartSize(cart))
  const [open, setOpen] = useState(false)
  const popoverContentRef = useRef<HTMLDivElement | null>(null)
  const cartIconRef = useRef<HTMLButtonElement | null>(null)
  const isInViewport = useViewport(cartIconRef)
  const windowWidth = useScreenWidth()
  const isFirstRender = useRef(0)

  const isProductPage = (): boolean => window.location.href.includes('cars')
  const isCart = (): boolean => window.location.href.includes('/cart')

  useOnClickOutside(popoverContentRef, (e) => {
    if ((e.target as HTMLElement)?.textContent === 'Add to cart') return // IF ADDED TO CART WHILE CART PREVIEW OPEN, DON'T TOGGLE
    toggleFixedCartPreview(false)
  })

  useEffect(() => {
    setCartSize(getCartSize(cart))

    if (isFirstRender.current < 2) {
      isFirstRender.current += 1
      return
    }

    if (!isProductPage()) return
    else {
      toggleFixedCartPreview(true)
      setOpen(true)
    }
  }, [cart])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (cartSize === 0) {
      timeout = setTimeout(() => {
        setOpen(false)
      }, 1500)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [cartSize])

  useEffect(() => {
    let showTimeout: NodeJS.Timeout
    let hideTimeout: NodeJS.Timeout

    const handleMouseEnter = () => {
      if (open || isCart()) return

      showTimeout = setTimeout(() => {
        if (isCart()) {
          setOpen(false)
          return
        }

        setOpen(true)
        toggleFixedCartPreview(true)

        setTimeout(() => {
          if (popoverContentRef.current) {
            popoverContentRef.current.addEventListener(
              'mouseleave',
              handleMouseLeave
            )
          }
        }, 0)
      }, 300)
    }

    const handleMouseLeave = () => {
      clearTimeout(showTimeout)

      hideTimeout = setTimeout(() => {
        toggleFixedCartPreview(false)
        setOpen(false)
      }, 300)
    }

    if (cartIconRef.current && !open) {
      cartIconRef.current.addEventListener('mouseenter', handleMouseEnter)
    }

    return () => {
      if (cartIconRef.current) {
        cartIconRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
      if (popoverContentRef.current) {
        popoverContentRef.current.removeEventListener(
          'mouseleave',
          handleMouseLeave
        )
      }

      clearTimeout(showTimeout)
      clearTimeout(hideTimeout)
    }
  }, [])

  return (
    <Popover open={open}>
      <PopoverTrigger className='relative'>
        <Button
          asChild
          type='button'
          data-testid='cart-button'
          variant='ghost'
          ref={cartIconRef}
          onClick={() => setOpen(false)}
        >
          <Link to={LINK_PATHS.TO_CART}>
            <ShoppingBag size={22} />
            {cartSize > 0 ? (
              <span
                key={cartSize}
                className='z-1 absolute -bottom-[2px] right-1 flex h-5 w-5 animate-scale items-center justify-center rounded-full bg-primary text-center text-[11px] font-bold leading-none text-primary-foreground'
              >
                {cartSize}
              </span>
            ) : null}
          </Link>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        ref={popoverContentRef}
        side={isInViewport || windowWidth >= 1280 ? 'bottom' : 'left'}
        sticky='always'
        className={cn(
          'mb-0 mr-2 w-[300px] p-0 shadow',
          isInViewport
            ? ''
            : 'relative left-[129px] sm:left-[77px] xl:left-auto xl:right-0'
        )}
      >
        <div className='grid'>
          <ScrollArea className='max-h-[350px]'>
            {cartSize === 0 ? (
              <div className='px-2 py-4'>
                <p className='text-md text-center font-medium'>Cart is empty</p>
              </div>
            ) : null}
            {cart.map((product, index, array) => (
              <Fragment key={index}>
                <div className='mt-2 grid grid-cols-2 gap-4 p-3'>
                  <div className='min-h-[105px] overflow-hidden rounded'>
                    <LazyImage src={product.images[0]} />
                  </div>
                  <div className='grid gap-2 leading-none'>
                    <p className='mt-1 text-sm font-semibold'>
                      {formatCarPrice(product.price)}
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      {product.name}
                    </p>
                    <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                      <p>
                        {`Upg: `}
                        {getUpgradesLength(product)}
                      </p>
                      <span>|</span>
                      <p>{`Qty: ${product.quantity}`}</p>
                      <DeleteButton
                        className='ml-auto mr-1 p-1.5'
                        iconSize={16}
                        handler={() =>
                          deleteProductFromCart(product, setCart, setCartSize)
                        }
                      />
                    </div>
                  </div>
                </div>
                {isLastItem(array, index) ? (
                  <div className='w-full pb-2'></div>
                ) : (
                  <Separator className='mt-2' />
                )}
              </Fragment>
            ))}
          </ScrollArea>
          <div>
            <Separator />
            <div className='text-md flex justify-between px-4 py-3 font-semibold leading-none'>
              <p>Sub-total:</p>
              <p>{formatCarPrice(getBase(cart))}</p>
            </div>
          </div>
          <Separator />
          <div className='grid gap-2 bg-secondary p-3'>
            <Button asChild onClick={() => setOpen(false)}>
              <Link to={LINK_PATHS.TO_CART}>Go to Cart</Link>
            </Button>
            <Button
              variant='outline'
              className='bg-white dark:bg-secondary'
              onClick={() => {
                toggleFixedCartPreview(false)
              }}
            >
              Continue shopping
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default CartButton
