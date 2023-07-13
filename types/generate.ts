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
