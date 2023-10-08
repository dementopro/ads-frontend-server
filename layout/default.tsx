
'use client'
import Footer from '@/components/home/Footer'
import React from 'react'
import {NextUIProvider} from "@nextui-org/react"


// Define the DefaultLayout component
const DefaultLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <NextUIProvider>
      <main className="overflow-hidden flex flex-col bg-black text-white">
        {/* Render the children components, which represent the content of the pages */}
        {children}
      </main>
      {/* Render the Footer component */}
      <Footer />

    </NextUIProvider>
  )
}


export default DefaultLayout;