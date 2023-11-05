import { randomColorsMap } from '@/constants/colors'

export const getRandomBgColor = () => {
  const min = 1
  const max = 9
  const randomNum = Math.floor(Math.random() * (max - min + 1))

  return randomColorsMap[randomNum]
}
