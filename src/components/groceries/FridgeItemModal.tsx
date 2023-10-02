'use client'

import { useState } from 'react'
import { Trash } from 'react-feather'
import { FridgeItemType } from './Fridge'
import Button from '../shared/Button'
import Input from '../shared/Input'
import Modal from '../shared/Modal'
import Select from '../shared/Select'

type FridgeItemModalProps = {
  itemId: string
  isOpen: boolean
  close: () => void
  quantity: FridgeItemType['quantity']
  units: FridgeItemType['units']
  updateItem: (quantity: string, units: FridgeItemType['units']) => void
  deleteItem: (id: string) => void
}

type ItemData = {
  quantity: string
  units: FridgeItemModalProps['units']
}

export const measurements: Array<FridgeItemModalProps['units']> = [
  'grams',
  'kg',
  'tblsp',
  'cup',
  'ml',
  'pieces',
  'items',
]

const FridgeItemModal = ({
  itemId,
  isOpen,
  close,
  quantity,
  units,
  updateItem,
  deleteItem,
}: FridgeItemModalProps) => {
  const [data, setData] = useState<ItemData>({
    quantity: quantity.toString(),
    units: units,
  })

  const onSelectUnit = (value: string) => {
    if (measurements.includes(value as FridgeItemType['units'])) {
      setData((prevData) => ({
        ...prevData,
        units: value as FridgeItemType['units'],
      }))
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      close={close}
      title="Any Changes?"
      className="flex flex-col gap-4 overflow-visible"
    >
      <div className="flex justify-between gap-4">
        <Input
          type="number"
          label="Quantity"
          placeholder="Set quantity"
          value={data?.quantity.toString() || ''}
          decimalCount={2}
          onChange={(e) => {
            setData((prevData) => ({
              ...prevData,
              quantity: e.target.value,
            }))
          }}
          wrapperClassName="w-full"
        />
        <Select
          name="Measurement select"
          label="Measure in"
          value={data.units}
          valueList={measurements}
          onChange={onSelectUnit}
        />
      </div>
      <div className="flex justify-between gap-4">
        <Button
          size="M"
          appearence="critical"
          className="w-full"
          onClick={() => deleteItem(itemId)}
        >
          <Trash size={20} />
          Delete
        </Button>
        <Button
          size="M"
          appearence="black"
          className="w-full"
          onClick={() => {
            updateItem(data.quantity, data.units)
            close()
          }}
        >
          Save
        </Button>
      </div>
    </Modal>
  )
}

export default FridgeItemModal
