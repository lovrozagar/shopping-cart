import { Button } from '@/components/shadcnUI/button'
import { ShoppingBag } from 'lucide-react'

type AddToCartButtonProps = {
  handler: () => void
}

function AddToCartButton({ handler }: AddToCartButtonProps) {
  return (
    <Button
      className='group overflow-hidden shadow-md sm:min-w-[250px]'
      onClick={handler}
    >
      <div className='relative flex w-full justify-center gap-2'>
        <div>Add to cart</div>
        <ShoppingBag
          size={20}
          className='transition-transform sm:absolute sm:right-0 sm:translate-y-[-60px] sm:group-hover:translate-y-[0px]'
        />
      </div>
    </Button>
  )
}

export default AddToCartButton
