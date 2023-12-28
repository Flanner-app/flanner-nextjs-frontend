'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { Trash, X } from 'react-feather'
import { validMimeTypes } from '@/constants/file'
import { Ingredient, RecipeStep as RecipeStepType } from '@/types/recipes'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import Heading from '@/components/shared/typography/Heading'
import StepIngredients from './StepIngredients'
import RecipeStepNumber from '../BlogPost/RecipeStepNumber'

type CookingStepsProps = {
  ingredients: Array<Ingredient>
  steps: Array<RecipeStepType>
  onAddStep: () => void
  onDeleteStep: (id: string) => void
  onStepEdit: (
    id: string,
    field: keyof RecipeStepType,
    value: RecipeStepType[typeof field],
  ) => void
  onDeleteIngredient: (id: string) => void
}

const CookingSteps = ({
  ingredients,
  steps,
  onAddStep,
  onDeleteStep,
  onStepEdit,
  onDeleteIngredient,
}: CookingStepsProps) => {
  const onCoverUpload = async (file: File | undefined, id: string) => {
    if (file) {
      const fileFormData = new FormData()
      fileFormData.append('file', file)

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/media`, {
          method: 'POST',
          body: fileFormData,
        }).then((response) => response.json())

        onStepEdit(id, 'imgSrc', res.src)
      } catch (err) {
        console.log(err)
      }
    }
  }

  const onIconDelete = async (src: string, id: string) => {
    const [, filename] = src.split('/media/')

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/media/${filename}`, {
        method: 'DELETE',
      })
      onStepEdit(id, 'imgSrc', '')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Heading type="headline" as="h2">
        Steps
      </Heading>

      {steps.map((step, i) => (
        <div className="mt-4 flex flex-col gap-4" key={step._id}>
          <div className="flex items-end gap-4">
            <RecipeStepNumber number={i + 1} />
            <Input
              label="Title"
              placeholder="Firstly, peel the garlic"
              value={step.title}
              onChange={(e) => onStepEdit(step._id, 'title', e.target.value)}
              wrapperClassName="w-full"
            />
            {i !== 0 && (
              <Button
                containsIconOnly
                appearence="black"
                size="M"
                onClick={() => onDeleteStep(step._id)}
              >
                <Trash />
              </Button>
            )}
          </div>
          <label
            className={clsx(
              'block aspect-video w-full max-w-6xl overflow-hidden rounded-xl',
              'relative mx-auto mb-4 bg-black-default/20',
              'transition-colors hover:bg-black-default/30',
              'flex items-center justify-center',
              !step.imgSrc && 'cursor-pointer',
            )}
          >
            {step.imgSrc ? (
              <>
                <Button
                  appearence="ghost"
                  size="S"
                  onClick={() => onIconDelete(step.imgSrc, step._id)}
                  wrapperClassName="absolute right-2 top-2 z-10"
                >
                  <X />
                </Button>

                <Image
                  src={step.imgSrc}
                  fill
                  sizes="1024px"
                  alt=""
                  className="z-[5] object-cover"
                />
              </>
            ) : (
              <>
                <span className="p-2 text-center font-rubik text-xl font-bold sm:text-6xl">
                  Add image (click me)
                </span>
                <input
                  type="file"
                  className="invisible absolute z-10 h-0 w-0"
                  accept={validMimeTypes.join(', ')}
                  onChange={(e) => {
                    onCoverUpload(e.target.files?.[0], step._id)
                    e.target.files = null
                  }}
                />
              </>
            )}
          </label>

          <StepIngredients
            step={step}
            ingredients={ingredients}
            ingredientsFormData={step.ingredients}
            onIngredientSelect={(ingredient) =>
              onStepEdit(step._id, 'ingredients', [ingredient])
            }
            onDeleteIngredient={onDeleteIngredient}
          />

          <Input
            label="Description"
            placeholder="Do this and that for that long"
            rows={10}
            value={step.text}
            onChange={(e) => onStepEdit(step._id, 'text', e.target.value)}
          />
        </div>
      ))}
      <Button
        appearence="yellow"
        size="M"
        wrapperClassName="w-fit mt-6"
        onClick={onAddStep}
      >
        Add step
      </Button>
    </>
  )
}

export default CookingSteps
