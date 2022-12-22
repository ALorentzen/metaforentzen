// // Require Vue
// window.Vue = require("vue").default;

// // Register Vue Components
// Vue.component(
//     "image-view-component",
//     require("./components/ImageVue.vue").default
// );

// // Initialize Vue
// const app = new Vue({
//     el: "#app",
// });

// Statamic.booting(() => {
//     Statamic.$components.register("ImageView", ImageView);
// });

// SLIDER

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});

