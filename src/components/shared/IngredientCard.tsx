import clsx from 'clsx'
import Image from 'next/image'
import { MeasurementUnits } from './types/groceries'
import Tag from '../blog/Tag'

type IngredientCard = {
  label: string
  iconSrc: string
  measurement: MeasurementUnits
  quantity: number
  className?: string
}

const IngredientCard = ({
  label,
  iconSrc,
  measurement,
  quantity,
  className,
}: IngredientCard) => {
  return (
    <div
      className={clsx(
        'rounded-lg border-2 border-black-default p-2',
        'flex flex-col items-center gap-1 bg-tones-rose',
        className,
      )}
    >
      <Image
        src={iconSrc}
        width={52}
        height={52}
        alt=""
        className="pointer-events-none"
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
