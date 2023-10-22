'use client'

import { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { ChevronsLeft, Facebook, LogIn, Twitter } from 'react-feather'
import Button from './Button'
import Modal from './Modal'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div
      className={clsx(
        'h-full border-r-2 border-black-regular p-4 shadow-sm',
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
      <Button
        size="M"
        appearence="black"
        className="w-full leading-none"
        containsIconOnly={!isOpen}
        onClick={() => setIsModalOpen(true)}
      >
        <LogIn size={20} />
        {isOpen && <>Login</>}
      </Button>
      <Modal
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
        title="Use the Fridge!"
      >
        <span className="mb-6 inline-block text-base text-black-hover">
          You can login using any of these
        </span>
        <div className="mx-auto flex flex-col gap-2 sm:flex-row">
          <Button size="S" appearence="yellow" className="w-full">
            <Image
              alt=""
              height={24}
              width={24}
              src="/images/icons/google.svg"
            />
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
      </Modal>
    </div>
  )
}

export default Sidebar
