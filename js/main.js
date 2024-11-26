import Cropper from 'cropperjs';

document.addEventListener('DOMContentLoaded',  () => {
    const uploadButton = document.querySelector('.button__upload');
    const downloadButton = document.querySelector('.button__download');
    const resetButton = document.querySelector('.button__reset');
    const image  = document.querySelector('.view-window__photo');
    

    uploadButton.addEventListener('change',  (e) => {
        const file = e.target.files[0];
        const imgElement = document.querySelector('.view-window__photo');
        imgElement.src = `/img/${file.name}`;
        console.log(imgElement.src);
    });

    const cropper = new Cropper(image, {
        aspectRatio: 10 / 10,
        viewMode: 0,
        preview: '.view-window__preview',
        restore: false

    });

    resetButton.addEventListener('click', () => {
        if(cropper) {
            cropper.reset();
        } else {
            alert('Please, upload your image!');
        }
    });
});


