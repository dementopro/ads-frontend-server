export interface IGeneImage {
  description: string;
  filename: string;
  prompt: string;
}

export interface IGeneImageResp extends IResponse {
  file_path: string
  image_list: IGeneImage[]
}

export interface IGeneImageHistory extends IResponse {
  file_path: string
  image_list: IGeneImage[]
}

export interface IGeneTextForm {
  prompt: string;
  mode: 'description' | 'email',
  text?: string;
}

export interface IGeneTextResp extends IResponse {
  data: IGeneText[]
}

export interface IGeneText {
  email: string,
  id: number,
  prompt: string,
  text: string,
  timeStamp: string
}

export interface IGeneImageOption {
  image: string,
  face: string,
  background: string,
  style: string,
}

export interface PretrainItem {
  image_path: string,
  lora: string,
  name: string,
  prompt: string
}

export interface IPretrainListResp extends IResponse {
  data: PretrainItem[]
}

export interface ImageSegmentation {
  label: string,
  mask: string
  score: number
}

export interface IUploadImageResp extends IResponse {
  error: string
  file_name: string
  file_path: string
  img_path: string
  mask_file_name: string
  mask_file_path: string
  img_seg: ImageSegmentation[]
  _id: string
}

export interface IGeneImageResp extends IResponse {
  // new_image: NewImage,
  error: string,
  file_path: string,
  new_image: NewImage[],
}

export interface NewImage {
  date: string,
  email: string,
  filename: string,
  img_path: string,
  _id: string
  background_mode: string
  face_mode: string
  mode_type: string
  style: string
  task_label: string[]
}

export interface IGeneImageHistoryResp extends IResponse {
  image_data: NewImage[]
  error: string
}
