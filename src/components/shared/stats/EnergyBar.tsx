import clsx from 'clsx'
import { Zap } from 'react-feather'

type EnergyBarProps = {
  currentEnergy: number
  maxEnergy: number
}

const EnergyBar = ({ currentEnergy, maxEnergy }: EnergyBarProps) => {
  const energyPercentage = (currentEnergy / maxEnergy) * 100

  return (
    <div
      className={clsx(
        'relative w-20 rounded-lg',
        'border-2 border-black-regular bg-white',
        'h-8 overflow-hidden',
      )}
    >
      <div
        className="relative z-[2] h-full"
        style={{ width: `${energyPercentage}%` }}
      >
        <div className="absolute right-1.5 z-[2] h-full w-full bg-yellow-regular" />
        <svg
          width="18"
          height="40"
          viewBox="0 0 18 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx('absolute -right-1.5 -top-px h-[120%]', {
            '!right-0': !energyPercentage,
            '!-right-2.5': energyPercentage === 100,
          })}
        >
          <path
            d="M0.5 1.05302L10.6314 1V2.58333L10.9208 3.21667L12.3682 4.8L13.8155 5.75L14.9734 7.01667L15.5523 8.6L15.8418 9.55V10.5L15.5523 12.4L15.2628 13.35L14.9734 13.6667L14.6839 14.3L14.3944 14.9333L14.105 15.25L13.526 16.2L12.9471 16.8333L11.4998 18.4167L11.2103 18.7333L10.9208 19.3667L10.6314 20L10.3419 20.95V22.2167V23.1667V23.8V24.1167L10.0524 24.75L9.47349 25.3833L8.89456 26.3333L8.60509 27.6L8.89456 28.8667L10.0524 32.6667L11.7892 36.4667L12.3682 37.7333V39H0.5V37.7333V1.05302Z"
            fill="#FFC800"
            stroke="#FFC800"
          />
        </svg>
      </div>
      <div className="absolute inset-0 z-[3] flex w-full items-center justify-center gap-1">
        <Zap size={16} />
        <span className="pt-px font-rubik text-sm font-medium leading-none text-black-regular">
          {currentEnergy}/{maxEnergy}
        </span>
      </div>
    </div>
  )
}

export default EnergyBar
