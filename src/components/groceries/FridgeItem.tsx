import clsx from 'clsx'
import { X } from 'react-feather'

type FridgeItemProps = {
  name: string
  icon: string
  quantity: number
  units?: 'grams' | 'kg' | 'tblsp' | 'cup' | 'ml' | 'pieces'
}

const FridgeItem = ({ name, icon, quantity, units }: FridgeItemProps) => {
  const count = `${quantity} ${units || 'Items'}`

  return (
    <div
      className={clsx(
        'w-fit rounded-xl border border-black-regular/10 bg-tones-peach p-3',
        'flex aspect-square w-full flex-col items-center justify-center gap-2',
        'relative text-center leading-none',
      )}
    >
      <div className="absolute right-1 top-1">
        <div className="cursor-pointer rounded-full p-1 transition-colors hover:bg-white">
          <X size={12} />
        </div>
      </div>
      <div className="text-5xl">{icon}</div>
      <span className="rounded-md bg-white/50 p-1 text-sm font-bold capitalize leading-none">
        {name}
      </span>
      <span className="text-xs font-medium leading-none">{count}</span>
    </div>
  )
}

export default FridgeItem
