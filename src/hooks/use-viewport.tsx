import { RefObject, useEffect, useMemo, useState } from 'react'

function useIsInViewport(ref: RefObject<Element>): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false)

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  )

  useEffect(() => {
    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.disconnect()
    }
  }, [ref, observer])

  return isIntersecting
}

function useViewport(ref: RefObject<Element>) {
  const isIntersecting = useIsInViewport(ref)
  const [inViewport, setInViewport] = useState(false)

  useEffect(() => {
    setInViewport(isIntersecting)
  }, [isIntersecting])

  return inViewport
}

export default useViewport
