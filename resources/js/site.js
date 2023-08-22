const images = document.querySelectorAll('.js-image');
const previewer = document.querySelector('.js-previewer');
const closeButtons = document.querySelectorAll('.js-close-btn');

images.forEach(image => {
    image.addEventListener('click', (e) => {
        e.preventDefault();
        if (previewer.classList.contains('hidden')) {
            previewer.classList.toggle('hidden')
        } else {
            previewer.classList.toggle('flex');
            closeButtons[0].focus();
        }
    });
});



closeButtons.forEach(closeBtn => {

    closeBtn.addEventListener('click', (e) => {
        if (!previewer.classList.contains('hidden')) {
            previewer.classList.toggle('hidden');
        } else {
            previewer.classList.toggle('flex');
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!previewer.classList.contains('hidden')) {
                previewer.classList.toggle('hidden');
            } else {
                previewer.classList.toggle('flex');
            }
        }
    });
    
});






// // Event listeners for slider buttons
// if (nextButton !== null && prevButton !== null) {
//     nextButton.addEventListener("click", (e) => {
//         e.preventDefault();
//         navigateImages(1);
//     });

//     prevButton.addEventListener("click", (e) => {
//         e.preventDefault();
//         navigateImages(-1);
//     });
// }

// // Function to navigate through images
// function navigateImages(offset) {
//     currentImageIndex = (currentImageIndex + offset + images.length) % images.length;
//     updateImagePreview(currentImageIndex);
// }
