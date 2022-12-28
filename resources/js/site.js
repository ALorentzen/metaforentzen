//IMAGE PREVIEW
const image = document.querySelector(".image");
const imageButton = document.querySelector(".imgButton");
const imageComponent = document.querySelector(".imageComponent");
const imagePreview = document.querySelector(".imagePreview");
const imagePreviewBg = document.querySelector(".imagePreviewBg");


if (image !== null) {
    (function () {
        image.addEventListener("click", () => {
            imagePreview.classList.toggle("hidden");
        });
            return;
    })();
}

if (image !== null) {
    (function () {
        imageButton.addEventListener("click", () => {
            imagePreview.classList.toggle("hidden");
        });
        return;
    })();
}

// SLIDER
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

if (nextButton !== null) {
    nextButton.addEventListener("click", (e) => {
        e.preventDefault();
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
        return;
    });
}
if (prevButton !== null) {
    prevButton.addEventListener("click", (e) => {
        e.preventDefault();
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
        return;
    });
}



