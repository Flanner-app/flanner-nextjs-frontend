'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ArrowLeft, ChevronRight } from 'react-feather'
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
    <>
      <h3
        className={clsx(
          'max-w-5/6 pt-6 font-rubik text-6xl font-bold leading-none',
          'mb-3 px-6',
        )}
      >
        Select Appliances
      </h3>

      <div
        className={clsx(
          'mt-6 grid h-fit grid-cols-1 gap-4 overflow-y-auto px-6 xs:grid-cols-2 md:grid-cols-3',
          scrollbarClasses,
        )}
      >
        {APPLIANCES.map((item) => (
          <div className="h-fit" key={item.label}>
            <SelectionCard
              label={item.label}
              imgSrc={item.imgSrc}
              isSelected={selectedAppliances.includes(item.label)}
              onChange={() => onSelect(item.label)}
              className="col-span-1"
            />
          </div>
        ))}
      </div>
      <div className="grid max-h-full grid-cols-1 gap-4 px-6 xs:grid-cols-2 md:grid-cols-3"></div>
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
          disabled={selectedAppliances.length === 0}
          onClick={handleRedirect}
        >
          Continue
          <ChevronRight size={20} />
        </Button>
      </div>
    </>
  )
}

export default AppliancesStepContent
