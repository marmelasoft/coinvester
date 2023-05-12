import { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'

import 'antd/dist/reset.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CoInveter',
  description: 'Democratizing access to investment',
}

export default function RootLayout({ children, }: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
