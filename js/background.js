const images = ["bg-img-01.jpg", "bg-img-02.jpg", "bg-img-03.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImage}`;

document.body.appendChild(bgImg);
