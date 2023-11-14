import clsx from 'clsx'

type RecipeStepProps = { step: number; className?: string }

const RecipeStep = ({ step, className }: RecipeStepProps) => {
  return (
    <div
      className={clsx(
        'h-16 w-16 rounded-xl border-2 border-black-default',
        'flex items-center justify-center bg-white shadow-brutalism',
        className,
      )}
    >
      <span className="font-rubik text-6xl font-bold">{step}</span>
    </div>
  )
}

export default RecipeStep
