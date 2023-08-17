// slider.js
export default function slider() {
    const slideContainer = document.querySelector(".slide-container");
    const slidePrevBtn = document.getElementById("js-slide-arrow-prev");
    const slideNextBtn = document.getElementById("js-slide-arrow-next");
    const slides = document.querySelectorAll(".slide-container img"); // Select all images inside the slide-container

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? "block" : "none";
        });
    }

    let currentSlide = 0;
    if (slideContainer) {
        function scrollSlide(direction) {
            return (e) => {
                e.preventDefault();
                currentSlide += direction;
                if (currentSlide < 0) currentSlide = slides.length - 1;
                if (currentSlide >= slides.length) currentSlide = 0;
                showSlide(currentSlide);
            }
        }

        slideNextBtn?.addEventListener("click", scrollSlide(1));
        slidePrevBtn?.addEventListener("click", scrollSlide(-1));
    }
}
