  const sliderContainer = document.createElement("div");
  sliderContainer.classList.add("slider");
  document.body.prepend(sliderContainer); 

  const images = [
    "img/1.jpeg",
    "img/2.jpeg",
    "img/3.jpg",
    "img/hourra.jpg"
  ];


  const imgElement = document.createElement("img");
  imgElement.src = images[0];
  sliderContainer.appendChild(imgElement);

  const prevButton = document.createElement("button");
  prevButton.textContent = "↩";
  prevButton.classList.add("prev");
  sliderContainer.appendChild(prevButton);

  const nextButton = document.createElement("button");
  nextButton.textContent = "↪";
  nextButton.classList.add("next");
  sliderContainer.appendChild(nextButton);

  const styles = document.createElement("style");
  styles.textContent = `
    .slider {
      position: relative;
      width: 800px;
      height: 600px;
      margin: 50px auto;
      overflow: hidden;
    }
    .slider img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
    .prev, .next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.3);
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      font-size: 20px;
      transition: 0.8s;
    }
    .prev { left: 10px; }
    .next { right: 10px; }
    button:hover { color : black; opacity: 0.8}
    body { background-color : #101114 }
    h1 { text-align: center;
    color: #00ffc4;
    text-transform: uppercase;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 800;
    font-size: 42px;} `;
  
  document.head.appendChild(styles); 

  let index = 0;
function showImage(i) {
index = (i + images.length) % images.length;
imgElement.src = images[index];
}

prevButton.addEventListener('click', () => {
    showImage(index - 1)
})

nextButton.addEventListener('click', () => {
    showImage(index + 1)
})
// setInterval(() => showImage(index + 1), 3000);

// Add keyboard support
document.addEventListener("keydown", (event) => {
   if (event.key === "ArrowRight") {
    showImage(index + 1)
   } else if (event.key === "ArrowLeft") {
      showImage(index - 1)
   }
})

