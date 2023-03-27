import axios from 'axios';

const getFetch = async (url, params = {}) => {
  const res = await axios({
    url: url,
    method: 'GET',
    params: params
  });
  return res.data;
};

export default getFetch;
