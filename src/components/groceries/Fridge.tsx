'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { Plus } from 'react-feather'
import FridgeItem from './FridgeItem'
import Button from '../shared/Button'
import AddItemModal from './AddItemModal'

export type FridgeItemType = {
  id: string
  label: string
  icon: string
  quantity: number
  units: 'grams' | 'kg' | 'tblsp' | 'cup' | 'ml' | 'pieces' | 'items'
}

const mockItems: Array<FridgeItemType> = [
  {
    id: 'sdfsdf',
    label: 'Watermelon',
    icon: '🥥',
    quantity: 10,
    units: 'items',
  },
  {
    id: 'sdfsdfff',
    label: 'Watermelon',
    icon: '🥥',
    quantity: 10,
    units: 'items',
  },
  {
    id: 'sdkiidffff',
    label: 'Watermelon',
    icon: '🥥',
    quantity: 10,
    units: 'items',
  },
  {
    id: 'sdfPuicCenalffff',
    label: 'Watermelon',
    icon: '🥥',
    quantity: 10,
    units: 'items',
  },
]

const Fridge = () => {
  const [items, setItems] = useState<Array<FridgeItemType>>(mockItems)
  const [showAddItem, setShowAddItem] = useState(false)

  const updateItem = (
    id: string,
    quantity: number,
    units: FridgeItemType['units'],
  ) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: quantity,
          units: units,
        }
      } else return item
    })
    setItems(newItems)
  }

  const deleteItem = (id: string) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  const onAddItems = (newItems: FridgeItemType[]) => {
    setItems((prevState) => [...prevState, ...newItems])
  }

  return (
    <div
      className={clsx(
        'relative flex flex-col gap-4 rounded-2xl border border-black-regular/10 p-4',
        'bg-tones-lavender bg-cover bg-top',
        { 'min-h-80': items.length === 0 },
      )}
      style={
        items.length === 0
          ? {
              backgroundImage: 'url("/images/fridge-placeholder.webp")',
            }
          : {}
      }
    >
      <div className="grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <FridgeItem
            key={item.id}
            id={item.id}
            label={item.label}
            icon={item.icon}
            quantity={item.quantity}
            units={item.units}
            onUpdate={updateItem}
            onDelete={deleteItem}
          />
        ))}
      </div>
      <Button
        size="M"
        appearence="yellow"
        className="mb-0 mt-auto w-full"
        onClick={() => setShowAddItem(true)}
      >
        <Plus size={20} />
        Add Items
      </Button>
      <AddItemModal
        onAddItems={onAddItems}
        isOpen={showAddItem}
        close={() => setShowAddItem(false)}
      />
    </div>
  )
}

export default Fridge
