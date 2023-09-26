'use client'

import Button from '../shared/Button'
import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'
import Image from 'next/image'

const InitialAuthStep = ({ className }: { className?: string }) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleRedirect = () => {
    router.push(`${pathname}/preferences`)
  }

  return (
    <div className={clsx('p-6', className)}>
      <h3 className="max-w-5/6 font-rubik text-6xl font-bold">
        Use the Fridge!
      </h3>
      <span className="inline-block text-base text-black-hover">
        You can login using any of these
      </span>
      <div className="mx-auto mt-16 flex flex-col gap-3 md:flex-row md:gap-2">
        <Button
          size="S"
          appearence="white"
          className="w-full"
          onClick={handleRedirect}
        >
          <Image
            width={24}
            height={24}
            alt="google"
            src="/images/icons/google.svg"
          />
          Google
        </Button>
        <Button size="S" appearence="white" className="w-full">
          <Image
            width={24}
            height={24}
            alt="google"
            src="/images/icons/facebook.svg"
          />
          Facebook
        </Button>
        <Button size="S" appearence="white" className="w-full">
          <Image
            width={24}
            height={24}
            alt="google"
            src="/images/icons/twitter.svg"
          />
          Twitter
        </Button>
      </div>
    </div>
  )
}

export default InitialAuthStep
