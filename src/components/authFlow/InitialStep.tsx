'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useEffect } from 'react'
import { useUser } from '@/context/AuthProvider'
import Button from '../shared/Button'

const InitialAuthStep = ({ className }: { className?: string }) => {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      return
    }
    if (!user.appliances || !user.appliances.length) {
      router.push('/auth/appliances')
      return
    }
    if (!user.skill) {
      router.push('/auth/skill')
      return
    }
    if (user.preferences === null) {
      router.push('/auth/preferences')
      return
    }
    router.push('/')
  }, [router, user])

  return (
    <div className={clsx('p-6', className)}>
      <h3 className="mb-3 max-w-5/6 font-rubik text-6xl font-bold leading-none">
        Use the Fridge!
      </h3>
      <span className="inline-block text-base text-black-hover">
        Soon, there will be more ways to sign in
      </span>
      <div className="mx-auto mt-16 flex flex-col gap-3 md:flex-row md:gap-2">
        <Button
          size="M"
          appearence="white"
          wrapperClassName="w-1/2"
          onClick={() => signIn('google')}
        >
          <Image
            width={24}
            height={24}
            alt="google"
            src="/images/icons/google.svg"
          />
          Google
        </Button>
      </div>
    </div>
  )
}

export default InitialAuthStep
