import { registerImage } from './lazy'

const MIN = 1;
const MAX = 100;
const RANDOM = () => Math.floor(Math.random() * (MAX - MIN)) + MIN;

const createImageNode = () => {
    const container = document.createElement('div');
    container.className = 'p-4';

    const img = document.createElement('img');
    img.className = 'mx-auto rounded-md bg-gray-300';
    img.style = 'width: 320px'
    img.dataset.src = `https://picsum.photos/500/500?random=${RANDOM()}.jpg`;

    container.append(img);

    return container;
}

const APP = document.querySelector('#app');

const addButton = document.querySelector('#addImages');
const actionAddImg = () => {
    const newImage = createImageNode();
    APP.append(newImage);
    registerImage(newImage);
}
addButton.addEventListener('click', actionAddImg);

const clean = document.querySelector('#clean');
clean.addEventListener('click', () => APP.innerHTML="")