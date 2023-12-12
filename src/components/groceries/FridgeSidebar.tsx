import clsx from 'clsx'
import Fridge from './Fridge'
import Button from '../shared/Button'
import { Ingredient } from '../shared/types/recipes'

const mockItems: Array<Ingredient> = [
  {
    _id: 'sdfsdf',
    label: 'Watermelon',
    iconSrc: '🥥',
    quantity: 10,
    measurement: 'items',
  },
  {
    _id: 'sdfsdfff',
    label: 'Watermelon',
    iconSrc: '🥥',
    quantity: 10,
    measurement: 'items',
  },
  {
    _id: 'sdkiidffff',
    label: 'Watermelon',
    iconSrc: '🥥',
    quantity: 10,
    measurement: 'items',
  },
  {
    _id: 'sdfPuicCenalffff',
    label: 'Watermelon',
    iconSrc: '🥥',
    quantity: 10,
    measurement: 'items',
  },
]

const FridgeSidebar = () => {
  return (
    <div
      className={clsx(
        'h-full border-l-2 border-black-regular p-6 shadow-sm',
        'flex w-full flex-col justify-between gap-6 bg-yellow-dark lg:max-w-md',
        'md:max-w-80',
      )}
    >
      <Fridge itemList={mockItems} />
      <Button appearence="yellow" size="L">
        Generate recipes!
      </Button>
    </div>
  )
}

export default FridgeSidebar
