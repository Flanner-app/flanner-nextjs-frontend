import clsx from 'clsx'
import FridgeItem from './FridgeItem'

const Fridge = () => {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-black-regular/10 bg-tones-lavender p-4',
        'grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-3',
      )}
    >
      <FridgeItem name="watermelon" icon="🥥" quantity={10} units="items" />
      <FridgeItem name="bell peppers" icon="🥥" quantity={10} units="items" />
      <FridgeItem name="watermelon" icon="🥥" quantity={10} units="items" />
    </div>
  )
}

export default Fridge
