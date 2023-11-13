import clsx from 'clsx'
import Image from 'next/image'
import { Clock, Eye, Heart } from 'react-feather'
import { v4 as uuidv4 } from 'uuid'
import { formatNumberToSmall } from '@/utils/numbers'
import IngredientCard from '@/components/shared/IngredientCard'
import Heading from '@/components/shared/typography/Heading'
import Tag from '../Tag'

const PLACEHOLDER: any = [
  { id: uuidv4(), label: 'Chopped Kimchi', measurement: 'grams', quantity: 40 },
  {
    id: uuidv4(),
    label: 'Ground pork or tofu',
    measurement: 'grams',
    quantity: 40,
  },
  {
    id: uuidv4(),
    label: 'Garlic and ginger, minced',
    measurement: 'pieces',
    quantity: 40,
  },
  { id: uuidv4(), label: 'Green onions', measurement: 'piece', quantity: 40 },
  { id: uuidv4(), label: 'Soy sauce', measurement: 'ml.', quantity: 40 },
  { id: uuidv4(), label: 'Sesame oil', measurement: 'ml.', quantity: 40 },
  { id: uuidv4(), label: 'Sugar', measurement: 'grams', quantity: 40 },
  {
    id: uuidv4(),
    label: 'Salt and pepper to taste',
    measurement: 'grams',
    quantity: 40,
  },
  {
    id: uuidv4(),
    label: 'Ground pork or tofu',
    measurement: 'grams',
    quantity: 40,
  },
  {
    id: uuidv4(),
    label: 'Garlic and ginger, minced',
    measurement: 'pieces',
    quantity: 40,
  },
  { id: uuidv4(), label: 'Green onions', measurement: 'piece', quantity: 40 },
  { id: uuidv4(), label: 'Soy sauce', measurement: 'ml.', quantity: 40 },
  { id: uuidv4(), label: 'Sesame oil', measurement: 'ml.', quantity: 40 },
  { id: uuidv4(), label: 'Sugar', measurement: 'grams', quantity: 40 },
  { id: uuidv4(), label: 'Sugar', measurement: 'grams', quantity: 40 },
]

const scrollbarClasses = [
  'scrollbar-track-transparent',
  'scrollbar-thumb-black-hover/50 scrollbar-thumb-rounded-md',
  'scrollbar-w-1 scrollbar',
]

const BlogPostSidebar = () => {
  const TWO = 2

  return (
    <div
      className={clsx(
        'sticky right-0 top-0 h-full w-80 border-l-2 border-black-default bg-yellow-dark',
        'flex shrink-0 flex-col',
      )}
    >
      <div className="relative aspect-video min-h-56 w-full border-b-2 border-black-default">
        <div className="relative z-10 flex items-center justify-end gap-2 p-2">
          <Tag type="info">
            {formatNumberToSmall(1)}
            <Eye size={16} />
          </Tag>
          <Tag type="info">
            {formatNumberToSmall(1)}
            <Heart size={16} />
          </Tag>
        </div>
        <Image
          src="/images/fridge-placeholder.webp"
          fill
          sizes="100vw"
          alt=""
          className="pointer-events-none object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 border-b-2 border-black-default p-4 pb-2">
        <Tag
          type="info"
          className="border-2 border-black-default bg-yellow-regular shadow-brutalism"
        >
          <Clock size={16} />
          30 min
        </Tag>
        <Heading as="h2" type="headline">
          Ingredients:
        </Heading>
      </div>
      <div
        className={clsx(
          'grid grid-cols-2 flex-wrap gap-3 overflow-auto p-3',
          scrollbarClasses,
        )}
      >
        {PLACEHOLDER.map((item: any) => (
          <IngredientCard
            key={item.id}
            label={item.label}
            iconSrc="/images/cards/appliances/grill.webp"
            measurement={item.measurement}
            quantity={item.quantity}
            className={clsx(
              PLACEHOLDER.length % TWO !== 0 && 'last:col-span-2',
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default BlogPostSidebar
