export const SUCCESS_CODE = 1
export const NO_CREDIT_CARD = 2

export const typeOptions = [
  { name: 'Portrait', value: 'portrait' },
  { name: 'Object', value: 'object' },
  { name: 'Service', value: 'service' },
]

export const modeOptions = [
  { name: 'High quality', value: 'quality' },
  { name: 'Hight Speed', value: 'speed' },
  { name: 'Medium Quality', value: 'quality' },
  { name: 'Multi-Model', value: 'multi' },
]

export const breadCrumbMap: Record<string, string[]> = {
  '/home': [],
  '/planning': ['Planning'],
  '/generate/textToImage': ['Generate', 'Text to Image'],
  '/generate/imageToImage': ['Generate', 'Image to Image'],
  '/generate/productDescription': ['Generate', 'Text to Copies'],
  '/projects': ['Your Projects'],
  '/pricing': ['Pricing'],
  '/socialInsights': ['Social Insights'],
  '/profile': ['User Profile'],
}
