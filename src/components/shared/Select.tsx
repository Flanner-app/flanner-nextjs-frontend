import { Fragment } from 'react'
import clsx from 'clsx'
import { Listbox, Transition } from '@headlessui/react'
import Button from './Button'
import { ChevronDown } from 'react-feather'

type SelectProps = {
  valueList: string[]
  label: string
  placeholder?: string
  name: string
  value: string
  className?: string
  onChange: (value: string) => void
}

const Select = ({
  valueList,
  label,
  placeholder,
  name,
  value,
  className,
  onChange,
}: SelectProps) => {
  return (
    <Listbox value={value} onChange={onChange} name={name}>
      {({ open }) => (
        <div className="relative w-full">
          <Listbox.Button
            as="div"
            className={clsx(
              'h-full w-full rounded-xl bg-white shadow-sm transition-colors',
              'min-h-14 px-4 py-2 hover:bg-white/75 active:bg-white',
              'box-border flex cursor-pointer items-center justify-between gap-4',
              open && 'bg-white',
              className,
            )}
          >
            <div className="flex h-full w-full flex-col gap-1.5">
              <Listbox.Label
                className="cursor-pointer text-xs leading-none"
                as="span"
              >
                {label}
              </Listbox.Label>
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
          <Transition
            as={Fragment}
            appear
            show={open}
            enter="ease-out duration-100 transform"
            enterFrom="opacity-50 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-100 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Listbox.Options
              as="ul"
              className="absolute mt-1 w-full rounded-xl bg-white p-2 outline-none"
            >
              {valueList.map((item) => (
                <Listbox.Option value={item} key={item} as={Fragment}>
                  {({ selected }) => (
                    <li
                      className={clsx(
                        'cursor-pointer px-2 py-1 font-medium hover:bg-yellow-light',
                        'mb-0.5 rounded-lg transition-colors',
                        selected && '!bg-yellow-dark',
                      )}
                    >
                      {item}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}

export default Select
