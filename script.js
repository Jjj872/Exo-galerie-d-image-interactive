  const sliderContainer = document.createElement("div");
  sliderContainer.classList.add("slider");
  document.body.prepend(sliderContainer); // Ajouter au début après le chargement du DOM

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
      width: 700px;
      height: 400px;
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
    button:hover { color : black};

  `;
  document.head.appendChild(styles); 

  let index = 0;
function showImage(i) {
index = (i + images.length) % images.length;
// Gestion du débordement
imgElement.src = images[index];
}

prevButton.addEventListener('click', () => {
    showImage(index - 1)
})

nextButton.addEventListener('click', () => {
    showImage(index + 1)
})
setInterval(() => showImage(index + 1), 3000);



