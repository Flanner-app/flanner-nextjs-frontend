'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Combobox } from '@headlessui/react'
import staticGroceries from './staticGroceries.json'
import Autocomplete, { AutocompleteProps } from '../shared/Autocomplete'
import { SelectionGroceryItem } from './AddItemModal'

const AddItemAutocomplete = ({
  ...props
}: Omit<
  AutocompleteProps<SelectionGroceryItem>,
  'onChangeQuery' | 'valueList'
>) => {
  const [query, setQuery] = useState('')
  const [groceryList, setGroceryList] = useState(staticGroceries)

  useEffect(() => {
    if (query === '') {
      setGroceryList(staticGroceries)
    } else {
      const newItems = staticGroceries.filter((item) =>
        item.label.toLowerCase().includes(query.toLocaleLowerCase()),
      )
      setGroceryList(newItems)
    }
  }, [query])

  return (
    <Autocomplete<SelectionGroceryItem>
      valueList={groceryList}
      onChangeQuery={setQuery}
      {...props}
    >
      <Combobox.Option
        className={clsx(
          'w-full bg-transparent px-1 py-2 text-center text-sm hover:bg-black-hover',
          'cursor-pointer rounded-lg transition-colors hover:text-white',
        )}
        value={{ label: query, icon: '❔' }}
      >
        Add {query}
      </Combobox.Option>
    </Autocomplete>
  )
}

export default AddItemAutocomplete
