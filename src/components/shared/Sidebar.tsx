'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { ChevronsLeft, LogIn } from 'react-feather'
import Button from './Button'
import { useState } from 'react'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={clsx(
        'h-full border-r border-black-regular p-4 shadow-sm',
        'flex flex-col justify-between bg-yellow-dark',
        isOpen ? 'w-64' : 'w-auto',
      )}
    >
      <div
        className={clsx(
          'flex items-center',
          isOpen ? 'justify-between' : 'justify-center',
        )}
      >
        {isOpen && (
          <span className="text-center font-archivo text-3xl font-bold text-black-regular">
            Flanner
          </span>
        )}
        <Button
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
      <Link href="/login">
        <Button
          appearence="black"
          className="w-full leading-none"
          containsIconOnly={!isOpen}
        >
          <LogIn size={20} />
          {isOpen && <>Login</>}
        </Button>
      </Link>
    </div>
  )
}

export default Sidebar
