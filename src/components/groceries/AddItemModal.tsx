'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Plus, Trash } from 'react-feather'
import { Combobox } from '@headlessui/react'
import staticGroceries from './staticGroceries.json'
import Modal from '../shared/Modal'
import Autocomplete from '../shared/Autocomplete'
import Button from '../shared/Button'
import Select from '../shared/Select'
import { measurements } from './FridgeItemModal'
import Input from '../shared/Input'
import { FridgeItemType } from './Fridge'

export type SelectionGroceryItem = {
  label: string
  icon: string
}

type GroceryItem = {
  label: string
  icon: string
  units: FridgeItemType['units']
  quantity: number
}

type AddItemModalProps = {
  isOpen: boolean
  close: () => void
  onAddItems: (itemList: FridgeItemType[]) => void
}

const getRandomId = () => {
  return (Date.now() + Math.random()).toString()
}

const AddItemModal = ({ isOpen, close, onAddItems }: AddItemModalProps) => {
  const [query, setQuery] = useState('')
  const [groceryList, setGroceryList] = useState(staticGroceries)
  const [items, setItems] = useState<FridgeItemType[]>([
    { id: getRandomId(), label: '', icon: '', units: 'items', quantity: 1 },
  ])

  const onClose = () => {
    close()
    setQuery('')
    setItems([{ id: '', label: '', icon: '', units: 'items', quantity: 1 }])
  }

  const onAddItem = () => {
    setItems((prevState) => [
      ...prevState,
      {
        id: getRandomId(),
        label: '',
        icon: '',
        units: 'items',
        quantity: 1,
      },
    ])
  }

  const editItem = (
    index: number,
    property: keyof GroceryItem,
    value: string | number | { label: string; icon: string },
  ) => {
    const updatedItems = [...items]
    let editedItem

    if (property === 'label') {
      const typedValue = value as { label: string; icon: string }
      editedItem = {
        ...updatedItems[index],
        label: typedValue.label,
        icon: typedValue.icon,
      }
    } else {
      editedItem = {
        ...updatedItems[index],
        [property]: value,
      }
    }
    updatedItems[index] = editedItem
    setItems(updatedItems)
  }

  const removeItem = (index: number) => {
    if (index === 0 && items.length === 1) {
      onClose()
    } else {
      const updatedItems = [...items]
      updatedItems.splice(index, 1)
      setItems(updatedItems)
    }
  }

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
    <Modal
      isOpen={isOpen}
      close={onClose}
      title="Add fresh groceries"
      className="overflow-visible sm:max-w-2xl"
    >
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <div
            className="flex w-full items-start gap-5 sm:items-center"
            key={item.id}
          >
            <div className="grid w-full grid-cols-1 items-center gap-2 sm:grid-cols-3 sm:gap-4">
              <Autocomplete<SelectionGroceryItem>
                valueList={groceryList}
                label="Select item"
                placeholder="Type it in!"
                name="grocery input"
                onChange={(value) => editItem(index, 'label', value)}
                value={{ label: item.label, icon: item.icon }}
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
              <Select
                label="Measure in"
                name="add item units select"
                value={item.units}
                valueList={measurements}
                onChange={(value) => editItem(index, 'units', value)}
              />
              <Input
                label="Quantity"
                placeholder="Amount..."
                value={item.quantity.toString() || ''}
                onChange={(e) => editItem(index, 'quantity', e.target.value)}
                type="number"
              />
            </div>
            <Button
              appearence="ghost"
              size="S"
              onClick={() => removeItem(index)}
            >
              <Trash size={16} />
            </Button>
          </div>
        ))}
        <div className="flex gap-2">
          <Button
            className="w-1/2"
            appearence="yellow"
            size="M"
            onClick={onAddItem}
          >
            <Plus size={20} />
            Add more
          </Button>
          <Button
            className="w-1/2"
            appearence="black"
            size="M"
            onClick={() => {
              onAddItems(items)
              onClose()
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default AddItemModal
