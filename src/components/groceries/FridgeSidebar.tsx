import clsx from 'clsx'
import Fridge, { FridgeItemType } from './Fridge'

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

const FridgeSidebar = () => {
  return (
    <div
      className={clsx(
        'h-full border-l border-black-regular p-4 shadow-sm',
        'flex w-full flex-col gap-4 bg-yellow-dark lg:max-w-md',
        'md:max-w-80',
      )}
    >
      <Fridge itemList={mockItems} />
    </div>
  )
}

export default FridgeSidebar
