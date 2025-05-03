const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox__image img");
const gallery = document.querySelector(".gallery__container");
const listImg = document.querySelectorAll(".gallery__image img");
const closeLightBox = document.querySelector(".lightbox__close-btn i");
const controllLeft = document.querySelector(".prev");
const controllRight = document.querySelector(".after");
const backdrop = document.querySelector(".lightbox__backdrop");

let indexCurrent = -1;

const toggleLightBox = () => {
  //Nếu bị tắt đi thì gán biến indexCurrent lại = -1
  if (lightbox.classList.toggle("hidden")) {
    indexCurrent = -1;
  }
};

const check = () => {
  if (indexCurrent == 0) {
    controllLeft.classList.add("hidden");
    return;
  }
  if (indexCurrent == listImg.length - 1) {
    controllRight.classList.add("hidden");
    return;
  }

  controllLeft.classList.remove("hidden");
  controllRight.classList.remove("hidden");
};

const prevHandle = () => {
  if (indexCurrent > 0) {
    indexCurrent--;
  }
  const target = listImg[indexCurrent];
  if (target) {
    lightboxImg.src = target.src;
    check();
  }
};

const afterHandle = () => {
  if (indexCurrent < listImg.length - 1) {
    indexCurrent++;
  }

  const target = listImg[indexCurrent];
  if (target) {
    lightboxImg.src = target.src;
    check();
  }
};

closeLightBox.addEventListener("click", toggleLightBox);
backdrop.addEventListener("dblclick", toggleLightBox);
controllLeft.addEventListener("click", prevHandle);
controllRight.addEventListener("click", afterHandle);
gallery.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() == "img") {
    const clickedImg = event.target;
    const index = Array.from(listImg).indexOf(clickedImg);
    if (index >= 0 && index < listImg.length) {
      indexCurrent = index;
      lightboxImg.src = clickedImg.src;
      toggleLightBox();
      check();
    }
  }
});
