'use client'
import React, { useEffect } from 'react'
import ReactGA from "react-ga4"

type Props = {
  fieldObject: Record<string, unknown>
}

const ReactGATag = ({ fieldObject }: Props) => {

  useEffect(() => {
    ReactGA.initialize("G-NQ34MWCQDB");
    ReactGA.send(fieldObject);
  }, [])

  return (
    <></>
  )
}

export default ReactGATag
