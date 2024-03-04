'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { Plus, Star } from 'react-feather'
import { v4 as uuidv4 } from 'uuid'
import { Ingredient } from '@/types/recipes'
import IngredientCard from '@/components/shared/IngredientCard'
import Modal from '@/components/shared/Modal'
import Button from '@/components/shared/buttons/Button'
import Heading from '@/components/shared/typography/Heading'
import IngredientList from './IngredientList'
import NewIngredientsList from './NewIngredientsList'

type IngredientsSectionProps = {
  ingredientsList: Array<Ingredient>
  onItemSelect: (ingredient: Ingredient) => void
  onAddIngredients: (ingredients: Array<Ingredient>) => void
  onDeleteIngredient: (id: string) => void
}

const IngredientsSection = ({
  ingredientsList,
  onItemSelect,
  onAddIngredients,
  onDeleteIngredient,
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

  const onSave = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/ingredients/create`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(items),
        },
      ).then((ingr) => ingr.json())
      onAddIngredients(res.data)
      setIsModalOpen(false)
      setItems([])
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div
        className={clsx(
          'min-h-80 rounded-lg border-2 border-black-default p-2 shadow-brutalism',
          'mb-4 bg-tones-lavender',
          { 'flex items-center justify-center': ingredientsList.length === 0 },
        )}
      >
        <Modal
          isOpen={isModalOpen}
          close={() => setIsModalOpen(false)}
          className="max-h-800 w-full p-6 sm:max-w-screen-md"
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
                onClick={onSave}
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
          <div className="p-2 text-center font-rubik text-xl font-bold sm:text-6xl">
            No Ingredients selected
          </div>
        )}
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {ingredientsList.map((item) => (
            <IngredientCard
              key={item._id}
              label={item.label}
              measurement={item.measurement}
              quantity={item.quantity}
              iconSrc={item.iconSrc}
              onDelete={() => onDeleteIngredient(item._id)}
            />
          ))}
        </div>
      </div>

      <Button
        size="M"
        appearence="yellow"
        onClick={() => setIsModalOpen(true)}
        wrapperClassName="w-40"
      >
        Add ingredients
      </Button>
    </>
  )
}

export default IngredientsSection
