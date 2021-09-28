import contextHookFactory from 'contexts/contextHelper'
import { createContext } from 'react'
import { IWindowDimensions } from 'types/IWindowDimensions'

export const initialWindowsDimensionsState: IWindowDimensions = {
  innerWidth: 0,
  innerHeight: 0,
  outerWidth: 0,
  outerHeight: 0,
  isMobile: false,
  isTablet: false,
  isLaptop: false,
  isDesktop: false
}

export const WindowDimensionsContext = createContext(initialWindowsDimensionsState)
WindowDimensionsContext.displayName = 'Window Dimensions'
export const useWindowDimensions = contextHookFactory(WindowDimensionsContext)
