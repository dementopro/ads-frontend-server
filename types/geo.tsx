export interface MapData {
  countries: {
    features: MapFeature[]
    type: 'FeatureCollection'
  }
  land: {
    features: MapFeature[]
    type: 'FeatureCollection'
  }
  interiors: {
    type: "MultiLineString"
    coordinates: number[][][]
  }
}

export interface MapFeature {
  geometry: {
    coordinates: number[]
    type: 'Polygon'
  }
  id: string
  properties: {
    name: string
  }
  type: 'Feature'
}

export interface GeoData {
  id: string
  value: number
}
