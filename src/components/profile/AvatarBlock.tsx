import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Edit2 } from 'react-feather'
import Button from '../shared/Button'
import EnergyBar from '../shared/stats/EnergyBar'
import LevelBar from '../shared/stats/LevelBar'

const AvatarBlock = () => {
  return (
    <div
      className={clsx(
        'max-w-64 rounded-xl border-2 border-black-default shadow-brutalism',
        'overflow-hidden',
      )}
    >
      <div className="relative aspect-square w-full bg-tones-lavender">
        <Link href="/profile/settings">
          <Button
            appearence="ghost"
            size="S"
            wrapperClassName="absolute right-1 top-1 h-fit w-fit"
            className="bg-white/50 backdrop-blur-xl"
          >
            <Edit2 size={16} />
          </Button>
        </Link>
        <Image
          fill
          src="/images/cards/skill/chef.webp"
          alt=""
          className="pointer-events-none select-none object-cover"
        />
      </div>
      <div className="flex justify-between gap-2 border-t-2 border-black-default p-2">
        <LevelBar
          level={15}
          currentPoints={10}
          maxLevelPoints={80}
          className="w-full"
        />
        <EnergyBar currentEnergy={4} maxEnergy={5} className="w-full" />
      </div>
    </div>
  )
}

export default AvatarBlock
