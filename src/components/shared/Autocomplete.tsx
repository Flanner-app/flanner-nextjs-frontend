import clsx from 'clsx'
import { Fragment, ReactNode } from 'react'
import { ChevronDown } from 'react-feather'
import { Combobox, Transition } from '@headlessui/react'
import Button from './Button'
import { SelectionGroceryItem } from '../groceries/AddItemModal'

type AutocompleteProps<T> = {
  valueList: T[]
  label: string
  placeholder?: string
  name: string
  value?: T
  className?: string
  onChange: (value: T) => void
  onChangeQuery: (query: string) => void
  children?: ReactNode
}

const Autocomplete = <T extends SelectionGroceryItem>({
  valueList,
  label,
  placeholder,
  name,
  value,
  className,
  onChange,
  onChangeQuery,
  children,
}: AutocompleteProps<T>) => {
  const scrollbarClasses = [
    'scrollbar-track-transparent scrollbar-none',
    'scrollbar-thumb-black-hover/50 scrollbar-thumb-rounded-md',
    'sm:scrollbar-w-1 sm:scrollbar',
  ]

  return (
    <Combobox value={value} onChange={onChange} name={name}>
      {({ open }) => (
        <div className="relative">
          <Combobox.Button
            as="div"
            className={clsx(
              'flex min-h-14 w-full flex-col rounded-xl bg-white',
              'justify-center px-4 py-2 shadow-sm transition-colors hover:bg-white/75',
              'box-border cursor-pointer active:bg-white',
              open && '!bg-white',
              className,
            )}
          >
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex grow flex-col gap-1.5">
                <span className="inline-block text-xs leading-none">
                  {label}
                </span>
                <Combobox.Input
                  className="h-5 w-full bg-transparent text-sm leading-none outline-none"
                  displayValue={(displayValue: T) => displayValue.label}
                  onChange={(e) => onChangeQuery(e.target.value)}
                  placeholder={placeholder}
                  autoComplete="off"
                />
              </div>
              <Button size="S" appearence="ghost" containsIconOnly>
                <ChevronDown
                  size={16}
                  className={open ? 'rotate-180' : 'rotate-0'}
                />
              </Button>
            </div>
          </Combobox.Button>
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
            <Combobox.Options
              as="div"
              className={clsx(
                'absolute z-20 mt-1 h-fit w-full overflow-hidden rounded-xl outline-none',
              )}
            >
              <ul
                className={clsx(
                  'max-h-64 w-full overflow-auto bg-white px-2 py-2',
                  scrollbarClasses,
                )}
              >
                {valueList.length !== 0 ? (
                  valueList.map((item) => (
                    <Combobox.Option
                      value={item}
                      key={item.label}
                      as={Fragment}
                    >
                      {({ selected }) => (
                        <li
                          className={clsx(
                            'cursor-pointer px-1 py-1 font-medium hover:bg-yellow-light',
                            'mb-0.5 flex items-center gap-2 rounded-lg transition-colors',
                            selected && '!bg-yellow-dark',
                          )}
                        >
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </li>
                      )}
                    </Combobox.Option>
                  ))
                ) : children ? (
                  <>{children}</>
                ) : (
                  <div className="w-full text-center text-sm">
                    No such items
                  </div>
                )}
              </ul>
            </Combobox.Options>
          </Transition>
        </div>
      )}
    </Combobox>
  )
}

export default Autocomplete
