'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ChevronRight } from 'react-feather'
import Button from '../shared/Button'
import SelectionCard from '../shared/SelectionCard'

const APPLIANCES = [
  { label: 'Stove', imgSrc: '/images/cards/appliances/stove.webp' },
  { label: 'Oven', imgSrc: '/images/cards/appliances/oven.webp' },
  {
    label: 'Microwave Oven',
    imgSrc: '/images/cards/appliances/microwave.webp',
  },
  { label: 'Blender', imgSrc: '/images/cards/appliances/blender.webp' },
  { label: 'Toaster', imgSrc: '/images/cards/appliances/toaster.webp' },
  {
    label: 'Food Processor',
    imgSrc: '/images/cards/appliances/food-processor.webp',
  },
  { label: 'Mixer', imgSrc: '/images/cards/appliances/mixer.webp' },
  { label: 'Crock-pot', imgSrc: '/images/cards/appliances/crock-pot.webp' },
  { label: 'Grill', imgSrc: '/images/cards/appliances/grill.webp' },
  {
    label: 'Waffle Maker',
    imgSrc: '/images/cards/appliances/waffle-maker.webp',
  },
  { label: 'Juicer', imgSrc: '/images/cards/appliances/juicer.webp' },
]

const scrollbarClasses = [
  'scrollbar-track-transparent',
  'scrollbar-thumb-black-hover/50 scrollbar-thumb-rounded-md',
  'scrollbar-w-1 scrollbar',
]

const AppliancesStepContent = () => {
  const [selectedAppliances, setSelectedAppliances] = useState<string[]>([])

  const router = useRouter()

  const onSelect = (value: string) => {
    if (selectedAppliances.includes(value)) {
      const newValueList = selectedAppliances.filter((item) => item !== value)
      setSelectedAppliances(newValueList)
    } else {
      setSelectedAppliances((prev) => [...prev, value])
    }
  }

  const handleRedirect = () => {
    router.push('skill')
  }

  return (
    <div className="flex h-full flex-col md:gap-6">
      <h3
        className={clsx(
          'mb-3 max-w-5/6 px-6 pt-6 font-rubik text-6xl font-bold leading-none',
          'hidden sm:block',
        )}
      >
        Select Appliances
      </h3>
      <div className={clsx('h-full overflow-y-auto', scrollbarClasses)}>
        <h3
          className={clsx(
            'mb-3 max-w-5/6 px-6 pt-6 font-rubik text-6xl font-bold leading-none',
            'block sm:hidden',
          )}
        >
          Select Appliances
        </h3>
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
      <div className="p-3 sm:p-6">
        <Button
          size="M"
          appearence="yellow"
          className="mx-auto w-full md:w-1/2"
          disabled={selectedAppliances.length === 0}
          onClick={handleRedirect}
        >
          Continue
          <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  )
}

export default AppliancesStepContent
