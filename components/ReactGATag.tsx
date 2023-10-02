'use client'
import React, { useEffect } from 'react';
import ReactGA from "react-ga4";

type Props = {
  fieldObject: Record<string, unknown>; // Define the Props type with a fieldObject property.
}

const ReactGATag = ({ fieldObject }: Props) => {

  useEffect(() => {
    // Initialize Google Analytics with your Measurement ID
    ReactGA.initialize("G-NQ34MWCQDB");

    // Send data to Google Analytics using the provided fieldObject
    ReactGA.send(fieldObject);
  }, []); // Run this effect only once when the component is mounted.

  return (
    <></> // Render an empty fragment.
  )
}

export default ReactGATag;