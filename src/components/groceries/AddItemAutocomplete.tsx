'use client'

import clsx from 'clsx'
import {
  // useEffect,
  useState,
} from 'react'
import {
  // Check,
  ChevronDown,
  X,
} from 'react-feather'
// import { v4 as uuidv4 } from 'uuid'
// import staticGroceries from './staticGroceries.json'
import Input from '../shared/Input'
import Modal from '../shared/Modal'
import Button from '../shared/buttons/Button'
import Heading from '../shared/typography/Heading'

export type AutocompleteValue = { _id: string; label: string; icon: string }

type AddItemAutocompleteProps = {
  onSelect: (value: AutocompleteValue) => void
  selectedValue: AutocompleteValue
  label: string
}

const scrollbarClasses = [
  'scrollbar-track-transparent scrollbar-none',
  'scrollbar-thumb-black-hover/50 scrollbar-thumb-rounded-md',
  'sm:scrollbar-w-1 sm:scrollbar',
]

const AddItemAutocomplete = ({
  // onSelect,
  selectedValue,
  label,
}: AddItemAutocompleteProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  // const [groceryList, setGroceryList] = useState(staticGroceries)

  // useEffect(() => {
  //   if (query === '') {
  //     setGroceryList(staticGroceries)
  //   } else {
  //     const newItems = staticGroceries.filter((item) =>
  //       item.label.toLowerCase().includes(query.toLocaleLowerCase()),
  //     )
  //     setGroceryList(newItems)
  //   }
  // }, [query])

  return (
    <div>
      <span className="mb-2 inline-block font-medium leading-none">
        {label}
      </span>
      <div
        className={clsx(
          'rounded-xl bg-white shadow-sm transition-colors',
          'h-14 pl-4 pr-2 hover:bg-white/75 active:bg-white',
          'border-2 border-black-default',
          'box-border flex cursor-pointer items-center justify-between gap-2',
        )}
        onClick={() => setIsOpen(true)}
      >
        <div className="flex h-full w-full flex-col gap-1.5">
          <div className="flex h-5 grow items-center">
            {selectedValue.label ? (
              <span className="text-sm leading-none text-black-default">
                {selectedValue.label}
              </span>
            ) : (
              <span className="text-sm leading-none text-black-hover/50">
                Hmm...
              </span>
            )}
          </div>
        </div>
        <Button size="S" appearence="ghost" containsIconOnly>
          <ChevronDown
            size={16}
            className={isOpen ? 'rotate-180' : 'rotate-0'}
          />
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        close={() => {
          setIsOpen(false)
          setQuery('')
        }}
        showCloseBtn={false}
        className="aspect-square max-h-400 py-6"
      >
        <div className="flex h-full flex-col gap-4">
          <div className="flex items-center justify-between gap-4 px-6">
            <Heading type="display" as="h2">
              Select an item
            </Heading>
            <Button
              size="S"
              appearence="ghost"
              containsIconOnly
              onClick={() => {
                setIsOpen(false)
                setQuery('')
              }}
            >
              <X size={16} />
            </Button>
          </div>

          <div className="w-2/3 px-6">
            <Input
              placeholder="blue banana"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <ul className={clsx('h-full overflow-y-auto px-6', scrollbarClasses)}>
            {/* {groceryList.map((item) => (
              <li
                key={item._id}
                className={clsx(
                  'cursor-pointer px-2 py-1 font-medium hover:bg-yellow-light',
                  'mb-1 flex items-center justify-between rounded-lg',
                  'transition-colors',
                  selectedValue.label === item.label &&
                    clsx(
                      'relative border-2 border-black-default bg-tones-lavender',
                      'after:absolute after:rounded-lg',
                      'after:left-1 after:top-1 after:bg-black-regular',
                      'after:-z-[1] after:h-full after:w-full',
                    ),
                )}
                onClick={() => {
                  onSelect(item)
                  setIsOpen(false)
                  setQuery('')
                }}
              >
                {item.icon}
                {item.label}
                {selectedValue.label === item.label && (
                  <Check size={16} className="text-black-default" />
                )}
              </li>
            ))}
            {!groceryList.length && (
              <Button
                appearence="yellow"
                size="M"
                onClick={() => {
                  onSelect({ _id: uuidv4(), label: query, icon: '❔' })
                  setIsOpen(false)
                  setQuery('')
                }}
              >
                Add {query}
              </Button>
            )} */}
          </ul>
        </div>
      </Modal>
    </div>
  )
}

export default AddItemAutocomplete
