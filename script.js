const buttonGo = document.querySelector(".btn_go");
const buttonBack = document.querySelector(".btn_back");
const sliderTrack = document.querySelector(".slider_track");
const slides = sliderTrack.querySelectorAll(".box_a");

let i = 0;

buttonGo.addEventListener("click", () => {
    slides[i].style.animation = "left 0.9s ease-out forwards";

    setTimeout(() => {
        slides[i].style.animation = "none";
        slides[i].classList.add("none");

        i = (i + 1) % slides.length;

        slides[i].classList.remove("none");
        slides[i].style.animation = "opacityAn 0.9s ease-out forwards";
    }, 800);
});

buttonBack.addEventListener("click", () => {
    slides[i].style.animation = "right 0.9s ease-out forwards";
    
     setTimeout(() => {
        slides[i].style.animation = "none";
        slides[i].classList.add("none");

        i = (i - 1 + slides.length) % slides.length;

        slides[i].classList.remove("none");
        slides[i].style.animation = "opacityAn 0.9s ease-out forwards";
    }, 800);

    slides[i].classList.remove("none");
});