'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowLeft, ChevronRight } from 'react-feather'
import { SKILL_LEVELS } from '@/constants/settings'
import { SCROLLBAR_CLASSES } from '@/constants/styles'
import { useUser } from '@/context/AuthProvider'
import useIsComponentLoaded from '@/hooks/useIsComponentLoaded'
import { updateCurrentUser } from '@/services/user'
import { User } from '@/types/user'
import SelectionCard from '../shared/SelectionCard'
import Button from '../shared/buttons/Button'

const SkillStepContent = () => {
  const [selectedSkill, setSelectedSkill] = useState<User['skill']>(undefined)

  const isLoaded = useIsComponentLoaded()
  const { user, setUser } = useUser()
  const router = useRouter()

  const handleRedirect = async () => {
    if (user?.skill?.label === selectedSkill?.label) {
      router.push('/auth/preferences')
      return
    }
    try {
      const userData = await updateCurrentUser({ skill: selectedSkill })

      setUser(userData)
      router.push('/auth/preferences')
    } catch (error) {
      // todo: add error handling
      console.log(error)
      return
    }
  }

  useEffect(() => {
    user?.skill && setSelectedSkill(user.skill)
  }, [user])

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
          'mt-6 grid h-fit grid-cols-1 gap-4 overflow-y-auto px-6 pt-1.5',
          'xs:grid-cols-2 md:grid-cols-3',
          SCROLLBAR_CLASSES,
        )}
      >
        {SKILL_LEVELS.map((item) => (
          <div className="h-fit" key={item.label}>
            <SelectionCard
              label={item.label}
              imgSrc={item.imgSrc}
              isSelected={selectedSkill?.label === item.label}
              onChange={() => setSelectedSkill(item)}
              className="col-span-1"
            />
          </div>
        ))}
      </div>

      <div className="mb-0 mt-auto flex flex-col gap-3 p-3 sm:flex-row sm:p-6">
        <Button
          size="M"
          appearence="black"
          wrapperClassName="sm:w-1/2"
          onClick={() => router.push('appliances')}
        >
          <ArrowLeft size={20} />
          Back
        </Button>
        <Button
          size="M"
          appearence="yellow"
          wrapperClassName="sm:w-1/2"
          disabled={!selectedSkill || !isLoaded}
          onClick={handleRedirect}
        >
          Continue
          <ChevronRight size={20} />
        </Button>
      </div>
    </>
  )
}

export default SkillStepContent
