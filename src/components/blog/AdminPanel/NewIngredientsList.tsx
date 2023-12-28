import clsx from 'clsx'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { Plus, Trash, X } from 'react-feather'
import { validMimeTypes } from '@/constants/file'
import { MEASUREMENTS } from '@/constants/recipe'
import { SCROLLBAR_CLASSES } from '@/constants/styles'
import { Ingredient } from '@/types/recipes'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import Select from '@/components/shared/Select'

type NewIngredientsListProps = {
  items: Array<Ingredient>
  setItems: Dispatch<SetStateAction<Array<Ingredient>>>
}

const NewIngredientsList = ({ items, setItems }: NewIngredientsListProps) => {
  const editItem = (
    index: number,
    property: keyof Ingredient,
    value: string | number,
  ) => {
    const updatedItems = [...items]
    let editedItem

    if (property === 'quantity') {
      editedItem = {
        ...updatedItems[index],
        [property]: parseFloat(value.toString()) || 0,
      }
    } else {
      editedItem = {
        ...updatedItems[index],
        [property]: value,
      }
    }
    updatedItems[index] = editedItem
    setItems(updatedItems)
  }

  const onItemDelete = (id: string) => {
    const newItems = items.filter((item) => item._id !== id)
    setItems(newItems)
  }

  const onIconUpload = async (file: File | undefined, index: number) => {
    if (file) {
      const formData = new FormData()
      formData.append('file', file)

      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/media`, {
        method: 'POST',
        body: formData,
      })
        .then((result) => result.json())
        .then((icon) => editItem(index, 'iconSrc', icon.src))
        .catch((err) => console.log(err))
    }
  }

  const onIconDelete = async (index: number, src: string) => {
    const [, filename] = src.split('/media/')

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/media/${filename}`, {
      method: 'DELETE',
    })
      .then(() => editItem(index, 'iconSrc', ''))
      .catch((err) => console.log(err))
  }

  return (
    <div
      className={clsx(
        'mt-6 flex h-fit flex-col overflow-y-auto pr-2',
        SCROLLBAR_CLASSES,
      )}
    >
      {items.map((ingredient, i) => (
        <div
          className="mb-4 flex h-fit items-end gap-2 sm:mb-2"
          key={ingredient._id}
        >
          {ingredient.iconSrc ? (
            <div className="relative mb-1.5 h-12 w-12 shrink-0 rounded-xl">
              <div className="absolute right-0 top-0 z-10">
                <div
                  className={clsx(
                    'cursor-pointer rounded-full p-1 transition-colors',
                    'hover:bg-white',
                  )}
                  onClick={() => onIconDelete(i, ingredient.iconSrc)}
                >
                  <X size={12} />
                </div>
              </div>

              <Image
                src={ingredient.iconSrc}
                fill
                sizes="80px"
                alt=""
                className="z-[5] object-contain"
              />
            </div>
          ) : (
            <label
              className={clsx(
                'bg-transparent text-black-regular hover:bg-black-hover',
                'rounded-xl border-2 border-transparent',
                'hover:text-white active:bg-black-regular active:text-white',
                'flex h-fit items-center justify-center transition-colors',
                'mb-1 cursor-pointer p-2.5',
              )}
            >
              <input
                type="file"
                className="invisible h-0 w-0"
                accept={validMimeTypes.join(', ')}
                onChange={(e) => {
                  onIconUpload(e.target.files?.[0], i)
                  e.target.files = null
                }}
              />
              <Plus />
            </label>
          )}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Input
              label="Label"
              placeholder="Reddish"
              value={ingredient.label}
              onChange={(e) => editItem(i, 'label', e.target.value)}
            />
            <Select
              name="Measurement select"
              label="Measure in"
              value={ingredient.measurement}
              valueList={MEASUREMENTS}
              onChange={(value) => editItem(i, 'measurement', value)}
            />
            <Input
              label="Quantity"
              placeholder="15"
              type="number"
              value={ingredient.quantity.toString()}
              onChange={(e) => editItem(i, 'quantity', e.target.value)}
            />
          </div>
          <Button
            containsIconOnly
            appearence="ghost"
            size="S"
            wrapperClassName="mb-1"
            onClick={() => onItemDelete(ingredient._id)}
          >
            <Trash />
          </Button>
        </div>
      ))}
      {items.length === 0 && (
        <span className="text-center text-10xl font-bold">
          Add something...
        </span>
      )}
    </div>
  )
}

export default NewIngredientsList
