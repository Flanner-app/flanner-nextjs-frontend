'use client'

import { useState } from 'react'
import Button from '../shared/Button'
import SelectionCard from '../shared/SelectionCard'
import { ChevronRight } from 'react-feather'

const SKILL_LEVELS = [
  { label: 'Beginner', imgSrc: '/images/cards/skill/beginner.webp' },
  { label: 'Intermediate', imgSrc: '/images/cards/skill/intermediate.webp' },
  { label: 'Chef', imgSrc: '/images/cards/skill/chef.webp' },
]

const SkillStepContent = () => {
  const [selectedSkill, setSelectedSkill] = useState('')

  return (
    <div className="flex h-full flex-col justify-between gap-6">
      <div className="flex flex-col gap-6">
        <h3 className="max-w-5/6 px-6 pt-6 font-rubik text-6xl font-bold">
          Select Appliances
        </h3>
        <div className="grid grid-cols-3 gap-3 px-6">
          {SKILL_LEVELS.map((item) => (
            <SelectionCard
              key={item.label}
              label={item.label}
              imgSrc={item.imgSrc}
              isSelected={selectedSkill.includes(item.label)}
              onChange={() => setSelectedSkill(item.label)}
              className="col-span-1"
            />
          ))}
        </div>
      </div>
      <div className="p-6 pt-0">
        <Button
          size="M"
          appearence="yellow"
          className="w-full"
          disabled={selectedSkill.length === 0}
        >
          Continue
          <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  )
}

export default SkillStepContent
