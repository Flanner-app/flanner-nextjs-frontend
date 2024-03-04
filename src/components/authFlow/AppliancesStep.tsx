'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ChevronRight } from 'react-feather'
import { SCROLLBAR_CLASSES } from '@/constants/styles'
import { useUser } from '@/context/AuthProvider'
import useIsComponentLoaded from '@/hooks/useIsComponentLoaded'
import SelectionCard from '../shared/SelectionCard'
import Button from '../shared/buttons/Button'

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

type Appliance = { label: string; imgSrc: string }

const AppliancesStepContent = () => {
  const [selectedAppliances, setSelectedAppliances] = useState<
    Array<Appliance>
  >([])

  const isLoaded = useIsComponentLoaded()
  const { user, setUser } = useUser()
  const router = useRouter()

  const compareObjects = (a: Appliance, b: Appliance): number => {
    const strA = JSON.stringify(a)
    const strB = JSON.stringify(b)
    return strA.localeCompare(strB)
  }

  const areArraysEqual = (
    array1: Appliance[],
    array2: Appliance[],
  ): boolean => {
    if (array1.length !== array2.length) {
      return false
    }

    const sortedArray1 = array1.slice().sort((a, b) => compareObjects(a, b))
    const sortedArray2 = array2.slice().sort((a, b) => compareObjects(a, b))

    return sortedArray1.every((obj1, index) => {
      const obj2 = sortedArray2[index]
      return JSON.stringify(obj1) === JSON.stringify(obj2)
    })
  }

  const onSelect = (label: string, imgSrc: string) => {
    let newAppliances
    if (selectedAppliances?.some((item) => item.label === label)) {
      newAppliances = selectedAppliances.filter((item) => item.label !== label)
    } else {
      newAppliances = [...selectedAppliances, { label, imgSrc }]
    }
    setSelectedAppliances(newAppliances)
  }

  const handleRedirect = async () => {
    if (
      user?.appliances &&
      areArraysEqual(user?.appliances as Appliance[], selectedAppliances)
    ) {
      router.push('/auth/skill')
      return
    }
    try {
      const userData = await fetch(
        process.env.NEXT_PUBLIC_URL + '/api/user/update',
        {
          method: 'POST',
          body: JSON.stringify({ appliances: selectedAppliances }),
        },
      ).then((res) => res.json())

      setUser(userData.data)
      router.push('/auth/skill')
    } catch (error) {
      // todo: add error handling
      console.log(error)
      return
    }
  }

  useEffect(() => {
    user?.appliances && setSelectedAppliances(user.appliances)
  }, [user])

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
          'mt-6 grid h-fit grid-cols-1 gap-4 overflow-y-auto px-6 pt-1.5',
          'xs:grid-cols-2 md:grid-cols-3',
          SCROLLBAR_CLASSES,
        )}
      >
        {APPLIANCES.map((item) => (
          <div className="h-fit" key={item.label}>
            <SelectionCard
              label={item.label}
              imgSrc={item.imgSrc}
              isSelected={selectedAppliances.some(
                (k) => k.label === item.label,
              )}
              onChange={() => onSelect(item.label, item.imgSrc)}
              className="col-span-1"
            />
          </div>
        ))}
      </div>
      <div className="mb-0 mt-auto flex flex-col gap-3 p-3 sm:flex-row sm:p-6">
        <Button
          size="M"
          appearence="yellow"
          wrapperClassName="sm:w-1/2 mx-auto"
          disabled={selectedAppliances.length === 0 || !isLoaded}
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
