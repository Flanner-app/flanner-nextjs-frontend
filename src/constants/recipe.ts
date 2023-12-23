import { MeasurementUnits } from '@/types/groceries'
import { Ingredient, NutritionTable } from '@/types/recipes'
import { RecipeStep } from '@/components/blog/BlogPost'

export const MEASUREMENTS: Array<MeasurementUnits> = [
  'grams',
  'kg',
  'tblsp',
  'cup',
  'ml',
  'pieces',
  'items',
]

export type BlogPost = {
  title: string
  coverSrc: string
  numberOfLikes?: number
  numberOfViews?: number
  tags: Array<string>
  totalCookingTime: string
  servings: number
  nutritionalInfo: NutritionTable
  ingredients: Array<Ingredient>
  prerequisites: string
  finishingText: string
  steps: Array<RecipeStep>
}
