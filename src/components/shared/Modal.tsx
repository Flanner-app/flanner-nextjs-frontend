import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, ReactNode } from 'react'
import { X } from 'react-feather'
import Button from './buttons/Button'

type ModalProps = {
  isOpen: boolean
  close: () => void
  paddings?: 'none' | 'regular'
  title?: string
  showCloseBtn?: boolean
  className?: string
  children: ReactNode
}

const Modal = ({
  isOpen,
  close,
  paddings,
  title,
  showCloseBtn = true,
  className,
  children,
}: ModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog onClose={close} as="div" className="relative z-10">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          leave="ease-in duration-150"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black-regular bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 h-full min-h-full">
          <div
            className={clsx(
              'flex h-full min-h-full sm:items-center',
              'sm:justify-center sm:p-4',
            )}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-150"
              enterFrom="opacity-0 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 scale-100 sm:translate-y-0"
              leave="duration-150 transform ease-in-out sm:ease-in"
              leaveFrom="opacity-100 scale-100 sm:translate-y-0"
              leaveTo="opacity-0 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={clsx(
                  'min-h-full w-full overflow-hidden bg-yellow-dark backdrop-blur-md sm:min-h-40',
                  'h-full border-2 border-black-regular bg-opacity-70 sm:max-w-lg sm:rounded-xl',
                  { 'p-6': paddings === 'regular' },
                  className,
                )}
              >
                {(title || showCloseBtn) && (
                  <div className="flex items-center justify-between gap-4">
                    {title && (
                      <h3
                        className={clsx(
                          'font-rubik text-6xl font-bold leading-none',
                          'block',
                        )}
                      >
                        {title}
                      </h3>
                    )}
                    <Button
                      size="S"
                      appearence="ghost"
                      containsIconOnly
                      onClick={close}
                      wrapperClassName={clsx(
                        !title && '!absolute right-6 top-6 z-10',
                      )}
                    >
                      <X size={16} />
                    </Button>
                  </div>
                )}
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
