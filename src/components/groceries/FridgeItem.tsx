'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { X } from 'react-feather'
import FridgeItemModal from './FridgeItemModal'

export type FridgeItemProps = {
  name: string
  icon: string
  quantity: number
  units: 'grams' | 'kg' | 'tblsp' | 'cup' | 'ml' | 'pieces' | 'items'
}

const FridgeItem = ({ name, icon, quantity, units }: FridgeItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const count = `${quantity} ${units}`

  const deleteItem = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const updateItem = (
    quantityArg: string,
    unitsArg: FridgeItemProps['units'],
  ) => {
    // todo: item update logic
    console.log(parseFloat(quantityArg), unitsArg)
  }

  return (
    <>
      <div
        className={clsx(
          'w-fit rounded-xl border border-black-regular/10 bg-yellow-dark p-3',
          'flex aspect-square w-full flex-col items-center justify-between gap-2',
          'relative cursor-pointer text-center leading-none transition-colors',
          'hover:border-black-regular/25 hover:bg-tones-coral',
        )}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="absolute right-1 top-1">
          <div
            className="cursor-pointer rounded-full p-1 transition-colors hover:bg-white"
            onClick={deleteItem}
          >
            <X size={12} />
          </div>
        </div>
        <div className="text-5xl">{icon}</div>
        <span className="rounded-md bg-white/50 p-1 text-sm font-bold capitalize leading-none">
          {name}
        </span>
        <span className="text-xs font-medium leading-none">{count}</span>
      </div>
      <FridgeItemModal
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
        quantity={quantity}
        units={units}
        updateItem={updateItem}
      />
    </>
  )
}

export default FridgeItem
