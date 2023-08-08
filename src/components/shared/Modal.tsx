import clsx from 'clsx'
import { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'

type ModalProps = {
  isOpen: boolean
  close: () => void
  className?: string
  children: ReactNode
}

const Modal = ({ isOpen, close, className, children }: ModalProps) => {
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
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 h-full min-h-full">
          <div
            className={clsx(
              'flex h-full min-h-full sm:items-center',
              'text-center sm:justify-center sm:p-4',
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
                  'min-h-40 w-full overflow-hidden bg-white',
                  'p-6 sm:max-w-lg sm:rounded-3xl',
                  className,
                )}
              >
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
