'use client'

import { useState } from 'react'
import SelectionCard from '../shared/SelectionCard'
import clsx from 'clsx'
import Button from '../shared/Button'
import { ChevronRight } from 'react-feather'

const APPLIANCES = [
  { label: 'Stove', imgSrc: '/images/cards/stove.webp' },
  { label: 'Oven', imgSrc: '/images/cards/oven.webp' },
  { label: 'Microwave Oven', imgSrc: '/images/cards/microwave.webp' },
  { label: 'Blender', imgSrc: '/images/cards/blender.webp' },
  { label: 'Toaster', imgSrc: '/images/cards/toaster.webp' },
  { label: 'Food Processor', imgSrc: '/images/cards/food-processor.webp' },
  { label: 'Mixer', imgSrc: '/images/cards/mixer.webp' },
  { label: 'Crock-pot', imgSrc: '/images/cards/crock-pot.webp' },
  { label: 'Grill', imgSrc: '/images/cards/grill.webp' },
  { label: 'Waffle Maker', imgSrc: '/images/cards/waffle-maker.webp' },
  { label: 'Juicer', imgSrc: '/images/cards/juicer.webp' },
]

const scrollbarClasses = [
  'scrollbar-track-transparent',
  'scrollbar-thumb-black-hover/50 scrollbar-thumb-rounded-md',
  'scrollbar-w-1 scrollbar',
]

const AppliancesStepContent = () => {
  const [selectedAppliances, setSelectedAppliances] = useState<string[]>([])

  const onSelect = (value: string) => {
    if (selectedAppliances.includes(value)) {
      const newValueList = selectedAppliances.filter((item) => item !== value)
      setSelectedAppliances(newValueList)
    } else {
      setSelectedAppliances((prev) => [...prev, value])
    }
  }

  return (
    <div className="flex h-full flex-col gap-6">
      <h3 className="max-w-5/6 px-6 pt-6 font-rubik text-6xl font-bold">
        Select Appliances
      </h3>
      <div className={clsx('h-full overflow-y-auto', scrollbarClasses)}>
        <div className="grid max-h-full grid-cols-1 gap-4 px-6 xs:grid-cols-2 md:grid-cols-3">
          {APPLIANCES.map((item) => (
            <SelectionCard
              key={item.label}
              label={item.label}
              imgSrc={item.imgSrc}
              isSelected={selectedAppliances.includes(item.label)}
              onChange={() => onSelect(item.label)}
              className="col-span-1"
            />
          ))}
        </div>
      </div>
      <div className="p-6 pt-0">
        <Button
          size="M"
          appearence={selectedAppliances.length !== 0 ? 'yellow' : 'outline'}
          className="w-full"
        >
          {selectedAppliances.length !== 0 ? (
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

export default AppliancesStepContent
