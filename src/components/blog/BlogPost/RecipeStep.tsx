import clsx from 'clsx'
import Image from 'next/image'
import { RecipeStep } from '@/types/recipes'
import RecipeStepNumber from './RecipeStepNumber'
import IngredientCard from '../../shared/IngredientCard'
import Heading from '../../shared/typography/Heading'

type RecipeStepProps = {
  step: RecipeStep
  index: number
}

const RecipeStep = ({ step, index }: RecipeStepProps) => {
  return (
    <div className="mb-16">
      <div className="mb-6 flex items-center gap-4">
        <RecipeStepNumber number={index + 1} className="shrink-0" />
        <Heading as="h3" type="headline">
          {step.title}
        </Heading>
      </div>
      <div
        className={clsx(
          'relative aspect-video rounded-2xl border-2 border-black-default',
          'mb-4 overflow-hidden shadow-brutalism',
        )}
      >
        <Image
          fill
          src={step.imgSrc}
          sizes="1280px"
          className="object-cover"
          alt={step.title}
        />
      </div>
      {step.ingredients.length && (
        <div
          className={clsx(
            'mb-4 grid grid-cols-2 gap-2 rounded-xl border-2 border-black-default',
            'bg-tones-lavender p-2 shadow-brutalism sm:grid-cols-3 md:grid-cols-4',
            'lg:grid-cols-5',
          )}
        >
          {step.ingredients.map((ingredient) => (
            <IngredientCard
              key={ingredient._id}
              label={ingredient.label}
              iconSrc="/images/cards/appliances/grill.webp"
              measurement={ingredient.measurement}
              quantity={ingredient.quantity}
            />
          ))}
        </div>
      )}
      <p className="text-lg">{step.text}</p>
    </div>
  )
}

export default RecipeStep
