'use client'
import { IGeneImageOption, ImageSegmentation, NewImage, PretrainItem } from "@/types/generate";
import { createContext, useEffect, useState } from "react";

export type IPretrainList = Partial<Record<`${keyof IGeneImageOption}List`, PretrainItem[]>>

export const GeneImageContext = createContext<{
  modeType: 'product' | 'portrait'
  preTrainedStep: keyof IGeneImageOption,
  preTrainedOption: IGeneImageOption,
  pretrainList: IPretrainList,
  originalImage: File | null,
  originalImageUrl: string,
  cropImage: string | null,
  showCrop: boolean,
  isCrop: boolean,
  label: 'Background' | 'Face'
  file: string,
  file_name: string,
  file_path: string,
  mask_file_name: string,
  mask_file_path: string,
  isGenerating: boolean,
  generatedImage: NewImage[] | null,
  img_seg: ImageSegmentation[],
  updateModeType: (newType: 'product' | 'portrait') => void
  updatePreTrainStep: (newStep: keyof IGeneImageOption) => void
  updatePreTrainedOption: (newOption: Partial<IGeneImageOption>) => void
  updatePretrainList: (newList: Partial<IPretrainList>) => void
  updateOriginalImage: (newImage: File | null) => void
  updateCropImage: (newImage: string | null) => void
  updateShowCrop: (newShowCrop: boolean) => void
  updateIsCrop: (newIsCrop: boolean) => void
  updateLabel: (newLabel: 'Background' | 'Face') => void
  updateFile: (newFile: string) => void
  updateFileName: (newFileName: string) => void
  updateFilePath: (newFilePath: string) => void
  updateMaskFileName: (newMaskFileName: string) => void
  updateMaskFilePath: (newMaskFilePath: string) => void
  updateIsGenerating: (newIsGenerating: boolean) => void
  updateGeneratedImage: (newGeneratedImage: NewImage[] | null) => void
  resetCtx: () => void
  updateImgSeg: (newImgSeg: ImageSegmentation[]) => void
  imageId: string
  updateImageId: (newImageId: string) => void
  reload: number
  updateReload: () => void
}>({
  modeType: 'product',
  preTrainedStep: 'image',
  preTrainedOption: {
    image: '',
    face: '',
    background: '',
    style: '',
  },
  pretrainList: {
    faceList: [],
    backgroundList: [],
    styleList: [],
  },
  isGenerating: false,
  originalImage: null,
  originalImageUrl: '',
  generatedImage: null,
  cropImage: null,
  showCrop: false,
  isCrop: false,
  label: 'Background',
  file: '',
  file_name: '',
  file_path: '',
  mask_file_name: '',
  mask_file_path: '',
  img_seg: [],
  reload: 0,
  updateModeType: () => { },
  updatePreTrainStep: () => { },
  updatePreTrainedOption: () => { },
  updatePretrainList: () => { },
  updateOriginalImage: () => { },
  updateCropImage: () => { },
  updateShowCrop: () => { },
  updateIsCrop: () => { },
  updateLabel: () => { },
  updateFile: () => { },
  updateFileName: () => { },
  updateFilePath: () => { },
  updateMaskFileName: () => { },
  updateMaskFilePath: () => { },
  updateIsGenerating: () => { },
  updateGeneratedImage: () => { },
  resetCtx: () => { },
  updateImgSeg: () => { },
  imageId: '',
  updateImageId: () => { },
  updateReload: () => { },
})

