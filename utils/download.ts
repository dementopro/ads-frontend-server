import { saveAs } from 'file-saver';

export function downloadImage(url: string, filename: string) {
  saveAs(url, filename);
}
