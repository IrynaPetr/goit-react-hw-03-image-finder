import axios from 'axios';

export const getDataByName = async (input, page = 1) => {
  const url = 'https://pixabay.com/';
  const API_KEY = '35043839-9a00e3f7a74986ab288e38356';
  return await axios.get(`${url}?q=${input}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => res.data);
};
