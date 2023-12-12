'use client'

import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, useRef } from 'react'
import { Check, ChevronDown, X } from 'react-feather'
import Button from './Button'
import Modal from './Modal'
import Heading from './typography/Heading'

export type SelectProps = {
  valueList: string[]
  label: string
  placeholder?: string
  name: string
  value: string
  className?: string
  onChange: (value: string) => void
}

const scrollbarClasses = [
  'scrollbar-track-transparent scrollbar-none',
  'scrollbar-thumb-black-hover/50 scrollbar-thumb-rounded-md',
  'sm:scrollbar-w-1 sm:scrollbar',
]

const Select = ({
  valueList,
  label,
  placeholder,
  name,
  value,
  className,
  onChange,
}: SelectProps) => {
  const openBtnRef = useRef<HTMLButtonElement>(null)

  return (
    <Listbox value={value} onChange={onChange} name={name}>
      {({ open }) => (
        <div className="relative w-full">
          <Listbox.Label
            className="mb-2 inline-block font-medium leading-none"
            as="span"
          >
            {label}
          </Listbox.Label>
          <Listbox.Button
            as="div"
            className={clsx(
              'rounded-xl bg-white transition-colors',
              'h-14 pl-4 pr-2 hover:bg-white/75 active:bg-white',
              'border-2 border-black-default shadow-brutalism',
              'box-border flex cursor-pointer items-center justify-between gap-2',
              open && 'bg-white',
              className,
            )}
            ref={openBtnRef}
          >
            <div className="flex h-full w-full flex-col gap-1.5">
              <div className="flex h-5 grow items-center">
                {value ? (
                  <span className="text-sm leading-none text-black-default">
                    {value}
                  </span>
                ) : (
                  <span className="text-sm leading-none text-black-hover/50">
                    {placeholder}
                  </span>
                )}
              </div>
            </div>
            <Button size="S" appearence="ghost" containsIconOnly>
              <ChevronDown
                size={16}
                className={open ? 'rotate-180' : 'rotate-0'}
              />
            </Button>
          </Listbox.Button>
          <Modal
            isOpen={open}
            close={() => openBtnRef.current?.click()}
            showCloseBtn={false}
            className="aspect-square max-h-400 py-6"
          >
            <Listbox.Options className="flex h-full flex-col gap-4">
              <div className="flex items-center justify-between gap-4 px-6">
                <Heading type="display" as="h2">
                  Choose measurement
                </Heading>
                <Button
                  size="S"
                  appearence="ghost"
                  containsIconOnly
                  onClick={() => openBtnRef.current?.click()}
                >
                  <X size={16} />
                </Button>
              </div>
              <ul
                className={clsx(
                  'h-full overflow-y-auto px-6',
                  scrollbarClasses,
                )}
              >
                {valueList.map((item) => (
                  <Listbox.Option value={item} key={item} as={Fragment}>
                    {({ selected }) => (
                      <li
                        className={clsx(
                          'cursor-pointer px-2 py-1 font-medium hover:bg-yellow-light',
                          'mb-1 flex items-center justify-between rounded-lg',
                          'transition-colors',
                          selected &&
                            clsx(
                              'relative border-2 border-black-default bg-tones-lavender',
                              'after:absolute after:rounded-lg',
                              'after:left-1 after:top-1 after:bg-black-regular',
                              'after:-z-[1] after:h-full after:w-full',
                            ),
                        )}
                      >
                        {item}
                        {selected && (
                          <Check size={16} className="text-black-default" />
                        )}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </ul>
            </Listbox.Options>
          </Modal>
        </div>
      )}
    </Listbox>
  )
}

export default Select
