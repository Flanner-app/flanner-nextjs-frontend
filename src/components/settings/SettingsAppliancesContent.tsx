'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { APPLIANCES } from '@/constants/settings'
import { getCurrentUser, updateCurrentUser } from '@/services/user'
import { User } from '@/types/user'
import SelectionCard from '../shared/SelectionCard'
import Heading from '../shared/typography/Heading'

const SettingsAppliancesContent = () => {
  const [selectedAppliances, setSelectedAppliances] = useState<
    User['appliances']
  >([])

  const onChange = async (item: { label: string; imgSrc: string }) => {
    let data

    if (
      selectedAppliances?.some((appliance) => appliance.label === item.label)
    ) {
      data = selectedAppliances.filter(
        (appliance) => appliance.label !== item.label,
      )
    } else {
      data = [...(selectedAppliances || []), item]
    }
    await updateCurrentUser({
      appliances: data,
    }).then((res) => {
      setSelectedAppliances(res.appliances)
    })
  }

  useEffect(() => {
    const getAppliances = async () => {
      const data = await getCurrentUser()
      setSelectedAppliances(data.appliances)
    }

    getAppliances()
  }, [])

  return (
    <>
      <Heading as="h1" type="display" className="mb-4">
        Choose available appliances
      </Heading>
      <div
        className={clsx(
          'grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3',
          'lg:grid-cols-4 2xl:grid-cols-5',
          '3xl:flex 3xl:flex-wrap',
        )}
      >
        {APPLIANCES.map((item) => (
          <SelectionCard
            key={item.label}
            label={item.label}
            imgSrc={item.imgSrc}
            isSelected={
              !!selectedAppliances?.some((k) => k.label === item.label)
            }
            onChange={() => onChange(item)}
          />
        ))}
      </div>
    </>
  )
}

export default SettingsAppliancesContent
