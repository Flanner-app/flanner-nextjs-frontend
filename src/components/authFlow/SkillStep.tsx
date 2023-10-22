'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ArrowLeft, ChevronRight } from 'react-feather'
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

  const router = useRouter()

  return (
    <>
      <h3
        className={clsx(
          'max-w-5/6 pt-6 font-rubik text-6xl font-bold leading-none',
          'mb-3 px-6',
        )}
      >
        What is your skill level?
      </h3>

      <div
        className={clsx(
          'mt-6 grid h-fit grid-cols-1 gap-4 overflow-y-auto px-6 xs:grid-cols-2 md:grid-cols-3',
          scrollbarClasses,
        )}
      >
        {SKILL_LEVELS.map((item) => (
          <div className="h-fit" key={item.label}>
            <SelectionCard
              label={item.label}
              imgSrc={item.imgSrc}
              isSelected={selectedSkill.includes(item.label)}
              onChange={() => setSelectedSkill(item.label)}
              className="col-span-1"
            />
          </div>
        ))}
      </div>

      <div className="mb-0 mt-auto flex flex-col gap-3 p-3 sm:flex-row sm:p-6">
        <Button
          size="M"
          appearence="black"
          className="sm:w-1/2"
          onClick={() => router.back()}
        >
          <ArrowLeft size={20} />
          Back
        </Button>
        <Button
          size="M"
          appearence="yellow"
          className="sm:w-1/2"
          disabled={selectedSkill.length === 0}
          onClick={() => router.push('/')}
        >
          Continue
          <ChevronRight size={20} />
        </Button>
      </div>
    </>
  )
}

export default SkillStepContent
