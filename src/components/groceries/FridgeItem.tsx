'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { X } from 'react-feather'
import FridgeItemModal from './FridgeItemModal'
import { MeasurementUnits } from '../../types/groceries'
import { Ingredient } from '../../types/recipes'
import RandomColorBg from '../shared/RandomColorBg'

type FridgeItemProps = {
  onUpdate: (_id: string, quantity: number, units: MeasurementUnits) => void
  onDelete: (_id: string) => void
} & Ingredient

const FridgeItem = ({
  _id,
  label,
  iconSrc,
  quantity,
  measurement,
  onUpdate,
  onDelete,
}: FridgeItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const count = `${quantity} ${measurement}`

  const updateItem = (quantityArg: string, unitsArg: MeasurementUnits) => {
    onUpdate(_id, parseFloat(quantityArg), unitsArg)
    // todo: item update logic (DB)
  }

  const deleteItem = (itemId: string, e?: React.MouseEvent) => {
    e && e.stopPropagation()
    // todo: item delete logic (DB)
    onDelete(itemId)
  }

  return (
    <>
      <div className="group relative">
        <div
          className={clsx(
            'z-[2] rounded-xl border-2 border-black-regular bg-yellow-dark p-3',
            'flex aspect-square w-full flex-col items-center justify-between gap-2',
            'relative cursor-pointer text-center leading-none',
            'group-hover:-translate-x-1 group-hover:-translate-y-1',
            'transition-[transform,colors] duration-100',
          )}
          onClick={() => setIsModalOpen(true)}
        >
          <div className="absolute right-1 top-1">
            <div
              className="cursor-pointer rounded-full p-1 transition-colors hover:bg-white"
              onClick={(e) => deleteItem(_id, e)}
            >
              <X size={12} />
            </div>
          </div>
          <div className="text-5xl">{iconSrc}</div>
          <span className="rounded-md bg-white/50 p-1 text-sm font-bold capitalize leading-none">
            {label}
          </span>
          <span className="text-xs font-medium leading-none">{count}</span>
        </div>
        <RandomColorBg />
      </div>
      <FridgeItemModal
        itemId={_id}
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
        quantity={quantity}
        measurement={measurement}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
    </>
  )
}

export default FridgeItem
