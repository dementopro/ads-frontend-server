import { useState, useEffect } from 'react';
import { geoData } from '@/data/geoData'; // Importing geographical data
import { GeoData } from '@/types/geo'; // Importing the GeoData type

// Define the custom React Hook named useGeoData
export const useGeoData = () => {
  // Define a state variable called 'data' to store geographical data
  const [data, setData] = useState<GeoData[] | null>(null);

  // Use the useEffect hook to set 'data' to the 'geoData' when the component mounts
  useEffect(() => {
    setData(geoData); // Setting the state variable 'data' to the imported geographical data
  }, []);

  // Return an object containing 'geoData' which holds the fetched geographical data
  return { geoData: data };
};