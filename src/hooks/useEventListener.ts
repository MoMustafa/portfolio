import { useEffect, useRef } from 'react'

const useEventListener = (eventName: string, handler: any) => {
  const savedHandler = useRef<(event: any) => void>()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    const isSupported = window?.addEventListener
    if (!isSupported) return undefined

    const eventListener = (event: any) => {
      if (savedHandler.current) savedHandler.current(event)
    }

    window.addEventListener(eventName, eventListener)

    return () => window.removeEventListener(eventName, eventListener)
  }, [eventName])
}

export default useEventListener
