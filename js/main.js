import Cropper from 'cropperjs';

document.addEventListener('DOMContentLoaded',  () => {
    const uploadButton = document.querySelector('.button__upload');
    const downloadButton = document.querySelector('.button__download');
    const resetButton = document.querySelector('.button__reset');
    const image  = document.querySelector('.view-window__photo');
    let cropper = null;
    
    uploadButton.addEventListener('change',  (e) => {
        const file = e.target.files[0];
        if(file) {
            const blobUrl = URL.createObjectURL(file);
            image.src = blobUrl;
        }

        image.onload = () => {
            if(cropper) {
                cropper.destroy();
            }

            cropper = new Cropper(image, {
                aspectRatio: 10 / 10,
                viewMode: 0,
                preview: '.view-window__preview',
            });
        }
    });

    resetButton.addEventListener('click', () => {
        if(cropper) {
            cropper.reset();
        } else {
            alert('Please, upload your image!');
        }
    });
});


