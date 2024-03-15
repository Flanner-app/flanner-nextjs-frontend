'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { SKILL_LEVELS } from '@/constants/settings'
import { getCurrentUser, updateCurrentUser } from '@/services/user'
import { User } from '@/types/user'
import SelectionCard from '../shared/SelectionCard'

const SettingsSkillsContent = () => {
  const [selectedSkill, setSelectedSkill] = useState<User['skill']>({
    label: '',
    imgSrc: '',
  })

  const onChange = async (value: User['skill']) => {
    if (value?.label === selectedSkill?.label) return

    await updateCurrentUser({
      skill: value,
    })
      .then((res) => {
        setSelectedSkill(res.skill)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    const getSkills = async () => {
      const data = await getCurrentUser()
      setSelectedSkill(data.skill)
    }

    getSkills()
  }, [])

  return (
    <div
      className={clsx(
        'mt-6 grid h-fit grid-cols-1 gap-4 overflow-y-auto px-6 pt-1.5',
        'sm:grid-cols-2 md:grid-cols-3',
      )}
    >
      {SKILL_LEVELS.map((item) => (
        <div className="h-fit" key={item.label}>
          <SelectionCard
            label={item.label}
            imgSrc={item.imgSrc}
            isSelected={selectedSkill?.label === item.label}
            onChange={() => onChange(item)}
            className="col-span-1"
          />
        </div>
      ))}
    </div>
  )
}

export default SettingsSkillsContent
