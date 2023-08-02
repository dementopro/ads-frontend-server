import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import React from 'react'

const DefaultLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Header />
      <main className="overflow-hidden flex min-h-screen flex-col bg-[#121212] text-white">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout
