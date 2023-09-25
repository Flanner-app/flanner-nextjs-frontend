'use client'

import { useState } from 'react'
import Checkbox from '../shared/Checkbox'
import Input from '../shared/Input'
import Button from '../shared/Button'
import { ChevronRight } from 'react-feather'
import { useRouter } from 'next/navigation'

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
    <div className="flex flex-col gap-8 p-6">
      <div className="flex flex-col">
        <h3 className="max-w-5/6 font-rubik text-6xl font-bold">
          Use the Fridge!
        </h3>
        <span className="inline-block text-base text-black-hover">
          You can change these later
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4">
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
      <Input
        label="Other (allergies, intolerances, ...)"
        placeholder="No peanuts"
        value={otherPreferences}
        onChange={(e) => setOtherPreferences(e.target.value)}
        onBlur={() => setOtherPreferences((prevData) => prevData.trim())}
      />
      {/* todo: insert other preferences inso selected on continue */}
      <Button
        size="M"
        appearence={
          selectedPreferences.length !== 0 || otherPreferences
            ? 'yellow'
            : 'outline'
        }
        className="w-full"
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
  )
}

export default PreferencesAuthStep
