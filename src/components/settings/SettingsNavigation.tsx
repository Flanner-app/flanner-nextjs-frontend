'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { urls } from '@/constants/urls'

const TabLink = ({
  href,
  isActive,
  children,
}: {
  href: string
  isActive: boolean
  children: ReactNode
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        'h-fit p-2 font-medium leading-none',
        'rounded-lg border-2 border-transparent transition-colors',
        'hover:border-black-default',
        { 'bg-black-default text-white': isActive },
      )}
    >
      {children}
    </Link>
  )
}

const SettingsNavigation = () => {
  const pathname = usePathname()

  const TABS = [
    {
      label: 'Appliances',
      path: urls.settings.base,
    },
    {
      label: 'Preferences',
      path: urls.settings.preferences,
    },
    {
      label: 'Skills',
      path: urls.settings.skills,
    },
    {
      label: 'Payments',
      path: urls.settings.payments,
    },
  ]

  return (
    <div
      className={clsx(
        'sticky top-18 z-10 h-fit border-b-2 border-black-default py-2',
        'bg-yellow-light',
        'sm:px-6',
      )}
    >
      <div className="flex h-fit gap-2 overflow-x-auto px-4 scrollbar-none sm:px-0">
        {TABS.map((tab, i) => (
          <TabLink key={i} href={tab.path} isActive={pathname === tab.path}>
            {tab.label}
          </TabLink>
        ))}
      </div>
    </div>
  )
}

export default SettingsNavigation
