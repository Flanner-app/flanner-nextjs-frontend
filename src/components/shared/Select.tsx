import { Fragment } from 'react'
import clsx from 'clsx'
import { Listbox, Transition } from '@headlessui/react'
import { FridgeItemProps } from '../groceries/FridgeItem'

type SelectProps = {
  valueList: string[]
  label: string
  placeholder?: string
  name: string
  value: string
  className?: string
  onChange: (value: FridgeItemProps['units']) => void
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
              'flex h-full w-full flex-col gap-0.5 rounded-xl bg-white shadow-sm transition-colors',
              'justify-center px-4 py-2 hover:bg-white/75 active:bg-white',
              'box-border cursor-pointer',
              open && 'bg-white',
              className,
            )}
          >
            <Listbox.Label className="cursor-pointer text-xs">
              {label}
            </Listbox.Label>
            {value ? (
              <span className="text-sm text-black-default">{value}</span>
            ) : (
              <span className="text-sm text-black-hover/50">{placeholder}</span>
            )}
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
