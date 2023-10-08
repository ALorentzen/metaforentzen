// Get all the .js-image elements
const images = document.querySelectorAll('.js-individual-image');
const imageViewer = document.querySelector('.js-image-viewer');
const viewerImage = document.querySelector('.js-viewer-image');
const closeButtons = document.querySelectorAll('.js-close-btn');
const nextButton = document.querySelector('.js-next-btn');
const prevButton = document.querySelector('.js-prev-btn');

const navHeader = document.querySelector('.js-nav-header');
const hamBtn = document.querySelector('.js-hamburger-button');
const hamList = document.querySelector('.js-hamburger-list');
const noScroll = document.querySelector('body');

// Array of indices
const imageIndices = Array.from(images).map((_, index) => index); 

// Initialize the index
let currentImageIndex = 0; 
document.addEventListener("DOMContentLoaded", function() {

    // Function to show image at the given index
    function showImage(imageUrl) {
        viewerImage.src = imageUrl;
        imageViewer.classList.remove('hidden');
        noScroll.classList.add('noScroll');
        navHeader.classList.toggle('hidden');
    }

    images.forEach((imageCard, index) => {
        imageCard.addEventListener('click', () => {
            const imageUrl = imageCard.querySelector('img').getAttribute('src');
            showImage(imageUrl);
        });
    });

    // Attach keydown event listener to the body for Esc key
    document.body.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            imageViewer.classList.add('hidden');
            noScroll.classList.remove('noScroll');
            navHeader.classList.toggle('hidden');
        }
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            imageViewer.classList.add('hidden');
            noScroll.classList.remove('noScroll');
            navHeader.classList.toggle('hidden');

        });
    });

    // Event listener for the "Next" button
    if(nextButton) {
        nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            currentImageIndex = (currentImageIndex + 1) % images.length;
            const imageUrl = images[currentImageIndex].querySelector('img').getAttribute('src');
            showImage(imageUrl);
        });
    }

    // Event listener for the "Previous" button
    if(prevButton) {
        prevButton.addEventListener('click', (e) => {
            e.preventDefault();
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            const imageUrl = images[currentImageIndex].querySelector('img').getAttribute('src');
            showImage(imageUrl);
        });
    }

    hamBtn.addEventListener('click', () => {
        hamList.classList.toggle('hamburgerActive');
        navHeader.classList.toggle('active');
        noScroll.classList.toggle('noScroll');
    });
});