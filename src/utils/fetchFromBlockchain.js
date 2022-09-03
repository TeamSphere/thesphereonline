import axios from 'axios';

const BASE_URL = 'https://api.replicate.com/v1/predictions';

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  //
}).catch(function (error) {
  //
});

export const fetchFromBlockchain = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
}
