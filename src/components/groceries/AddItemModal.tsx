'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Plus, Trash, X } from 'react-feather'
import AddItemAutocomplete from './AddItemAutocomplete'
import { FridgeItemType } from './Fridge'
import { measurements } from './FridgeItemModal'
import Button from '../shared/Button'
import Input from '../shared/Input'
import Modal from '../shared/Modal'
import Select from '../shared/Select'

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

const scrollbarClasses = [
  'scrollbar-track-transparent',
  'scrollbar-thumb-black-hover/50 scrollbar-thumb-rounded-md',
  'scrollbar-w-1 scrollbar',
]

const AddItemModal = ({ isOpen, close, onAddItems }: AddItemModalProps) => {
  const [items, setItems] = useState<FridgeItemType[]>([
    { id: getRandomId(), label: '', icon: '', units: 'items', quantity: 1 },
  ])
  const [disableSave, setDisableSave] = useState(true)

  const onClose = () => {
    close()
    setItems([
      { id: getRandomId(), label: '', icon: '', units: 'items', quantity: 1 },
    ])
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
    } else if (property === 'quantity') {
      editedItem = {
        ...updatedItems[index],
        [property]: parseFloat(value.toString()) || 0,
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

  const onSave = () => {
    onAddItems(items)
    onClose()
  }

  useEffect(() => {
    const isDisabled = items.some((item) => {
      return Object.values(item).some((fieldValue) => !fieldValue)
    })
    setDisableSave(isDisabled)
  }, [items])

  return (
    <Modal
      isOpen={isOpen}
      close={onClose}
      showCloseBtn={false}
      paddings="none"
      className="flex flex-col overflow-visible sm:max-h-600 sm:!max-w-2xl"
    >
      <div className="flex items-center justify-between gap-4 px-4 pt-4 sm:px-6 sm:pt-6">
        <h3 className="font-rubik text-6xl font-bold leading-none">
          Add fresh groceries
        </h3>
        <Button size="S" appearence="ghost" containsIconOnly onClick={onClose}>
          <X size={16} />
        </Button>
      </div>
      <div
        className={clsx(
          'mt-6 flex h-full flex-col overflow-y-auto',
          'divide-y divide-black-default/10',
          scrollbarClasses,
        )}
      >
        {items.map((item, index) => (
          <div
            className="flex items-center gap-2 px-2 py-4 first:pt-0 sm:py-4 md:px-6"
            key={item.id}
          >
            <span className="pointer-events-none select-none text-4xl">
              {item.icon || '❔'}
            </span>
            <div className="flex w-full items-start gap-5 sm:items-center">
              <div className="grid w-full grid-cols-1 items-center gap-2 sm:grid-cols-3 sm:gap-4">
                <AddItemAutocomplete
                  label="Select item"
                  placeholder="Type it in!"
                  name={'grocery input ' + index}
                  onChange={(value) => editItem(index, 'label', value)}
                  value={{ label: item.label, icon: item.icon }}
                  openToTop={index > 1}
                />
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
          </div>
        ))}
      </div>
      <div className="flex gap-2 px-4 pb-4 pt-3 sm:px-6 sm:pb-6 sm:pt-6">
        <Button
          wrapperClassName="w-1/2"
          appearence="yellow"
          size="M"
          onClick={onAddItem}
        >
          <Plus size={20} />
          Add more
        </Button>
        <Button
          wrapperClassName="w-1/2"
          appearence="black"
          size="M"
          onClick={onSave}
          disabled={disableSave}
        >
          Save
        </Button>
      </div>
    </Modal>
  )
}

export default AddItemModal
