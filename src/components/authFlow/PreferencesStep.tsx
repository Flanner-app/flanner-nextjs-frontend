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
    <>
      <div className="mb-3 flex flex-col gap-3">
        <h3
          className={clsx(
            'max-w-5/6 pt-6 font-rubik text-6xl font-bold leading-none',
            'px-6',
          )}
        >
          Select your preferences
        </h3>
        <span className="block px-6 text-base text-black-hover">
          You can change these later
        </span>
      </div>

      <div
        className={clsx(
          'mt-6 grid h-fit grid-cols-1 gap-6 overflow-y-auto px-6 py-1',
          'sm:grid-cols-2 md:gap-4',
          scrollbarClasses,
        )}
      >
        {PREFERENCES.map((item) => (
          <div className="col-span-1 h-fit" key={item}>
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
    </>
  )
}

export default PreferencesAuthStep
