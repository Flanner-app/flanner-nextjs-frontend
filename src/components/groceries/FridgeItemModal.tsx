'use client'

import { useState } from 'react'
import Input from '../shared/Input'
import Modal from '../shared/Modal'
import { FridgeItemProps } from './FridgeItem'
import Select from '../shared/Select'
import Button from '../shared/Button'
import { Trash } from 'react-feather'

type FridgeItemModalProps = {
  itemId: string
  isOpen: boolean
  close: () => void
  quantity: FridgeItemProps['quantity']
  units: FridgeItemProps['units']
  updateItem: (quantity: string, units: FridgeItemProps['units']) => void
  deleteItem: (id: string) => void
}

type ItemData = {
  quantity: string
  units: FridgeItemModalProps['units']
}

const measurements: Array<FridgeItemModalProps['units']> = [
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
    if (measurements.includes(value as FridgeItemProps['units'])) {
      setData((prevData) => ({
        ...prevData,
        units: value as FridgeItemProps['units'],
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
          appearence="critical"
          className="w-full"
          onClick={() => deleteItem(itemId)}
        >
          <Trash size={20} />
          Delete
        </Button>
        <Button
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
