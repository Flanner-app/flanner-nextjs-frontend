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
  id: string
  label: string
  measurement: MeasurementUnits
  quantity: number
  iconSrc: string
}
