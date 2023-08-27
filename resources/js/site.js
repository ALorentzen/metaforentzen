// Get all the .js-image elements
const images = document.querySelectorAll('.js-image');
const previewer = document.querySelector('.js-previewer');
const previewerImage = document.querySelector('.js-previewer-image');
const closeButtons = document.querySelector('.js-close-btn');
const nextButton = document.querySelector('.js-next-btn');
const prevButton = document.querySelector('.js-prev-btn');

const navHeader = document.querySelector('.js-nav-header');
const hamBtn = document.querySelector('.js-hamburger-button');
const hamList = document.querySelector('.js-hamburger-list');
const noScroll = document.querySelector('body');

let currentImageIndex = 0; // Initialize the index

// Attach click event listener to each .js-image element
images.forEach((image, index) => {
    noScroll.classList.toggle('noScroll');
    
    image.addEventListener('click', () => {
        const imageUrl = image.querySelector('img').getAttribute('src');
        previewerImage.src = imageUrl;
        previewer.classList.remove('hidden');
        currentImageIndex = index; 
    });
});

// Attach click event listener to the body
document.body.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('js-close-btn')) {
        previewer.classList.toggle('hidden');
        noScroll.classList.toggle('noScroll');
    }
});
closeButtons.addEventListener('click', () => {
    previewer.classList.toggle('hidden')
});

// Attach keydown event listener to the body for Esc key
document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        previewer.classList.add('hidden');
    }
});


// Event listeners for next and previous buttons
nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    navigateImages(1);
});

prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    navigateImages(-1);
});

// Navigate through the images based on the given offset
function navigateImages(offset) {
    currentImageIndex = (currentImageIndex + offset + images.length) % images.length;
    const currentImage = images[currentImageIndex];
    const imageUrl = currentImage.querySelector('img').getAttribute('src');
    previewerImage.src = imageUrl;
}

hamBtn.addEventListener('click', (e) => {
    e.preventDefault();

    hamList.classList.toggle('hamburgerActive');
    navHeader.classList.toggle('active');
    // no scroll on body when hamburger menu is open
    noScroll.classList.toggle('noScroll');
});
