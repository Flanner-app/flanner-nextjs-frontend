import { useEffect, useState } from 'react'

const useIsComponentLoaded = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return isLoaded
}

export default useIsComponentLoaded
