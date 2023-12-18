import clsx from 'clsx'

type RecipeStepProps = { number: number; className?: string }

const RecipeStepNumber = ({ number, className }: RecipeStepProps) => {
  return (
    <div
      className={clsx(
        'h-16 w-16 shrink-0 rounded-xl border-2 border-black-default',
        'flex items-center justify-center bg-white shadow-brutalism',
        className,
      )}
    >
      <span className="font-rubik text-6xl font-bold">{number}</span>
    </div>
  )
}

export default RecipeStepNumber
