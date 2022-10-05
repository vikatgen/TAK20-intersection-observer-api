import API from './api/api';

API.get('/photos').then((response) => console.log(response.data))