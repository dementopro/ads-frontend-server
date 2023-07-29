'use client'
import Header from '@/components/home/Header'
import Landing from '@/components/home/Landing'
import React, { useState } from 'react'

const MainLanding = () => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Landing setModalOpen={setModalOpen} />
    </>
  )
}

export default MainLanding
