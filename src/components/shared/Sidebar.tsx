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
          <span className="text-center font-archivo text-3xl font-bold text-primary-dark">
            Flanner
          </span>
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
      <Button
        appearence="solid"
        size="M"
        className="w-full leading-none"
        onClick={() => setIsModalOpen(true)}
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
