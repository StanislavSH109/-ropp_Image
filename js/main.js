import Cropper from 'cropperjs';
import { uploadImage } from './buttons.js';

const image  = document.getElementById('image');
const cropper = new Cropper(image, {
    aspectRatio: 16 / 9
});

uploadImage();