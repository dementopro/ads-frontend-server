export const SUCCESS_CODE = 1
export const NO_CREDIT_CARD = 2
export const NOT_ENOUGH_CREDIT = 3

export const typeOptions = [
  { name: 'Portrait', value: 'portrait' },
  { name: 'Object', value: 'object' },
  { name: 'Service', value: 'service' },
]

export const modeOptions = [
  { name: 'High Quality', value: 'quality' },
  { name: 'High Speed', value: 'speed' },
  { name: 'Medium Quality', value: 'quality' },
]

export const breadCrumbMap: Record<string, string[]> = {
  '/home': [],
  '/planning': ['Planning'],
  '/generate/textToImage': ['Generate', 'Text to Image'],
  '/generate/imageToImage': ['Generate', 'Image to Image'],
  '/generate/productDescription': ['Generate', 'Text to Copies'],
  '/generate/remixTool': ['Generate', 'Remix Tool'],
  '/projects': ['Your Projects'],
  '/pricing': ['Pricing'],
  '/socialInsights': ['Social Insights'],
  '/profile': ['User Profile'],
}

export const DETAIL_LIMIT = 2000;
