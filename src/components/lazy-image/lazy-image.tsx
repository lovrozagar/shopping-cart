import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Skeleton } from '@/components/shadcnUI/skeleton'
import 'react-lazy-load-image-component/src/effects/blur.css'

function LazyImage({ src, alt = 'picture' }: { src: string; alt?: string }) {
  return (
    <div className='grid h-full w-full'>
      <LazyLoadImage
        className='grid aspect-video h-full w-full rounded object-cover object-center'
        placeholder={<Skeleton className='h-full w-full' />}
        effect='blur'
        src={src}
        alt={alt}
      ></LazyLoadImage>
    </div>
  )
}

export default LazyImage
