'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Plus } from 'react-feather'
import { Combobox } from '@headlessui/react'
import staticGroceries from './staticGroceries.json'
import Modal from '../shared/Modal'
import Autocomplete from '../shared/Autocomplete'
import Button from '../shared/Button'

type AddItemModalProps = {
  isOpen: boolean
  close: () => void
}

export type GroceryItem = {
  label: string
  icon: string
}

const AddItemModal = ({ isOpen, close }: AddItemModalProps) => {
  const [query, setQuery] = useState('')
  const [selectedItem, setSelectedItem] = useState<GroceryItem>({
    label: '',
    icon: '',
  })
  const [items, setItems] = useState(staticGroceries)

  const onClose = () => {
    close()
    setQuery('')
    setSelectedItem({
      label: '',
      icon: '',
    })
  }

  useEffect(() => {
    if (query === '') {
      setItems(staticGroceries)
    } else {
      const newItems = staticGroceries.filter((item) =>
        item.label.toLowerCase().includes(query.toLocaleLowerCase()),
      )
      setItems(newItems)
    }
  }, [query])

  return (
    <Modal
      isOpen={isOpen}
      close={onClose}
      title="Add fresh groceries"
      className="overflow-visible"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Autocomplete<GroceryItem>
            valueList={items}
            label="Select item"
            placeholder="Type it in!"
            name="grocery input"
            value={selectedItem}
            onChange={setSelectedItem}
            onChangeQuery={setQuery}
          >
            <Combobox.Option
              className={clsx(
                'w-full bg-transparent px-1 py-2 text-center text-sm hover:bg-black-hover',
                'cursor-pointer rounded-lg transition-colors hover:text-white',
              )}
              value={{ label: query, icon: '' }}
            >
              Add {query}
            </Combobox.Option>
          </Autocomplete>
        </div>
        <div className="flex gap-2">
          <Button className="w-1/2" appearence="yellow">
            <Plus size={20} />
            Add more
          </Button>
          <Button className="w-1/2" appearence="black">
            Save
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default AddItemModal
