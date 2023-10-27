'use client'

import clsx from 'clsx'
import { useEffect, useMemo, useState } from 'react'
import { X } from 'react-feather'
import { FridgeItemType } from './Fridge'
import FridgeItemModal from './FridgeItemModal'

type FridgeItemProps = {
  onUpdate: (
    id: string,
    quantity: number,
    units: FridgeItemProps['units'],
  ) => void
  onDelete: (id: string) => void
} & FridgeItemType

const randomColorsMap: { [key: number]: string } = {
  0: 'bg-tones-yellow',
  1: 'bg-tones-coral',
  2: 'bg-tones-rose',
  3: 'bg-tones-lavender',
  4: 'bg-tones-babyblue',
  5: 'bg-tones-powderBlue',
  6: 'bg-tones-mint',
  7: 'bg-tones-white',
  8: 'bg-yellow-regular',
}

const FridgeItem = ({
  id,
  label,
  icon,
  quantity,
  units,
  onUpdate,
  onDelete,
}: FridgeItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const count = `${quantity} ${units}`

  const randomColorNumber = useMemo(() => {
    const min = 1
    const max = 9
    return Math.floor(Math.random() * (max - min + 1))
  }, [])

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

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      <div className="group relative">
        <div
          className={clsx(
            'z-[2] w-fit rounded-xl border-2 border-black-regular bg-yellow-dark p-3',
            'flex aspect-square w-full flex-col items-center justify-between gap-2',
            'relative cursor-pointer text-center leading-none transition-colors',
            'group-hover:-translate-x-1 group-hover:-translate-y-1',
            'transition-transform duration-100',
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
            {label}
          </span>
          <span className="text-xs font-medium leading-none">{count}</span>
        </div>
        <div
          className={clsx(
            'absolute inset-0 z-[1] h-full w-full rounded-xl border-2 border-black-default',
            isLoaded && randomColorsMap[randomColorNumber],
          )}
        />
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
