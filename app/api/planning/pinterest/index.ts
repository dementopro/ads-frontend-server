import axios from 'axios';
import PinterestAPI from 'pinterest-node-api';

export const pinterest = new PinterestAPI();
export const pinterestAxios = axios.create({
  baseURL: 'https://api.pinterest.com/v5'
});

export const setPinterestAccessToken = (accessToken: string) => {
  pinterest.setUserToken(accessToken);
  pinterestAxios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}