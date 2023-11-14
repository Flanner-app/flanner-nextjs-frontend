import clsx from 'clsx'
import {
  MicroNutrient,
  NutritionTable,
} from '@/components/shared/types/recipes'

type NutritionTableProps = {
  servings: number
} & NutritionTable

const NutritionalTable = ({
  servings,
  servingSize,
  servedIn,
  calories,
  totalFat,
  saturatedFat,
  transFat,
  cholesterol,
  sodium,
  totalCarbs,
  fibers,
  totalSugars,
  addedSugars,
  protein,
  micros,
}: NutritionTableProps) => {
  const getRecommended = (value: number, recommendedAmount: number | null) => {
    if (!recommendedAmount) return
    const percentage = (value / recommendedAmount) * 100
    return `${percentage}%`
  }

  return (
    <div
      className={clsx(
        'rounded-xl border-2 border-black-default p-4 shadow-brutalism',
        'bg-white font-rubik leading-none xl:max-w-xl',
      )}
    >
      <div className="mb-1 w-full border-b border-black-default pb-0.5">
        <h3 className="text-10xl font-extrabold">Nutrition Facts</h3>
      </div>
      <span className="font-poppins leading-normal">{servings} serving</span>
      <div className="flex items-center justify-between">
        <span className="font-extrabold leading-none">Serving size</span>
        <span className="font-extrabold leading-none">
          {servingSize} {servedIn}
        </span>
      </div>
      <div className="my-1 h-3 w-full bg-black-default" />

      <div className="flex items-end justify-between border-b-6 border-black-default">
        <div>
          <span className="block text-xs font-bold leading-normal">
            Amount per serving
          </span>
          <span className="block text-4xl font-extrabold">Calories</span>
        </div>

        <span className="font-poppins text-7xl font-extrabold">{calories}</span>
      </div>
      <div className="mb-1 border-b border-black-default text-right">
        <span className="text-xs font-medium leading-normal">
          % Daily Value*
        </span>
      </div>
      <table className="flex w-full flex-col gap-1 leading-normal">
        <tbody>
          <tr className="flex items-center justify-between border-b border-black-default">
            <td>
              <span className="mr-1.5 inline-block whitespace-nowrap font-bold">
                Total Fat
              </span>
              <span>{totalFat.quantity}g</span>
            </td>
            <td className="font-poppins font-bold">
              {getRecommended(totalFat.quantity, totalFat.dailyRecommended)}
            </td>
          </tr>
          <tr className="flex items-center justify-between border-b border-black-default">
            <td className="pl-6">
              <span className="mr-1.5 inline-block whitespace-nowrap">
                Saturated Fat
              </span>
              <span>{saturatedFat.quantity}g</span>
            </td>
            <td className="font-poppins font-bold">
              {getRecommended(
                saturatedFat.quantity,
                saturatedFat.dailyRecommended,
              )}
              %
            </td>
          </tr>
          <tr className="border-b border-black-default">
            <td className="pl-6">
              <span className="mr-1.5 inline-block whitespace-nowrap">
                <span className="italic">Trans</span> Fat
              </span>
              <span>{transFat.quantity}g</span>
            </td>
          </tr>
          <tr className="flex items-center justify-between border-b border-black-default">
            <td>
              <span className="mr-1.5 inline-block whitespace-nowrap font-bold">
                Cholesterol
              </span>
              <span>{cholesterol.quantity}mg</span>
            </td>
            <td className="font-poppins font-bold">
              {getRecommended(
                cholesterol.quantity,
                cholesterol.dailyRecommended,
              )}
            </td>
          </tr>
          <tr className="flex items-center justify-between border-b border-black-default">
            <td>
              <span className="mr-1.5 inline-block whitespace-nowrap  font-bold">
                Sodium
              </span>
              <span>{sodium.quantity}mg</span>
            </td>
            <td className="font-poppins font-bold">
              {getRecommended(sodium.quantity, sodium.dailyRecommended)}
            </td>
          </tr>
          <tr className="flex items-center justify-between border-b border-black-default">
            <td>
              <span className="mr-1.5 inline-block whitespace-nowrap font-bold">
                Total Carbohydrate
              </span>
              <span>{totalCarbs.quantity}g</span>
            </td>
            <td className="font-poppins font-bold">
              {getRecommended(totalCarbs.quantity, totalCarbs.dailyRecommended)}
            </td>
          </tr>
          <tr className="flex items-center justify-between border-b border-black-default">
            <td className="pl-6">
              <span className="mr-1.5 inline-block whitespace-nowrap">
                Dietary Fiber
              </span>
              <span>{fibers.quantity}g</span>
            </td>
            <td className="font-poppins font-bold">
              {getRecommended(fibers.quantity, fibers.dailyRecommended)}
            </td>
          </tr>
          <tr className="ml-6 block border-b border-black-default">
            <td>
              <span className="mr-1.5 inline-block whitespace-nowrap">
                Total Sugars
              </span>
              <span>{totalSugars.quantity}g</span>
            </td>
          </tr>
          <tr className="flex items-center justify-between border-b border-black-default">
            <td className="pl-10">
              <span className="mr-1.5 inline-block">
                Includes {addedSugars.quantity}g Added Sugars
              </span>
            </td>
            <td className="font-poppins font-bold">
              {getRecommended(
                addedSugars.quantity,
                addedSugars.dailyRecommended,
              )}
            </td>
          </tr>
          <tr className="block w-full border-b-12 border-black-default">
            <td>
              <span className="mr-1.5 inline-block whitespace-nowrap font-bold">
                Protein
              </span>
              <span>{protein.quantity}g</span>
            </td>
          </tr>

          {Object.values(micros).map((item: MicroNutrient) => (
            <tr
              key={item.label}
              className="flex items-center justify-between border-b border-black-default"
            >
              <td className="mr-1.5 inline-block whitespace-nowrap">
                <span className="pr-1">{item.label}</span>
                <span>
                  {item.quantity}
                  {item.measuredIn}
                </span>
              </td>
              {item.dailyRecommended && (
                <td className="font-poppins font-bold">
                  {getRecommended(item.quantity, item.dailyRecommended)}
                </td>
              )}
            </tr>
          ))}
          <tr className="mt-1 flex gap-1">
            <span className="leading-tight">*</span>
            <p className="font-poppins text-xs leading-tight">
              The daily value (DV) tells you how much a nutrient in a serving of
              food contributes to a daily diet. 2,000 calories a day is used for
              general nutrition advice.
            </p>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default NutritionalTable
