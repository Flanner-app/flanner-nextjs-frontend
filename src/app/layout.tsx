import clsx from 'clsx'
import type { Metadata } from 'next'
import { Poppins, Rubik } from 'next/font/google'
import AuthProvider from '@/context/AuthProvider'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
})
const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

export const metadata: Metadata = {
  title: 'Flanner',
  description: 'The Fridge app',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="min-h-full">
      <body
        className={clsx(
          'h-full bg-yellow-light font-poppins',
          poppins.variable,
          rubik.variable,
        )}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
