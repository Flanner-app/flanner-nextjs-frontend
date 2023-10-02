'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ChevronRight } from 'react-feather'
import Button from '../shared/Button'
import Checkbox from '../shared/Checkbox'
import Input from '../shared/Input'

const PREFERENCES = [
  'Low calories',
  'High calories',
  'Vegeterian',
  'Vegan',
  'Halal',
  'Gluten-Free',
  'Low-Fat',
  'Low-Carb',
  'Pescetarian',
  'Low-Sodium',
  'Lactose intolerant',
]

const scrollbarClasses = [
  'scrollbar-track-transparent',
  'scrollbar-thumb-black-hover/50 scrollbar-thumb-rounded-md',
  'scrollbar-w-1 scrollbar',
]

const PreferencesAuthStep = () => {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([])
  const [otherPreferences, setOtherPreferences] = useState('')

  const router = useRouter()

  const onCheckboxChange = (value: string) => {
    if (selectedPreferences.includes(value)) {
      const newValueList = selectedPreferences.filter((item) => item !== value)
      setSelectedPreferences(newValueList)
    } else {
      setSelectedPreferences((prev) => [...prev, value])
    }
  }

  const handleRedirect = () => {
    router.push('appliances')
  }

  return (
    <div className="flex h-full flex-col md:h-fit md:gap-6">
      <h3
        className={clsx(
          'mb-3 max-w-5/6 pt-6 font-rubik text-6xl font-bold leading-none',
          'hidden px-6 sm:block',
        )}
      >
        Select your preferences
      </h3>
      <span className="hidden px-6 text-base text-black-hover sm:block">
        You can change these later
      </span>
      <div className={clsx('h-full overflow-y-auto', scrollbarClasses)}>
        <h3
          className={clsx(
            'mb-3 max-w-5/6 px-6 pt-6 font-rubik text-6xl font-bold leading-none',
            'block sm:hidden',
          )}
        >
          Select your preferences
        </h3>
        <span className="block px-6 text-base text-black-hover sm:hidden">
          You can change these later
        </span>
        <div className="mt-6 grid max-h-full grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:gap-4">
          {PREFERENCES.map((item) => (
            <div className="col-span-1" key={item}>
              <Checkbox
                key={item}
                label={item}
                isChecked={selectedPreferences.includes(item)}
                onChange={() => onCheckboxChange(item)}
              />
            </div>
          ))}
        </div>
        <div className="mb-4 px-6">
          <Input
            label="Other (allergies, intolerances, ...)"
            placeholder="No peanuts"
            value={otherPreferences}
            onChange={(e) => setOtherPreferences(e.target.value)}
            onBlur={() => setOtherPreferences((prevData) => prevData.trim())}
            className="mt-6 md:w-1/2"
          />
        </div>
      </div>
      <div className="p-3 sm:p-6">
        <Button
          size="M"
          appearence={
            selectedPreferences.length !== 0 || otherPreferences
              ? 'yellow'
              : 'outline'
          }
          className="mx-auto w-full sm:w-1/2 md:mt-12"
          onClick={handleRedirect}
        >
          {selectedPreferences.length !== 0 || otherPreferences ? (
            <>
              Continue
              <ChevronRight size={20} />
            </>
          ) : (
            'Skip'
          )}
        </Button>
      </div>
    </div>
  )
}

export default PreferencesAuthStep
