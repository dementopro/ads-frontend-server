
'use client'
import Footer from '@/components/common/Footer'
import React from 'react'
import { NextUIProvider } from "@nextui-org/react"
import Header from '@/components/common/Header'

// Define the DefaultLayout component
const DefaultLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <NextUIProvider>
      <main className="flex flex-col w-full bg-black text-white">
        <div className="absolute z-40 w-full ipad:px-[60px] desktop:px-[100px] z-10">
          <Header />
        </div>
        {/* Render the children components, which represent the content of the pages */}
        {children}
      </main>
      {/* Render the Footer component */}
      <Footer />
    </NextUIProvider>
  )
}


export default DefaultLayout;