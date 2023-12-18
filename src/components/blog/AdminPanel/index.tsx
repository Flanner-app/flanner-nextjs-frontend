'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BlogFilterType, blogFilters } from '@/constants/blog'
import { validMimeTypes } from '@/constants/file'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import { Ingredient, NutritionTable } from '@/components/shared/types/recipes'
import Heading from '@/components/shared/typography/Heading'
import CookingSteps from './CookingSteps'
import IngredientsSection from './IngredientsSection'
import FilterTag from '../BlogFilters/FilterTag'
import { BlogPost, RecipeStep } from '../BlogPost'

const DEFAULT_FORM_DATA: BlogPost = {
  title: '',
  coverSrc: '',
  numberOfLikes: 0,
  numberOfViews: 0,
  tags: [],
  totalCookingTime: '',
  servings: 0,
  nutritionalInfo: {
    servingSize: 0,
    servedIn: '',
    calories: 0,
    macros: {
      totalFat: {
        label: 'Total Fat',
        quantity: 0,
        measuredIn: 'grams',
        dailyRecommended: 65,
      },
      saturatedFat: {
        label: 'Saturated Fat',
        quantity: 0,
        measuredIn: 'grams',
        dailyRecommended: 20,
      },
      transFat: {
        label: 'Trans',
        quantity: 0,
        measuredIn: 'grams',
        dailyRecommended: 1,
      },
      cholesterol: {
        label: 'Cholesterol',
        quantity: 0,
        measuredIn: 'mg',
        dailyRecommended: 300,
      },
      sodium: {
        label: 'Sodium',
        quantity: 0,
        measuredIn: 'mg',
        dailyRecommended: 2300,
      },
      totalCarbs: {
        label: 'Total Carbs',
        quantity: 0,
        measuredIn: 'grams',
        dailyRecommended: 130,
      },
      fibers: {
        label: 'Fibers',
        quantity: 0,
        measuredIn: 'grams',
        dailyRecommended: 30,
      },
      totalSugars: {
        label: 'Total Sugars',
        quantity: 0,
        measuredIn: 'grams',
        dailyRecommended: 34,
      },
      addedSugars: {
        label: 'Added Sugars',
        quantity: 0,
        measuredIn: 'grams',
        dailyRecommended: 34,
      },
      protein: {
        label: 'Protein',
        quantity: 0,
        measuredIn: 'grams',
        dailyRecommended: 50,
      },
    },
    micros: {
      vitaminA: {
        label: 'Vitamin A',
        quantity: 0,
        measuredIn: 'mcg',
        dailyRecommended: 700,
      },
      vitaminC: {
        label: 'Vitamin C',
        quantity: 0,
        measuredIn: 'mg',
        dailyRecommended: 75,
      },
      vitaminD: {
        label: 'Vitamin D',
        quantity: 0,
        measuredIn: 'IU',
        dailyRecommended: 600,
      },
      vitaminE: {
        label: 'Vitamin E',
        quantity: 0,
        measuredIn: 'mg',
        dailyRecommended: 15,
      },
      vitaminK: {
        label: 'Vitamin K',
        quantity: 0,
        measuredIn: 'mcg',
        dailyRecommended: 105,
      },
      thiamin: {
        label: 'Thiamin',
        quantity: 0,
        measuredIn: 'mg',
        dailyRecommended: 1.2,
      },
      riboflavin: {
        label: 'Riboflavin',
        quantity: 0,
        measuredIn: 'mg',
        dailyRecommended: 1.2,
      },
      niacin: {
        label: 'Niacin',
        quantity: 0,
        measuredIn: 'mg',
        dailyRecommended: 15,
      },
      vitaminB6: {
        label: 'Vitamin B6',
        quantity: 0,
        measuredIn: 'mg',
        dailyRecommended: 1.5,
      },
      folate: {
        label: 'Folate',
        quantity: 0,
        measuredIn: 'mcg',
        dailyRecommended: 400,
      },
      vitaminB12: {
        label: 'Vitamin B12',
        quantity: 0,
        measuredIn: 'mcg',
        dailyRecommended: 2.4,
      },
      pantothenicAcid: {
        label: 'Pantothenic Acid',
        quantity: 0,
        measuredIn: 'mg',
        dailyRecommended: 5,
      },
      calcium: {
        label: 'Calcium',
        quantity: 0,
        measuredIn: 'mg',
        dailyRecommended: 1100,
      },
      iron: {
        label: 'Iron',
        quantity: 0,
        measuredIn: 'mg',
        dailyRecommended: 8,
      },
      magnesium: {
        label: 'Magnesium',
        quantity: 0,
        measuredIn: 'mg',
        dailyRecommended: 400,
      },
      phosphorus: {
        label: 'Phosphorus',
        quantity: 0,
        measuredIn: 'mg',
        dailyRecommended: 700,
      },
      potassium: {
        label: 'Potassium',
        quantity: 0,
        measuredIn: 'mg',
        dailyRecommended: 2500,
      },
      zinc: {
        label: 'Zinc',
        quantity: 0,
        measuredIn: 'mg',
        dailyRecommended: 11,
      },
      copper: {
        label: 'Copper',
        quantity: 0,
        measuredIn: 'mg',
        dailyRecommended: 900,
      },
      manganese: {
        label: 'Manganese',
        quantity: 0,
        measuredIn: 'mg',
        dailyRecommended: 2.3,
      },
      selenium: {
        label: 'Selenium',
        quantity: 0,
        measuredIn: 'mcg',
        dailyRecommended: 55,
      },
    },
  },
  ingredients: [],
  prerequisites: '',
  finishingText: '',
  steps: [],
}

