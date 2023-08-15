import clsx from 'clsx'
import Heading from '../shared/typography/Heading'
import Fridge from './Fridge'

const FridgeSidebar = () => {
  return (
    <div
      className={clsx(
        'h-full border-l border-black-regular p-4 shadow-sm',
        'flex w-full flex-col gap-4 bg-yellow-dark lg:max-w-md',
        'md:max-w-80',
      )}
    >
      <div className="flex items-baseline gap-3">
        <Heading as="h2" type="display">
          Fridge
        </Heading>
        <span className="text-sm text-black-hover">12 Items</span>
      </div>
      <Fridge />
    </div>
  )
}

export default FridgeSidebar
