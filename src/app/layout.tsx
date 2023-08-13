import clsx from 'clsx'
import type { Metadata } from 'next'
import { Poppins, Rubik } from 'next/font/google'
import Sidebar from '@/components/shared/Sidebar'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
})
const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

export const metadata: Metadata = {
  title: 'Flanner',
  description: 'The Fridge app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={clsx(
          'h-full bg-yellow-regular font-poppins',
          poppins.variable,
          rubik.variable,
        )}
      >
        <div className="flex h-full">
          <Sidebar /> {children}
        </div>
      </body>
    </html>
  )
}
