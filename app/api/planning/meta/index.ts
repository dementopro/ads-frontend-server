import axios from 'axios';

export const metaAxios = axios.create({
  baseURL: 'https://graph.facebook.com/v18.0'
});

export const setMetaAccessToken = (accessToken: string) => {
  if (metaAxios.defaults.params) {
    metaAxios.defaults.params['access_token'] = accessToken;
  } else {
    metaAxios.defaults.params = {
      access_token: accessToken
    }
  };
}