const carousel = document.getElementById("carousel__images");
const btnLeft = document.querySelector(".carousel__btn--left");
const btnright = document.querySelector(".carousel__btn--right");

const images = [
	"desktop-image-hero-1.jpg",
	"desktop-image-hero-2.jpg",
	"desktop-image-hero-3.jpg",
];

let currentImage = images[0];

btnLeft.addEventListener("click", () => {
	let popImage = images.pop();
	images.unshift(popImage);
	currentImage = images[0];
	carousel.style.backgroundImage = `url(/images/${currentImage})`;
});

btnright.addEventListener("click", () => {
	let shiftImage = images.shift();
	images.push(shiftImage);
	currentImage = images[0];
	carousel.style.backgroundImage = `url(/images/${currentImage})`;
});
