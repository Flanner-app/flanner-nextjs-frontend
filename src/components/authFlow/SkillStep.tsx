'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { ChevronRight } from 'react-feather'
import Button from '../shared/Button'
import SelectionCard from '../shared/SelectionCard'

const SKILL_LEVELS = [
  { label: 'Beginner', imgSrc: '/images/cards/skill/beginner.webp' },
  { label: 'Intermediate', imgSrc: '/images/cards/skill/intermediate.webp' },
  { label: 'Chef', imgSrc: '/images/cards/skill/chef.webp' },
]

const scrollbarClasses = [
  'scrollbar-track-transparent',
  'scrollbar-thumb-black-hover/50 scrollbar-thumb-rounded-md',
  'scrollbar-w-1 scrollbar',
]

const SkillStepContent = () => {
  const [selectedSkill, setSelectedSkill] = useState('')

  return (
    <div className="flex h-full flex-col md:h-fit md:gap-6">
      <h3
        className={clsx(
          'mb-3 max-w-5/6 px-6 pt-6 font-rubik text-6xl font-bold leading-none',
          'hidden sm:block',
        )}
      >
        What is your skill level?
      </h3>
      <div className={clsx('h-full overflow-y-auto', scrollbarClasses)}>
        <h3
          className={clsx(
            'mb-3 max-w-5/6 px-6 pt-6 font-rubik text-6xl font-bold leading-none',
            'block sm:hidden',
          )}
        >
          What is your skill level?
        </h3>
        <div className="grid max-h-full grid-cols-1 gap-4 px-6 xs:grid-cols-2 md:grid-cols-3">
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
      <div className="p-3 sm:p-6">
        <Button
          size="M"
          appearence="yellow"
          className="mx-auto w-full sm:w-1/2"
          disabled={selectedSkill.length === 0}
          // onClick={handleRedirect}
        >
          Continue
          <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  )
}

export default SkillStepContent
