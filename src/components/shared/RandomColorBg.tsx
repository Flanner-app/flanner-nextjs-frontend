'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { getRandomBgColor } from '@/utils/colors'

const RandomColorBg = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (isLoaded) {
    return (
      <div
        className={clsx(
          'absolute inset-0 z-[1] h-full w-full rounded-xl border-2 border-black-default',
          getRandomBgColor(),
        )}
      />
    )
  }
  return null
}

export default RandomColorBg
