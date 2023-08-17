export default function previewer() {
    document.addEventListener("DOMContentLoaded", function() {
        const imgs = document.querySelectorAll(".js-image"); // Select all images with the 'js-image' class
        const imgButton = document.querySelector(".js-imgButton");
        const imgPreview = document.querySelector(".js-img-previewer");
        const previewBackground = document.querySelector(".z-[1]");

        function toggleClass(element, ...classNames) {
            classNames.forEach(className => {
                element?.classList.toggle(className);
            });
        }

        function toggleImgPreview() {
            toggleClass(imgPreview, "hidden", "flex");
            toggleClass(previewBackground, "hidden");
        }

        imgs.forEach((imgElement) => {
            imgElement.addEventListener("click", function() {
                toggleImgPreview();
            });
        });

        imgButton?.addEventListener("click", toggleImgPreview);
    });
};
