import clsx from 'clsx'
import Image from 'next/image'
import EnergyBar from '../shared/stats/EnergyBar'
// import LevelBar from '../shared/stats/LevelBar'

const AvatarBlock = () => {
  return (
    <div
      className={clsx(
        'w-full rounded-xl border-2 border-black-default shadow-brutalism',
        'shrink-0 overflow-hidden',
      )}
    >
      <div className="relative aspect-square w-full bg-tones-lavender">
        <Image
          fill
          src="/images/cards/skill/chef.webp"
          alt=""
          className="pointer-events-none select-none object-cover"
        />
      </div>
      <div
        className={clsx(
          'flex justify-between gap-2 border-t-2 border-black-default p-2',
          'bg-yellow-dark',
        )}
      >
        {/* <LevelBar
          level={15}
          currentPoints={10}
          maxLevelPoints={80}
          className="w-full"
        /> */}
        <EnergyBar currentEnergy={4} maxEnergy={5} className="w-full" />
      </div>
    </div>
  )
}

export default AvatarBlock
