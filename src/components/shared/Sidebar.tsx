'use client'

import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import { signOut } from 'next-auth/react'
import { Fragment, useState } from 'react'
import { Bookmark, ChevronsLeft, LogIn, LogOut, User } from 'react-feather'
import { urls } from '@/constants/urls'
import { useUser } from '@/context/AuthProvider'
import Button from './buttons/Button'
import { LinkButton } from './buttons/LinkButton'

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
          isOpen ? 'w-80' : 'w-22',
        )}
      >
        <div className="flex flex-col gap-3">
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
              size="M"
              appearence="ghost"
              onClick={() => setIsOpen((prev) => !prev)}
              containsIconOnly
              wrapperClassName="ml-auto mr-0"
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
          <div className="flex flex-col gap-2">
            <LinkButton
              href={urls.profile.saved}
              size="M"
              appearence="black"
              containsIconOnly={!isOpen}
              wrapperClassName="w-full"
            >
              <Bookmark size={20} />
              {isOpen && <>Saved</>}
            </LinkButton>
            <LinkButton
              href={urls.profile.base}
              size="M"
              appearence="black"
              containsIconOnly={!isOpen}
              wrapperClassName="w-full"
            >
              <User size={20} />
              {isOpen && <>Profile</>}
            </LinkButton>
          </div>
        </div>
        {user ? (
          <Button
            size="M"
            appearence="white"
            wrapperClassName="w-full"
            containsIconOnly={!isOpen}
            onClick={() => signOut()}
          >
            <LogOut size={20} />
            {isOpen && <>Logout</>}
          </Button>
        ) : (
          <LinkButton
            href={urls.auth.base}
            size="M"
            appearence="black"
            wrapperClassName="w-full"
            containsIconOnly={!isOpen}
          >
            <LogIn size={20} />
            {isOpen && <>Login</>}
          </LinkButton>
        )}
      </div>
    </>
  )
}

export default Sidebar
