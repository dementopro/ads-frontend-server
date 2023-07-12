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