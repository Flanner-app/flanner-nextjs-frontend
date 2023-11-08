const randomColorsMap: { [key: number]: string } = {
  0: 'bg-tones-yellow',
  1: 'bg-tones-coral',
  2: 'bg-tones-rose',
  3: 'bg-tones-lavender',
  4: 'bg-tones-babyblue',
  5: 'bg-tones-powderBlue',
  6: 'bg-tones-mint',
  7: 'bg-white',
  8: 'bg-yellow-regular',
}

export const getRandomBgColor = () => {
  const min = 1
  const max = 9
  const randomNum = Math.floor(Math.random() * (max - min + 1))

  return randomColorsMap[randomNum]
}

export const generateRandomBgColorsSafelist = () => {
  const classSafeList = Object.values(randomColorsMap).flatMap((classItem) =>
    classItem.split(' '),
  )

  return classSafeList
}
