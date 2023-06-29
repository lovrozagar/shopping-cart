import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Skeleton } from '@/components/shadcnUI/skeleton'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import 'react-lazy-load-image-component/src/effects/blur.css'

type LazyImageProps = {
  mainSrc: string
  hoverSrc: string
  alt?: string
  blur?: boolean
}

function LazyImageHover({
  mainSrc,
  hoverSrc,
  alt = 'picture',
}: LazyImageProps) {
  const [animateExit, setAnimateExit] = useState(true)
  const [loaded, setLoaded] = useState(false)

  const handleAfterLoad = async () => {
    await new Promise((r) => setTimeout(() => r(1), 300))
    setLoaded(true)
  }

  return (
    <div className='relative z-10 grid h-full w-full  bg-cover bg-center bg-no-repeat'>
      <LazyLoadImage
        className={cn(
          'relative z-10 grid aspect-video h-full w-full object-cover object-center transition-transform'
        )}
        placeholder={<Skeleton className='h-full w-full' />}
        src={mainSrc}
        alt={alt}
        afterLoad={() => handleAfterLoad()}
      />
      <LazyLoadImage
        className={cn(
          'absolute grid aspect-video h-full w-full object-cover object-center opacity-0 transition-transform hover:animate-opacity-in',
          loaded ? 'z-20' : '',
          animateExit ? 'animate-opacity-out' : ''
        )}
        onMouseLeave={() => {
          setAnimateExit(true)
        }}
        src={hoverSrc}
        alt={alt}
      />
    </div>
  )
}

export default LazyImageHover
