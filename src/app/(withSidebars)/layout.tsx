import Sidebar from '@/components/shared/Sidebar'

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full pl-21.5">{children}</div>
      {/* <FridgeSidebar /> */}
    </div>
  )
}
