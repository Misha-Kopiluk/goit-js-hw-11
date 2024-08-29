export const photoRequest = (param) => {
const URL_PIXABAY = 'https://pixabay.com/api/';
const API_KEY = '45654098-015d10b92a1455385bf1e768f';

  const params = new URLSearchParams({
  orientation: 'horizontal',
  image_type: 'photo',
  safesearch: 'true',
  });
  
  return fetch(`${URL_PIXABAY}?key=${API_KEY}&q=${param}&${params}`).then(response => {
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();  
});
} 