export const GeneImageProvider = ({ children }: { children: React.ReactNode }) => {

  const [modeType, setModeType] = useState<'portrait' | 'product'>('portrait')
  const [preTrainedStep, setPreTrainedStep] = useState<keyof IGeneImageOption>('image')
  const [label, setLabel] = useState<'Background' | 'Face'>('Background')
  const [file, setFile] = useState<string>('')
  const [file_name, setFileName] = useState<string>('')
  const [file_path, setFilePath] = useState<string>('')
  const [mask_file_name, setMaskFileName] = useState<string>('')
  const [mask_file_path, setMaskFilePath] = useState<string>('')
  const [isGenerating, setIsGenerating] = useState<boolean>(false)
  const [generatedImage, setGeneratedImage] = useState<NewImage[] | null>(null)
  const [preTrainedOption, setPreTrainedOption] = useState<IGeneImageOption>({
    face: '',
    background: '',
    style: '',
    image: '',
  })
  const [pretrainList, setPretrainList] = useState<IPretrainList>({
    faceList: [],
    backgroundList: [],
    styleList: [],
  })
  const [originalImage, setOriginalImage] = useState<File | null>(null)
  const [originalImageUrl, setOriginalImageUrl] = useState<string>('')
  const [cropImage, setCropImage] = useState<string | null>(null)
  const [showCrop, setShowCrop] = useState(false)
  const [isCrop, setIsCrop] = useState(false)
  const [img_seg, setImgSeg] = useState<ImageSegmentation[]>([])
  const [imageId, setImageId] = useState<string>('')
  const [reload, setReload] = useState<number>(0)

  useEffect(() => {
    resetCtx()
  }, [modeType])

  const updateLabel = (newLabel: 'Background' | 'Face') => {
    setLabel(newLabel);
  }

  const updateImageId = (newImageId: string) => {
    setImageId(newImageId);
  }

  const updateIsGenerating = (newIsGenerating: boolean) => {
    setIsGenerating(newIsGenerating);
  }

  const updateFileName = (newFileName: string) => {
    setFileName(newFileName);
  }

  const updateFilePath = (newFilePath: string) => {
    setFilePath(newFilePath);
  }

  const updateMaskFileName = (newMaskFileName: string) => {
    setMaskFileName(newMaskFileName);
  }

  const updateMaskFilePath = (newMaskFilePath: string) => {
    setMaskFilePath(newMaskFilePath);
  }

  const updateGeneratedImage = (newGeneratedImage: NewImage[] | null) => {
    setGeneratedImage(newGeneratedImage);
  }


  const updateModeType = (newModeType: 'product' | 'portrait') => {
    setModeType(newModeType);
  }

  const updateShowCrop = (newShowCrop: boolean) => {
    setShowCrop(newShowCrop);
  }

  const updatePreTrainStep = (newStep: keyof IGeneImageOption) => {
    setPreTrainedStep(newStep);
  }

  const updateOriginalImage = (newImage: File | null) => {
    setOriginalImage(newImage);
    if (newImage) {
      setOriginalImageUrl(URL.createObjectURL(newImage));
    } else {
      setOriginalImageUrl('');
    }
  }

  const updateFile = (newFile: string) => {
    setFile(newFile);
  }

  const updateReload = () => {
    setReload(reload + 1);
  }

  const updateCropImage = (newImage: string | null) => {
    setCropImage(newImage);
  }

  const updateIsCrop = (newIsCrop: boolean) => {
    setIsCrop(newIsCrop);
  }

  const updatePreTrainedOption = (newOption: Partial<IGeneImageOption>) => {
    setPreTrainedOption({
      ...preTrainedOption,
      ...newOption
    });
  }

  const updatePretrainList = (newList: IPretrainList) => {
    setPretrainList({
      ...pretrainList,
      ...newList
    });
  }

  const updateImgSeg = (newImgSeg: ImageSegmentation[]) => {
    setImgSeg(newImgSeg);
  }

  const resetCtx = () => {
    // updateModeType('portrait')
    updatePreTrainStep('image')
    updateImgSeg([])
    updatePreTrainedOption({
      face: '',
      background: '',
      style: '',
      image: '',
    })
    updateOriginalImage(null)
    updateCropImage(null)
    updateShowCrop(false)
    updateIsCrop(false)
    updateLabel('Background')
    updateFileName('')
    updateFilePath('')
    updateMaskFileName('')
    updateMaskFilePath('')
    updateIsGenerating(false)
    updateGeneratedImage(null)
    updateImageId('')
  }

  return (
    <GeneImageContext.Provider value={{
      modeType, updateModeType,
      preTrainedStep, updatePreTrainStep,
      preTrainedOption, updatePreTrainedOption,
      pretrainList, updatePretrainList,
      originalImage, updateOriginalImage,
      cropImage, updateCropImage,
      originalImageUrl,
      showCrop, updateShowCrop,
      isCrop, updateIsCrop,
      label, updateLabel,
      file, updateFile,
      file_name, updateFileName,
      file_path, updateFilePath,
      mask_file_name, updateMaskFileName,
      mask_file_path, updateMaskFilePath,
      isGenerating, updateIsGenerating,
      generatedImage, updateGeneratedImage,
      img_seg, updateImgSeg,
      resetCtx,
      imageId, updateImageId,
      reload, updateReload,
    }}>
      {children}
    </GeneImageContext.Provider>
  )
}
