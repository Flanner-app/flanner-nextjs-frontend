'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { Plus, Star } from 'react-feather'
import { v4 as uuidv4 } from 'uuid'
import Button from '@/components/shared/Button'
import IngredientCard from '@/components/shared/IngredientCard'
import Modal from '@/components/shared/Modal'
import { Ingredient } from '@/components/shared/types/recipes'
import Heading from '@/components/shared/typography/Heading'
import IngredientList from './IngredientList'
import NewIngredientsList from './NewIngredientsList'

type IngredientsSectionProps = {
  ingredientsList: Array<Ingredient>
  onItemSelect: (ingredient: Ingredient) => void
  onAddIngredients: (ingredients: Array<Ingredient>) => void
}

const IngredientsSection = ({
  ingredientsList,
  onItemSelect,
  onAddIngredients,
}: IngredientsSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [items, setItems] = useState<Ingredient[]>([])
  const [showNew, setShowNew] = useState(false)

  const onAddItem = () => {
    setShowNew(true)
    setItems((prevState) => [
      ...prevState,
      {
        _id: uuidv4(),
        label: '',
        iconSrc: '',
        measurement: 'items',
        quantity: 1,
      },
    ])
  }

  return (
    <div className="my-10">
      <div
        className={clsx(
          'min-h-80 rounded-lg border-2 border-black-default p-2 shadow-brutalism',
          'mb-4 flex flex-wrap items-center gap-2 bg-tones-lavender',
        )}
      >
        <Modal
          isOpen={isModalOpen}
          close={() => setIsModalOpen(false)}
          className="max-h-[800px] w-full p-6 sm:max-w-screen-md"
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-2">
              <Heading as="h3" type="headline" className="h-fit">
                Choose ingredients
              </Heading>
              <Button
                containsIconOnly
                appearence={showNew ? 'yellow' : 'black'}
                size="S"
                onClick={() => setShowNew((prev) => !prev)}
                wrapperClassName="w-fit"
              >
                <Star />
              </Button>
            </div>
            {!showNew && (
              <IngredientList
                ingredients={ingredientsList}
                onItemSelect={onItemSelect}
                onAddNewItem={onAddItem}
              />
            )}
            {showNew && (
              <NewIngredientsList items={items} setItems={setItems} />
            )}
            <div className="flex items-center gap-4 pt-4">
              <Button
                appearence="black"
                size="M"
                wrapperClassName="w-full"
                onClick={() => {
                  onAddItem()
                  setShowNew(true)
                }}
              >
                <Plus /> Add Ingredient
              </Button>
              <Button
                appearence="yellow"
                size="M"
                wrapperClassName="w-full"
                onClick={() => {
                  onAddIngredients(items)
                  setIsModalOpen(false)
                  setItems([])
                }}
                disabled={
                  items.length === 0 ||
                  items.some(
                    (item) => !item.label || !item.iconSrc || !item.quantity,
                  )
                }
              >
                Save
              </Button>
            </div>
          </div>
        </Modal>
        {ingredientsList.length === 0 && (
          <span className="mx-auto block text-center font-rubik text-6xl font-bold">
            No Ingredients selected
          </span>
        )}
        {ingredientsList.map((item) => (
          <IngredientCard
            key={item._id}
            label={item.label}
            measurement={item.measurement}
            quantity={item.quantity}
            iconSrc={item.iconSrc}
          />
        ))}
      </div>

      <Button
        size="M"
        appearence="yellow"
        onClick={() => setIsModalOpen(true)}
        wrapperClassName="w-40"
      >
        Add ingredients
      </Button>
    </div>
  )
}

export default IngredientsSection
