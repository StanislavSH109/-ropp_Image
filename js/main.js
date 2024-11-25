import Cropper from 'cropperjs';


const image  = document.getElementById('image');
const cropper = new Cropper(image, {
    aspectRatio: 16 / 9
});

