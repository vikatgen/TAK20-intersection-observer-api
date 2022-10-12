import API from './api/api';
import _ from 'lodash';

const imagesGridContainer = document.querySelector('.grid-gallery');
const searchInput = document.querySelector('#search');

const fillImagesContainer = (images) => {
    imagesGridContainer.innerHTML = ''

    images.forEach((image) => {
        const imageElement = new Image();
        imageElement.src = image.urls.small;
        imagesGridContainer.append(imageElement);
    })
}


await API.get('/photos').then((response) => fillImagesContainer(response.data));


const fetchSearchedImages = _.debounce( async (event) => {
    const response = await API.get('/search/photos', { params: { 
        'query': event.target.value,
        'per_page': 20
     }})

     fillImagesContainer(response.data.results)
}, 1000);

searchInput.addEventListener('input', fetchSearchedImages)