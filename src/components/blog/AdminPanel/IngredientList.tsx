'use client'

import clsx from 'clsx'
import { useCallback, useState } from 'react'
import { Search } from 'react-feather'
import { SCROLLBAR_CLASSES } from '@/constants/styles'
import { Ingredient } from '@/types/recipes'
import Input from '@/components/shared/Input'
import SelectionCard from '@/components/shared/SelectionCard'
import Button from '@/components/shared/buttons/Button'
import Tag from '../Tag'

type IngredientListProps = {
  ingredients: Array<Ingredient>
  onItemSelect: (ingredient: Ingredient) => void
  onAddNewItem: () => void
}

const IngredientList = ({
  ingredients,
  onItemSelect,
  onAddNewItem,
}: IngredientListProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [ingredientsDataSet, setIngredientsDataSet] = useState<
    Array<Ingredient>
  >([])

  const fetchIngredients = useCallback(async () => {
    return await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/ingredients/${searchQuery}`,
    ).then((result) => result.json())
  }, [searchQuery])

  const searchForIngredients = async () => {
    try {
      const res = await fetchIngredients()
      if (res.data) {
        setIngredientsDataSet(res.data)
      } else {
        onAddNewItem()
      }
    } catch (err) {
      console.log(err)
    }
  }

  // useEffect(() => {
  //   if (!ingredientsDataSet.length && !searchQuery) {
  //     fetchIngredients()
  //   }
  // }, [ingredientsDataSet, fetchIngredients, searchQuery])

  return (
    <>
      <div className="mb-4 mt-6 flex items-end justify-between gap-4">
        <Input
          label="Search"
          placeholder="Carrots"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          wrapperClassName="w-full mb-1"
        />
        <Button
          containsIconOnly
          appearence="yellow"
          size="M"
          disabled={searchQuery.length === 0}
          onClick={searchForIngredients}
        >
          <Search />
        </Button>
      </div>
      {ingredientsDataSet.length !== 0 && (
        <div
          className={clsx(
            'grid h-fit grid-cols-3 gap-4 overflow-y-auto p-2',
            SCROLLBAR_CLASSES,
          )}
        >
          {ingredientsDataSet.map((item) => (
            <SelectionCard
              key={item._id}
              label={item.label}
              imgSrc={item.iconSrc}
              isSelected={ingredients.some((ingr) => ingr._id === item._id)}
              onChange={() => onItemSelect(item)}
              decorator={<Tag type="info">{item.measurement}</Tag>}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default IngredientList
