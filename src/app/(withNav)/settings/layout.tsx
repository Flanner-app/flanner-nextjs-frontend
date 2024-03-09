import { ReactNode } from 'react'
import SettingsNavigation from '@/components/settings/SettingsNavigation'

const SettingsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SettingsNavigation />
      <div className="p-4 sm:px-6">{children}</div>
    </>
  )
}

export default SettingsLayout
