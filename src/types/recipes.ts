import { MeasurementUnits } from './groceries'

export type Nutrient = {
  label: string
  quantity: number
  measuredIn: 'mcg' | 'mg' | 'IU' | 'grams'
  dailyRecommended: number
}

export type NutritionTable = {
  servingSize: string | number
  servedIn: string
  calories: number
  macros: {
    totalFat: Nutrient
    saturatedFat: Nutrient
    transFat: Nutrient
    cholesterol: Nutrient
    sodium: Nutrient
    totalCarbs: Nutrient
    fibers: Nutrient
    totalSugars: Nutrient
    addedSugars: Nutrient
    protein: Nutrient
  }
  micros: {
    vitaminA?: Nutrient
    vitaminC?: Nutrient
    vitaminD?: Nutrient
    vitaminE?: Nutrient
    vitaminK?: Nutrient
    thiamin?: Nutrient
    riboflavin?: Nutrient
    niacin?: Nutrient
    vitaminB6?: Nutrient
    folate?: Nutrient
    vitaminB12?: Nutrient
    pantothenicAcid?: Nutrient
    calcium?: Nutrient
    iron?: Nutrient
    magnesium?: Nutrient
    phosphorus?: Nutrient
    potassium?: Nutrient
    zinc?: Nutrient
    copper?: Nutrient
    manganese?: Nutrient
    selenium?: Nutrient
  }
}

export type Ingredient = {
  _id: string
  label: string
  measurement: MeasurementUnits
  quantity: number
  iconSrc: string
}

export type Tag = {
  _id: string
  label:
    | 'Beginner'
    | 'Intermediate'
    | 'Advanced'
    | 'Breakfast'
    | 'Lunch'
    | 'Dinner'
    | 'Snacks'
    | 'Dessert'
    | 'One-Pot'
    | 'Spicy'
    | 'Summer'
    | 'Fall'
    | 'Winter'
    | 'Spring'
    | 'Comfort Food'
    | 'Healthy'
    | 'Party'
    | 'Holiday'
    | 'Quick and Easy'
    | 'Vegeterian'
    | 'Vegan'
    | 'Gluten-Free'
    | 'Grilled'
    | 'Baked'
    | 'Fried'
    | 'Steamed'
    | 'Slow Cooked'
    | 'Asian'
    | 'Italian'
    | 'Mexican'
}

export type RecipeStep = {
  _id: string
  title: string
  ingredients: Array<Ingredient>
  imgSrc: string
  text: string
}

export type BlogPost = {
  _id: string
  title: string
  coverSrc: string
  numberOfLikes?: number
  numberOfViews?: number
  tags: Array<Tag>
  totalCookingTime: string
  servings: number
  nutritionalInfo: NutritionTable
  ingredients: Array<Ingredient>
  prerequisites: string
  finishingText: string
  steps: Array<RecipeStep>
}
