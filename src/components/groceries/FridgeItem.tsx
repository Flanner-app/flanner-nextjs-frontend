'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { X } from 'react-feather'
import FridgeItemModal from './FridgeItemModal'
import { FridgeItemType } from './Fridge'

export type FridgeItemProps = {
  onUpdate: (
    id: string,
    quantity: number,
    units: FridgeItemProps['units'],
  ) => void
  onDelete: (id: string) => void
} & FridgeItemType

const FridgeItem = ({
  id,
  name,
  icon,
  quantity,
  units,
  onUpdate,
  onDelete,
}: FridgeItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const count = `${quantity} ${units}`

  const updateItem = (
    quantityArg: string,
    unitsArg: FridgeItemProps['units'],
  ) => {
    onUpdate(id, parseFloat(quantityArg), unitsArg)
    // todo: item update logic (DB)
  }

  const deleteItem = (itemId: string, e?: React.MouseEvent) => {
    e && e.stopPropagation()
    // todo: item delete logic (DB)
    onDelete(itemId)
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
            onClick={(e) => deleteItem(id, e)}
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
        itemId={id}
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
        quantity={quantity}
        units={units}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
    </>
  )
}

export default FridgeItem
