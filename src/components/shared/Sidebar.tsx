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
        'h-full border-r border-primary-light p-4 shadow-sm',
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
          <h1 className="font-rubik text-10xl font-extrabold leading-none text-primary-dark">
            Flanner
          </h1>
        )}
        <Button
          appearence="ghost"
          size="S"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <ChevronsLeft
            size={20}
            className={clsx(
              'transform text-primary-dark transition-transform',
              !isOpen && 'rotate-180',
            )}
          />
        </Button>
      </div>
      <Link href="/login">
        <Button appearence="solid" size="M" className="w-full leading-none">
          <LogIn size={20} />
          {isOpen && <>Login</>}
        </Button>
      </Link>
    </div>
  )
}

export default Sidebar
