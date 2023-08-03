import { useState, useEffect } from 'react';
import { geoData } from '@/data/geoData';
import { GeoData } from '@/types/geo';


export const useGeoData = () => {
  const [data, setData] = useState<GeoData[] | null>(null);

  useEffect(() => {
    setData(geoData);
  }, []);

  return { geoData: data };
};
