'use client'

import { useState } from 'react'
import { Trash } from 'react-feather'
import { MEASUREMENTS } from '@/constants/recipe'
import { MeasurementUnits } from '../../types/groceries'
import { Ingredient } from '../../types/recipes'
import Button from '../shared/Button'
import Input from '../shared/Input'
import Modal from '../shared/Modal'
import Select from '../shared/Select'

type FridgeItemModalProps = {
  itemId: string
  isOpen: boolean
  close: () => void
  quantity: Ingredient['quantity']
  measurement: MeasurementUnits
  updateItem: (quantity: string, units: MeasurementUnits) => void
  deleteItem: (_id: string) => void
}

type ItemData = {
  quantity: string
  measurement: MeasurementUnits
}

const FridgeItemModal = ({
  itemId,
  isOpen,
  close,
  quantity,
  measurement,
  updateItem,
  deleteItem,
}: FridgeItemModalProps) => {
  const [data, setData] = useState<ItemData>({
    quantity: quantity.toString(),
    measurement: measurement,
  })

  const onSelectUnit = (value: string) => {
    if (MEASUREMENTS.includes(value as MeasurementUnits)) {
      setData((prevData) => ({
        ...prevData,
        units: value as MeasurementUnits,
      }))
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      close={close}
      title="Any Changes?"
      paddings="regular"
      className="flex h-full flex-col overflow-visible sm:h-fit sm:!max-w-2xl sm:p-6"
    >
      <div className="mt-6 flex justify-between gap-4">
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
          value={data.measurement}
          valueList={MEASUREMENTS}
          onChange={onSelectUnit}
        />
      </div>
      <div className="mb-0 mt-auto flex gap-2 pt-3 sm:pt-6">
        <Button
          size="M"
          appearence="critical"
          wrapperClassName="w-full"
          onClick={() => deleteItem(itemId)}
        >
          <Trash size={20} />
          Delete
        </Button>
        <Button
          size="M"
          appearence="black"
          wrapperClassName="w-full"
          onClick={() => {
            updateItem(data.quantity, data.measurement)
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
