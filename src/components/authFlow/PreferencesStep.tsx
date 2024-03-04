'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowLeft, ChevronRight } from 'react-feather'
import { SCROLLBAR_CLASSES } from '@/constants/styles'
import { useUser } from '@/context/AuthProvider'
import useIsComponentLoaded from '@/hooks/useIsComponentLoaded'
import Checkbox from '../shared/Checkbox'
import Button from '../shared/buttons/Button'

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

  const isLoaded = useIsComponentLoaded()
  const { user, setUser } = useUser()
  const router = useRouter()

  const onCheckboxChange = (value: string) => {
    if (selectedPreferences.includes(value)) {
      const newValueList = selectedPreferences.filter((item) => item !== value)
      setSelectedPreferences(newValueList)
    } else {
      setSelectedPreferences((prev) => [...prev, value])
    }
  }

  const handleRedirect = async () => {
    if (
      user?.preferences?.every((item) => selectedPreferences.includes(item))
    ) {
      router.push('/')
      return
    }
    try {
      const userData = await fetch(
        process.env.NEXT_PUBLIC_URL + '/api/user/update',
        {
          method: 'POST',
          body: JSON.stringify({ preferences: selectedPreferences }),
        },
      ).then((res) => res.json())

      setUser(userData.data)
    } catch (error) {
      // todo: add error handling
      console.log(error)
      return
    }
    router.push('/')
  }

  useEffect(() => {
    user?.preferences && setSelectedPreferences(user.preferences)
  }, [user])

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
          SCROLLBAR_CLASSES,
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

      <div className="mb-0 mt-auto flex flex-col gap-3 p-3 sm:flex-row sm:p-6">
        <Button
          size="M"
          appearence="black"
          wrapperClassName="sm:w-1/2"
          onClick={() => router.push('skill')}
        >
          <ArrowLeft size={20} />
          Back
        </Button>
        <Button
          size="M"
          appearence={selectedPreferences.length !== 0 ? 'yellow' : 'white'}
          wrapperClassName="sm:w-1/2 sm:ml-auto sm:mr-0"
          onClick={handleRedirect}
          disabled={!isLoaded}
        >
          {selectedPreferences.length !== 0 ? 'Continue' : 'Skip'}
          <ChevronRight size={20} />
        </Button>
      </div>
    </>
  )
}

export default PreferencesAuthStep
