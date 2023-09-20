import clsx from 'clsx'
import Image from 'next/image'
import { Check } from 'react-feather'

type SelectionCardProps = {
  label: string
  imgSrc: string
  isSelected: boolean
  onChange: () => void
  className?: string
}

const SelectionCard = ({
  label,
  imgSrc,
  isSelected,
  onChange,
  className,
}: SelectionCardProps) => {
  return (
    <div
      className={clsx(
        'rounded-lg border-2 border-black-regular bg-yellow-dark p-3 pb-0',
        'aspect-square min-h-40 min-w-40 cursor-pointer transition-colors hover:bg-tones-rose sm:min-w-52',
        'relative flex flex-col justify-between gap-4 bg-contain bg-bottom bg-no-repeat',
        { 'bg-tones-rose': isSelected },
        className,
      )}
      onClick={onChange}
    >
      {/* todo: use checkbox here */}
      <div
        className={clsx(
          'absolute right-3 top-3 h-6 w-6 rounded-md bg-white',
          'rotate-45 border-2 border-black-regular transition-colors',
          'flex items-center justify-center',
          {
            '!border-black-regular !bg-yellow-regular': isSelected,
            'bg-tones-yellow': isSelected,
          },
        )}
      >
        <Check
          size={16}
          strokeWidth={3}
          className={clsx(
            '-rotate-45 text-black-default opacity-0 transition-opacity duration-75',
            {
              'opacity-100': isSelected,
            },
          )}
        />
      </div>
      <span className="max-w-3/4 font-rubik text-lg font-semibold leading-none">
        {label}
      </span>
      <div
        className="relative mx-auto h-full w-full max-w-10/12 bg-contain bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        {/* <Image
          src={imgSrc}
          fill
          sizes="100vh"
          alt="label"
          className="pointer-events-none mt-auto !h-fit w-full select-none object-contain"
        /> */}
      </div>
    </div>
  )
}

export default SelectionCard
