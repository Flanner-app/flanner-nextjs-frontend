'use client'

import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { ChevronsLeft, LogIn } from 'react-feather'
import Button from './Button'

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
          <h1 className="text-10xl text-primary-dark font-rubik font-extrabold leading-none">
            Flanner
          </h1>
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
