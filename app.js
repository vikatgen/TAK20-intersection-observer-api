import API from './api/api';
import _ from 'lodash';

const imagesGridContainer = document.querySelector('.grid-gallery');
const searchInput = document.querySelector('#search');
const emptyStateContainer = document.querySelector('.empty-gallery');

emptyStateContainer.classList.add('hidden')

const fillImagesContainer = (images) => {
    imagesGridContainer.innerHTML = ''

    images.forEach((image) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('image-wrapper');

        const imageElement = new Image();
        imageElement.src = image.urls.regular;

        imageWrapper.append(imageElement);
        imagesGridContainer.append(imageWrapper);
    })
}


await API.get('/photos').then((response) => fillImagesContainer(response.data));


const fetchSearchedImages = _.debounce( async (event) => {
    const response = await API.get('/search/photos', { params: { 
        'query': event.target.value,
        'per_page': 20
     }})

     if (!response.data.results.length) {
        emptyStateContainer.classList.remove('hidden');
     } else {
        emptyStateContainer.classList.add('hidden');
     }
    
     fillImagesContainer(response.data.results)
}, 1000);

searchInput.addEventListener('input', fetchSearchedImages)