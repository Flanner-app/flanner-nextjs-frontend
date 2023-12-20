import clsx from 'clsx'
import Image from 'next/image'
import { X } from 'react-feather'
import { Ingredient } from '../../types/recipes'
import Tag from '../blog/Tag'

type IngredientCard = {
  onDelete?: () => void
  className?: string
} & Ingredient

const IngredientCard = ({
  label,
  iconSrc,
  measurement,
  quantity,
  onDelete,
  className,
}: Omit<IngredientCard, '_id'>) => {
  return (
    <div
      className={clsx(
        'rounded-lg border-2 border-black-default p-2',
        'flex flex-col items-center justify-between gap-1 bg-tones-rose',
        'relative',
        className,
      )}
    >
      {onDelete && (
        <div
          className={clsx(
            'cursor-pointer rounded-full p-1 transition-colors',
            'absolute right-1 top-1 z-[5]',
            'hover:bg-white',
          )}
          onClick={onDelete}
        >
          <X size={12} />
        </div>
      )}
      <Image
        src={iconSrc}
        width={52}
        height={52}
        alt=""
        className="pointer-events-none select-none"
      />
      <span className="inline-block text-center font-rubik font-medium leading-none">
        {label}
      </span>
      <Tag type="info" className="py-0.5">
        {quantity} {measurement}
      </Tag>
    </div>
  )
}

export default IngredientCard
