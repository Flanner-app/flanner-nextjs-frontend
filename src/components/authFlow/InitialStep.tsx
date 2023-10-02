'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import Button from '../shared/Button'

const InitialAuthStep = ({ className }: { className?: string }) => {
  const { signInWithGoogle: googleSignIn } = useAuth()

  const router = useRouter()
  const pathname = usePathname()

  const signInWithGoogle = async () => {
    googleSignIn().then(() => router.push(`${pathname}/preferences`))
  }

  return (
    <div className={clsx('p-6', className)}>
      <h3 className="max-w-5/6 font-rubik text-6xl font-bold">
        Use the Fridge!
      </h3>
      <span className="inline-block text-base text-black-hover">
        Soon, there will be more ways to do sign in
      </span>
      <div className="mx-auto mt-16 flex flex-col gap-3 md:flex-row md:gap-2">
        <Button
          size="S"
          appearence="white"
          className="w-full"
          onClick={signInWithGoogle}
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
