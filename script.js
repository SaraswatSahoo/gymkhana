let images = Array.from(document.getElementsByClassName("imgCarousel"));
let mainPhoto = document.getElementById("mainPhoto");
let currentIndex = 0;

function updateImage(event){
  let image = event.target;
  setActiveThumbnail(image);
  mainPhoto.src = image.src;
}

images.forEach(function(image){
  image.addEventListener("click", updateImage);
});

function setActiveThumbnail(activeImage) {
  images.forEach(function(image) {
    image.classList.remove("active");
  });
  activeImage.classList.add("active");
}

function showNextImage() {
  mainPhoto.style.opacity = 0; // Start fade out
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    mainPhoto.src = images[currentIndex].src;
    setActiveThumbnail(images[currentIndex]);
    mainPhoto.style.opacity = 1; // Fade in
  }, 500); // Duration of the fade out
}

// Set the interval to change images every 3 seconds (3000 milliseconds)
setInterval(showNextImage, 3000);

// Set the initial active thumbnail
setActiveThumbnail(images[currentIndex]);

let poster = Array.from(document.getElementsByClassName("img-box"));

function viewPoster(activeImage){
  poster.forEach(function(image){
    image.classList.remove("active");
  });
  activeImage.classList.add("active");
}

let index = 0;

setInterval(()=>{
  index = ( index + 1 ) % poster.length;
  viewPoster(poster[index]);
}, 3000);