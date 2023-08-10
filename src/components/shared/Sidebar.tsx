'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { ChevronsLeft, LogIn } from 'react-feather'
import Button from './Button'
import Modal from './Modal'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
          <h1 className="text-primary-dark font-rubik text-10xl font-extrabold leading-none">
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
      <Button
        appearence="black"
        className="w-full leading-none"
        containsIconOnly={!isOpen}
      >
        <LogIn size={20} />
        {isOpen && <>Login</>}
      </Button>
      <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
        hey
      </Modal>
    </div>
  )
}

export default Sidebar
