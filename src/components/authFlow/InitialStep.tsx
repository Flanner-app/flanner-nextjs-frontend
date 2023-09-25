'use client'

import { Facebook, Twitter } from 'react-feather'
import Button from '../shared/Button'
import { usePathname, useRouter } from 'next/navigation'

const InitialAuthStep = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleRedirect = () => {
    router.push(`${pathname}/preferences`)
  }

  return (
    <div className="p-6">
      <h3 className="max-w-5/6 font-rubik text-6xl font-bold">
        Use the Fridge!
      </h3>
      <span className="inline-block text-base text-black-hover">
        You can login using any of these
      </span>
      <div className="mx-auto mt-12 flex flex-col gap-2 sm:flex-row">
        <Button
          size="S"
          appearence="yellow"
          className="w-full"
          onClick={handleRedirect}
        >
          {/* eslint-disable-next-line */}
          <img src="/images/icons/google.svg" alt="" width={24} height={24} />
          Google
        </Button>
        <Button size="S" appearence="yellow" className="w-full">
          <Facebook size={24} />
          Facebook
        </Button>
        <Button size="S" appearence="yellow" className="w-full">
          <Twitter size={24} />
          Twitter
        </Button>
      </div>
    </div>
  )
}

export default InitialAuthStep
