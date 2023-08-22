'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { Plus } from 'react-feather'
import FridgeItem from './FridgeItem'
import Button from '../shared/Button'
import AddItemModal from './AddItemModal'

export type FridgeItemType = {
  id: string
  name: string
  icon: string
  quantity: number
  units: 'grams' | 'kg' | 'tblsp' | 'cup' | 'ml' | 'pieces' | 'items'
}

const mockItems: Array<FridgeItemType> = [
  {
    id: 'sdfsdf',
    name: 'Watermelon',
    icon: '🥥',
    quantity: 10,
    units: 'items',
  },
  {
    id: 'sdfsdfff',
    name: 'Watermelon',
    icon: '🥥',
    quantity: 10,
    units: 'items',
  },
  {
    id: 'sdkiidffff',
    name: 'Watermelon',
    icon: '🥥',
    quantity: 10,
    units: 'items',
  },
  {
    id: 'sdfPuicCenalffff',
    name: 'Watermelon',
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

  return (
    <div
      className={clsx(
        'flex flex-col gap-4 rounded-2xl border border-black-regular/10 p-4',
        'bg-tones-lavender',
      )}
    >
      <div className="grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <FridgeItem
            key={item.id}
            id={item.id}
            name={item.name}
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
        className="w-full"
        onClick={() => setShowAddItem(true)}
      >
        <Plus size={20} />
        Add Items
      </Button>
      <AddItemModal isOpen={showAddItem} close={() => setShowAddItem(false)} />
    </div>
  )
}

export default Fridge
