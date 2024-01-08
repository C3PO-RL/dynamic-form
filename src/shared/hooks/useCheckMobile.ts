import { useState, useEffect, useCallback } from 'react'
import { MAX_MOBILE_WIDTH } from '../../core/theme/theme'

interface IgetWindowDimensions {
  width: number | null
  height: number | null
}

export const useCheckMobile = (): boolean => {
  const hasWindow = typeof window !== 'undefined'

  const getWindowDimensions = useCallback((): {
    width: number | null
    height: number | null
  } => {
    const width: number | null = hasWindow ? window.innerWidth : null
    const height: number | null = hasWindow ? window.innerHeight : null
    return {
      width,
      height,
    }
  }, [hasWindow])

  const [windowDimensions, setWindowDimensions] =
    useState<IgetWindowDimensions>(getWindowDimensions())

  useEffect(() => {
    if (hasWindow) {
      const handleResize = (): void => {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (windowDimensions.width) {
    return windowDimensions.width < MAX_MOBILE_WIDTH
  } else {
    return false
  }
}
