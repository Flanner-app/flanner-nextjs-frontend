'use client'

import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { Fragment, useState } from 'react'
import { ChevronsLeft, LogIn, LogOut } from 'react-feather'
import { useUser } from '@/context/AuthProvider'
import Button from './Button'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useUser()

  return (
    <>
      <Transition
        unmount
        as={Fragment}
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-20"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-20"
        leaveTo="opacity-0"
      >
        <div
          className="fixed inset-0 z-40 h-full w-full bg-black-default"
          onClick={() => setIsOpen(false)}
        />
      </Transition>

      <div
        className={clsx(
          'h-full border-r-2 border-black-regular px-4 py-3 shadow-sm',
          'hidden flex-col justify-between bg-yellow-dark md:flex',
          'fixed left-0 z-50 transition-[width]',
          isOpen ? 'w-64' : 'w-21.5',
        )}
      >
        <div
          className={clsx(
            'flex items-center',
            isOpen ? 'justify-between' : 'justify-center',
          )}
        >
          {isOpen && (
            <h1 className="font-rubik text-10xl font-extrabold leading-none">
              Flanner
            </h1>
          )}
          <Button
            size="S"
            appearence="ghost"
            onClick={() => setIsOpen((prev) => !prev)}
            containsIconOnly
          >
            <ChevronsLeft
              size={20}
              className={clsx(
                'transform transition-transform',
                !isOpen && 'rotate-180',
              )}
            />
          </Button>
        </div>
        {/* {user ? (
          <Button
            size="M"
            appearence="black"
            wrapperClassName="w-full"
            containsIconOnly={!isOpen}
            onClick={() => signOut()}
          >
            <LogOut size={20} />
            {isOpen && <>Logout</>}
          </Button>
        ) : (
          <Link href="/auth">
            <Button
              size="M"
              appearence="black"
              wrapperClassName="w-full"
              containsIconOnly={!isOpen}
            >
              <LogIn size={20} />
              {isOpen && <>Login</>}
            </Button>
          </Link>
        )} */}
        <Link href="/auth">
          <Button
            size="M"
            appearence="black"
            wrapperClassName="w-full"
            containsIconOnly={!isOpen}
          >
            <LogIn size={20} />
            {isOpen && <>Login</>}
          </Button>
        </Link>
      </div>
    </>
  )
}

export default Sidebar
