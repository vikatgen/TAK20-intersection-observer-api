import API from './api/api';

const imagesGridContainer = document.querySelector('.grid-gallery');

API.get('/photos').then((response) => {
    const images = response.data;

    images.forEach((image) => {
        const imageElement = new Image();
        imageElement.src = image.urls.small;
        imagesGridContainer.append(imageElement);
    })

    const imageElements = document.querySelectorAll('img');
    

    let observer = new IntersectionObserver((elements, observer) => {
        imageElements.forEach(image => {
            console.log(elements)
            observer.observe(image);
        })
    });

});