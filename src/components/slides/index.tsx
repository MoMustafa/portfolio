import React, {
  Children,
  FunctionComponent,
  ReactNode,
  WheelEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import uniqueId from 'uniqid'
import Slide from 'components/slides/slide'
import debounce from 'lodash.debounce'
import { ISlides } from 'types/slides'
// import { useWindowDimensions } from 'contexts/windowDimensionsCtx'

export const initialSlidesState: ISlides = {
  scrollX: 0,
  scrollY: 0,
  count: 0
}

interface Props {
  children: ReactNode
  scroll?: boolean
  widthFactor?: number
  className?: string
  slideProps?: {
    containerClassName?: string
    contentClassName?: string
  }
}

const Slides: FunctionComponent<Props> = ({ children, scroll = false, className, slideProps, widthFactor = 100 }) => {
  // const dimensions = useWindowDimensions()
  const [slidesState, setSlidesState] = useState(initialSlidesState)
  const { scrollX, scrollY, count } = slidesState
  const [slidesCount, setSlidesCount] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const debouncedUpdate = debounce(
    (newState: ISlides) => {
      setSlidesState(newState)
    },
    50,
    { leading: true, trailing: false }
  )

  const updateValue = useCallback(debouncedUpdate, [])

  const handleScroll = (e: WheelEvent) => {
    if (!scroll) return
    let countModifier = e.deltaY > 0 ? 1 : -1

    if (countModifier < 0 && count === 0) {
      countModifier = slidesCount - 1
    }

    updateValue({
      scrollX: scrollX + e.deltaX,
      scrollY: scrollY + e.deltaY,
      count: count <= slidesCount - 1 ? count + countModifier : 0
    })
  }

  useEffect(() => () => debouncedUpdate.cancel(), [])

  useEffect(() => {
    let timer!: NodeJS.Timeout
    if (!scroll) {
      timer = setInterval(() => {
        setSlidesState({ scrollX, scrollY, count: count === slidesCount - 1 ? 0 : count + 1 })
      }, 10000)
    }

    return () => clearInterval(timer)
  }, [count])

  useEffect(() => {
    if (containerRef?.current?.childElementCount) {
      setSlidesCount(containerRef.current.childElementCount)
      containerRef.current.style.width = `${containerRef.current.childElementCount * widthFactor}vw`
    }
  }, [containerRef])

  useEffect(() => {
    if (containerRef?.current?.children[count]) {
      containerRef.current.children[count].scrollIntoView({ behavior: 'smooth' })
    }
  }, [count])

  return (
    <div ref={containerRef} className={className} onWheel={(e) => handleScroll(e)}>
      {children &&
        Children.map(children, (child: ReactNode) => (
          <Slide key={uniqueId()} {...slideProps}>
            {child}
          </Slide>
        ))}
    </div>
  )
}

export default Slides