const AdminPanel = () => {
  const [formData, setFormData] = useState<BlogPost>(DEFAULT_FORM_DATA)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const toggleTags = (tag: BlogFilterType) => {
    let newTags: BlogFilterType[]

    if (formData.tags.includes(tag)) {
      newTags = [...formData.tags].filter(
        (item) => item !== tag,
      ) as BlogFilterType[]
    } else {
      newTags = [...formData.tags, tag] as BlogFilterType[]
    }

    setFormData((prevState) => ({ ...prevState, tags: newTags }))
  }

  const updateMacroQuantity = (
    macroKey: keyof NutritionTable['macros'],
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      nutritionalInfo: {
        ...prev.nutritionalInfo,
        macros: {
          ...prev.nutritionalInfo.macros,
          [macroKey]: {
            ...prev.nutritionalInfo.macros[macroKey],
            quantity: parseFloat(value) || 0,
          },
        },
      },
    }))
  }

  const updateMicroQuantity = (
    microKey: keyof NutritionTable['micros'],
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      nutritionalInfo: {
        ...prev.nutritionalInfo,
        micros: {
          ...prev.nutritionalInfo.micros,
          [microKey]: {
            ...prev.nutritionalInfo.micros[microKey],
            quantity: parseFloat(value) || 0,
          },
        },
      },
    }))
  }

  const onAddIngredients = (ingredients: Array<Ingredient>) => {
    setFormData((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, ...ingredients],
    }))
  }

  const onIngredientSelect = (ingredient: Ingredient) => {
    let newIngredients: Array<Ingredient> = []
    if (
      formData.ingredients.some(
        (item: Ingredient) => item._id === ingredient._id,
      )
    ) {
      newIngredients = formData.ingredients.filter(
        (item: Ingredient) => item._id !== ingredient._id,
      )
    } else {
      newIngredients = [...formData.ingredients, ingredient]
    }
    setFormData((prev) => ({ ...prev, ingredients: newIngredients }))
  }

  const onAddStep = () => {
    setFormData((prev) => ({
      ...prev,
      steps: [
        ...prev.steps,
        {
          _id: uuidv4(),
          title: '',
          ingredients: [],
          imgSrc: '',
          text: '',
        },
      ],
    }))
  }

  const onDeleteStep = (id: string) => {
    const newSteps = formData.steps.filter((item) => item._id !== id)
    setFormData((prev) => ({
      ...prev,
      steps: newSteps,
    }))
  }

  const onStepEdit = (
    id: string,
    field: keyof RecipeStep,
    value: RecipeStep[typeof field],
  ) => {
    const data = formData.steps.map((item) => {
      if (item._id === id) {
        return {
          ...item,
          [field]: value,
        }
      }
      return item
    })
    setFormData((prev) => ({
      ...prev,
      steps: data,
    }))
  }

  const onCoverUpload = async (file: File | undefined) => {
    if (file) {
      const fileFormData = new FormData()
      fileFormData.append('file', file)

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blogPost/cover`,
          {
            method: 'POST',
            body: fileFormData,
          },
        ).then((response) => response.json())

        setFormData((prev) => ({
          ...prev,
          coverSrc: res.coverSrc,
        }))
      } catch (err) {
        console.log(err)
      }
    }
  }

  const onIconDelete = async () => {
    const [, filename] = formData.coverSrc.split('/media/')

    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/ingredients/icon/${filename}`,
        {
          method: 'DELETE',
        },
      )
      setFormData((prev) => ({
        ...prev,
        coverSrc: '',
      }))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="p-6">
      <div
        className={clsx(
          'aspect-video w-full max-w-6xl overflow-hidden rounded-xl',
          'relative mx-auto mb-4 bg-black-default/20',
        )}
      >
        {formData.coverSrc && (
          <Image fill src={formData.coverSrc} className="object-cover" alt="" />
        )}
      </div>
      <input
        type="file"
        className="invisible absolute z-10 h-0 w-0"
        accept={validMimeTypes.join(', ')}
        ref={fileInputRef}
        onChange={(e) => {
          onCoverUpload(e.target.files?.[0])
          e.target.files = null
        }}
      />
      <Button
        size="M"
        appearence="yellow"
        wrapperClassName="w-40"
        onClick={() => {
          if (formData.coverSrc) {
            onIconDelete()
          } else {
            fileInputRef.current?.click()
          }
        }}
      >
        {formData.coverSrc ? 'Remove cover' : 'Upload image'}
      </Button>

      <IngredientsSection
        ingredientsList={formData.ingredients}
        onItemSelect={onIngredientSelect}
        onAddIngredients={onAddIngredients}
      />

      <div className="mt-10">
        <Input
          label="Title"
          placeholder="Wine mushrooms. . ."
          value={formData.title}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }}
          wrapperClassName="w-full"
        />
        <div className="flex items-center gap-4 pt-4">
          <Input
            label="Cooking Time"
            placeholder="30 min"
            value={formData.totalCookingTime}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                totalCookingTime: e.target.value,
              }))
            }}
            wrapperClassName="w-full"
          />
          <Input
            label="Servings"
            type="number"
            placeholder="8"
            value={formData.servings.toString()}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                servings: parseFloat(e.target.value) || 0,
              }))
            }}
            wrapperClassName="w-full"
          />
        </div>

        <div className="flex items-center gap-4">
          <Input
            label="Prerequisites"
            placeholder="Very tasty, bla bla"
            rows={10}
            value={formData.prerequisites}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                prerequisites: e.target.value,
              }))
            }}
            wrapperClassName="w-full mt-4"
          />
          <Input
            label="Finishing Text"
            placeholder="Tasty, bye bye"
            rows={10}
            value={formData.finishingText}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                finishingText: e.target.value,
              }))
            }}
            wrapperClassName="w-full mt-4"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {blogFilters.map((item) => (
            <FilterTag
              key={item}
              onClick={() => toggleTags(item)}
              isActive={formData.tags.includes(item)}
            >
              {item}
            </FilterTag>
          ))}
        </div>

        <CookingSteps
          ingredients={formData.ingredients}
          onAddStep={onAddStep}
          onDeleteStep={onDeleteStep}
          onStepEdit={onStepEdit}
        />

        <Input
          label="Calories"
          placeholder="0"
          type="number"
          wrapperClassName="w-64 mt-6"
          value={formData.nutritionalInfo.calories.toString()}
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              nutritionalInfo: {
                ...prev.nutritionalInfo,
                calories: parseFloat(e.target.value) || 0,
              },
            }))
          }}
        />
        <Heading type="headline" as="h2" className="mt-10">
          Macros
        </Heading>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {Object.entries(formData.nutritionalInfo.macros).map(
            ([key, macro]) => (
              <Input
                key={macro.label}
                label={macro.label}
                placeholder="0"
                type="number"
                wrapperClassName="w-64"
                value={formData.nutritionalInfo.macros[
                  key as keyof NutritionTable['macros']
                ].quantity.toString()}
                onChange={(e) =>
                  updateMacroQuantity(
                    key as keyof NutritionTable['macros'],
                    e.target.value,
                  )
                }
              />
            ),
          )}
        </div>

        <Heading type="headline" as="h2" className="mt-10">
          Micros
        </Heading>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {Object.entries(formData.nutritionalInfo.micros).map(
            ([key, micro]) => (
              <Input
                key={micro.label}
                label={micro.label}
                placeholder="0"
                type="number"
                wrapperClassName="w-64"
                value={
                  formData.nutritionalInfo.micros[
                    key as keyof NutritionTable['micros']
                  ]?.quantity.toString() || ''
                }
                onChange={(e) =>
                  updateMicroQuantity(
                    key as keyof NutritionTable['micros'],
                    e.target.value,
                  )
                }
              />
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminPanel