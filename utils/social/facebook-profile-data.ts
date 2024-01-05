import axios from 'axios';

const fetchFacebookUserData = async (
  accessToken: string,
  accountId: string
) => {
  try {
    const response = await axios.get(
      `https://graph.facebook.com/${accountId}?fields=id,name,email,picture&access_token=${accessToken}`
    );

    if (response?.data) {
      const userData = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        photo: response.data.picture.data.url,
      };

      return userData;
    }
  } catch (error) {
    console.error('Error fetching user data from Facebook:', error);
    alert('Error fetching user data from Facebook');
    return null;
  }
};

export default fetchFacebookUserData;
