'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { Plus } from 'react-feather'
import { SCROLLBAR_CLASSES } from '@/constants/styles'
import { Ingredient } from '@/types/recipes'
import Button from '@/components/shared/Button'
import IngredientCard from '@/components/shared/IngredientCard'
import Modal from '@/components/shared/Modal'
import SelectionCard from '@/components/shared/SelectionCard'
import Heading from '@/components/shared/typography/Heading'
import { RecipeStep } from '../BlogPost'
import Tag from '../Tag'

type StepIngredientsProps = {
  step: RecipeStep
  ingredientsFormData: Array<Ingredient>
  ingredients: Array<Ingredient>
  onIngredientSelect: (item: Ingredient) => void
  onDeleteIngredient: (id: string) => void
}

const TWO = 2

const StepIngredients = ({
  step,
  ingredientsFormData,
  ingredients,
  onIngredientSelect,
  onDeleteIngredient,
}: StepIngredientsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        className={clsx(
          'rounded-2xl border-2 border-black-default bg-tones-lavender p-4',
          'mb-6 shadow-brutalism',
        )}
      >
        <div className="mb-4 flex items-center justify-between">
          <Heading as="h2" type="headline">
            Ingredients:
          </Heading>
          <Button
            appearence="yellow"
            size="S"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus />
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {step.ingredients.map((item) => (
            <IngredientCard
              key={item._id}
              label={item.label}
              iconSrc="/images/cards/appliances/grill.webp"
              measurement={item.measurement}
              quantity={item.quantity}
              className={clsx(
                step.ingredients.length % TWO !== 0 && 'last:col-span-2',
              )}
              onDelete={() => onDeleteIngredient(step._id)}
            />
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
        className="max-h-800 w-full p-6 sm:max-w-screen-md"
      >
        <div className="h-full">
          <Heading as="h3" type="headline" className="h-fit">
            Choose ingredients
          </Heading>
          <div
            className={clsx(
              'grid h-fit grid-cols-3 gap-4 overflow-y-auto p-2',
              SCROLLBAR_CLASSES,
            )}
          >
            {ingredients.map((item) => (
              <SelectionCard
                key={item._id}
                label={item.label}
                imgSrc={item.iconSrc}
                isSelected={ingredientsFormData.some(
                  (ingr) => ingr._id === item._id,
                )}
                onChange={() => onIngredientSelect(item)}
                decorator={<Tag type="info">{item.measurement}</Tag>}
              />
            ))}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default StepIngredients
