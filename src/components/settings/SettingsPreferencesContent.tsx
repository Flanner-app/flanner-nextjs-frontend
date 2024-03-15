'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { PREFERENCES } from '@/constants/settings'
import { getCurrentUser, updateCurrentUser } from '@/services/user'
import { User } from '@/types/user'
import Checkbox from '../shared/Checkbox'
import Heading from '../shared/typography/Heading'

const SettingsPreferencesContent = () => {
  const [selectedPreferences, setSelectedPreferences] = useState<
    User['preferences']
  >([])

  const onCheckboxChange = async (value: string) => {
    let data

    if (selectedPreferences?.includes(value)) {
      data = selectedPreferences.filter((item) => item !== value)
    } else {
      data = [...(selectedPreferences || []), value]
    }
    await updateCurrentUser({ preferences: data })
      .then((res) => {
        setSelectedPreferences(res.preferences)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    const getPrefences = async () => {
      const data = await getCurrentUser()
      setSelectedPreferences(data.preferences)
    }

    getPrefences()
  }, [])

  return (
    <>
      <Heading as="h1" type="display" className="mb-4">
        Choose available appliances
      </Heading>
      <div
        className={clsx(
          'mt-6 grid h-fit grid-cols-1 gap-6 overflow-y-auto px-6 py-1',
          'sm:grid-cols-2 md:gap-4',
        )}
      >
        {PREFERENCES.map((item) => (
          <div className="col-span-1 h-fit" key={item}>
            <Checkbox
              key={item}
              label={item}
              isChecked={selectedPreferences?.includes(item) || false}
              onChange={() => onCheckboxChange(item)}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default SettingsPreferencesContent
