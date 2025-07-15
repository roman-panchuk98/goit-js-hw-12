import axios from 'axios';

export const getImagesByQuery = async (query, page) => {
  let response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '51210764-f10f5a036eaba1aa23a71bd7f',
      q: query.trim(),
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    },
  });
  return response.data;
};
