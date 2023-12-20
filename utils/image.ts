import axios from 'axios';

export async function getImageAsBase64(url: string) {
  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer'
    });

    const buffer = Buffer.from(response.data, 'binary').toString('base64');
    // const base64Image = `data:${response.headers['content-type']};base64,${buffer}`;
        
    return buffer;
  } catch (error) {
    console.error('Error fetching and encoding image:', error);
    return null;
  }
}