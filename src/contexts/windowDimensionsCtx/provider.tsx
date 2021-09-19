import { ReactNode, useEffect, useState } from 'react'
import useEventListener from 'hooks/useEventListener'
import { WindowDimensionsContext, initialWindowsDimensionsState } from '.'

interface ProviderProps {
  children: ReactNode
}

const WindowsDimensionsProvider = ({ children }: ProviderProps) => {
  const [dimensions, setDimensions] = useState(initialWindowsDimensionsState)
  const handleResize = () => {
    setDimensions({
      isMobile: window.innerWidth <= 767,
      isTablet: window.innerWidth > 767 && window.innerWidth < 1025,
      isDesktop: window.innerWidth >= 1025,
      isLaptop: window.innerWidth >= 1440,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight
    })
  }

  useEffect(() => {
    handleResize()
  }, [])

  useEventListener('resize', handleResize)

  return <WindowDimensionsContext.Provider value={dimensions}>{children}</WindowDimensionsContext.Provider>
}

export default WindowsDimensionsProvider
