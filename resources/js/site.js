// IMAGE PREVIEW
const image = document.querySelector(".js-image");
const imageButton = document.querySelector(".js-imgButton");
const imagePreview = document.querySelector(".js-img-preview");
const imagePreviewBg = document.querySelector(".js-img-preview-bg");

document.addEventListener("DOMContentLoaded", function() {

    function toggleImagePreview() {
        if (imagePreviewBg.classList.contains('hidden') && imagePreview.classList.contains('hidden')) {
            imagePreviewBg.classList.toggle("hidden");
            imagePreview.classList.toggle("hidden");
        } else {
            imagePreviewBg.classList.toggle("flex");
            imagePreview.classList.toggle("flex");
        }
    }

    if (image) {
        image.addEventListener("click", toggleImagePreview);
    }

    if (imageButton) {
        imageButton.addEventListener("click", toggleImagePreview);
    }

    // SLIDER
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");

    if (!slide || !slidesContainer) {
        return;
    }

    const slideWidth = slide.clientWidth;

    if (nextButton) {
        nextButton.addEventListener("click", (e) => {
            e.preventDefault();
            slidesContainer.scrollLeft += slideWidth;
        });
    }

    if (prevButton) {
        prevButton.addEventListener("click", (e) => {
            e.preventDefault();
            slidesContainer.scrollLeft -= slideWidth;
        });
    }
});
