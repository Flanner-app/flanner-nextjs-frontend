const randomColorsMap: { [key: number]: string } = {
  0: 'bg-tones-yellow',
  1: 'bg-tones-coral',
  2: 'bg-tones-rose',
  3: 'bg-tones-lavender',
  4: 'bg-tones-babyBlue',
  5: 'bg-tones-powderBlue',
  6: 'bg-tones-mint',
  7: 'bg-white',
  8: 'bg-yellow-regular',
}

const randomBrightColorsMap: { [key: number]: string } = {
  0: 'bg-yellow-regular',
  1: 'bg-white',
  2: 'bg-tones-rose',
  3: 'bg-tones-lavender',
  4: 'bg-tones-babyBlue',
  5: 'bg-tones-powderBlue',
  6: 'bg-white',
  7: 'bg-white',
  8: 'bg-yellow-regular',
}

export const getRandomBgColor = (params?: { bright: true }) => {
  const min = 1
  const max = 9
  const randomNum = Math.floor(Math.random() * (max - min + 1))

  if (params?.bright) {
    return randomBrightColorsMap[randomNum]
  }

  return randomColorsMap[randomNum]
}

export const generateRandomBgColorsSafelist = () => {
  const classSafeList = Object.values(randomColorsMap).flatMap((classItem) =>
    classItem.split(' '),
  )

  return classSafeList
}
