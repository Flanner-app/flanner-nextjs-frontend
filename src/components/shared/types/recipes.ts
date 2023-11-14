export type MicroNutrient = {
  label: string
  quantity: number
  measuredIn: 'mcg' | 'mg'
  dailyRecommended: number
}

type MacroNutrient = {
  quantity: number
  dailyRecommended: number | null
}

export type NutritionTable = {
  servingSize: string | number
  servedIn: string
  calories: number
  totalFat: MacroNutrient
  saturatedFat: MacroNutrient
  transFat: MacroNutrient
  cholesterol: MacroNutrient
  sodium: MacroNutrient
  totalCarbs: MacroNutrient
  fibers: MacroNutrient
  totalSugars: MacroNutrient
  addedSugars: MacroNutrient
  protein: MacroNutrient
  micros: {
    vitaminA?: MicroNutrient
    vitaminC?: MicroNutrient
    vitaminD?: MicroNutrient
    vitaminE?: MicroNutrient
    vitaminK?: MicroNutrient
    thiamin?: MicroNutrient
    riboflavin?: MicroNutrient
    niacin?: MicroNutrient
    vitaminB6?: MicroNutrient
    folate?: MicroNutrient
    vitaminB12?: MicroNutrient
    pantothenicAcid?: MicroNutrient
    calcium?: MicroNutrient
    iron?: MicroNutrient
    magnesium?: MicroNutrient
    phosphorus?: MicroNutrient
    potassium?: MicroNutrient
    zinc?: MicroNutrient
    copper?: MicroNutrient
    manganese?: MicroNutrient
    selenium?: MicroNutrient
  }
}
