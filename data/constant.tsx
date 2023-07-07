export const SUCCESS_CODE = 1
export const ERROR_CODE = 1

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
  '/generate/imageToText': ['Generate', 'Image to Text'],
  '/generate/imageToImage': ['Generate', 'Image to Image'],
  '/projects': ['Your Projects'],
}
