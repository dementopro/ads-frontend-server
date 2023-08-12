import './globals.css'
import { Varela } from 'next/font/google'
import WithProviders from '@/app/WithProviders'

const varela = Varela({ subsets: ['latin'], weight: "400" })

export const metadata = {
  title: 'AdsGency AI',
  description: 'Maximize ROI with our Generative AI ad platform! Create, distribute, optimize. Ignite your ad revolution - Sign up now!',
  keywords: 'Generative AI Advertising, AI Ad Agency, AI Advertising, AdsGency AI, AdsGency AI Generative Advertising Solutions'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${varela.className} w-full h-screen`}>
        <WithProviders>
          {children}
        </WithProviders>
      </body>
    </html>
  )
}
