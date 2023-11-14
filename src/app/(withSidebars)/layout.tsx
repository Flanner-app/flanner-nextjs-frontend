'use client'

import clsx from 'clsx'
import { useState } from 'react'
import Sidebar from '@/components/shared/Sidebar'

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-full">
      <Sidebar
        isOpen={isSidebarOpen}
        toggle={() => setIsSidebarOpen((prev) => !prev)}
      />
      <div
        className={clsx('w-full', isSidebarOpen ? 'lg:pl-64' : 'lg:pl-21.5')}
      >
        {children}
      </div>
      {/* <FridgeSidebar /> */}
    </div>
  )
}
