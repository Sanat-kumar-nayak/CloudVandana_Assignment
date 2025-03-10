const images = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];

const n = images.length;
const flexContainer = document.getElementById("flex-container");
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

for (let i = 0; i < n; i++) {
  const newImage = document.createElement("img");
  newImage.src = images[i];
  newImage.style.aspectRatio = 16 / 9;
  flexContainer.appendChild(newImage);
}

const containerWidth = 50;
const flexContainerWidth = n * containerWidth;
flexContainer.style.width = flexContainerWidth;

let curPosition = 0;
leftBtn.addEventListener("click", () => {
  if (curPosition > 0) {
    rightBtn.style.display = "block";
    curPosition--;
  } else {
    leftBtn.style.display = "none";
  }

  showImg();
});

rightBtn.addEventListener("click", () => {
  if (curPosition < n - 1) {
    leftBtn.style.display = "block";
    curPosition++;
  } else {
    rightBtn.style.display = "none";
  }

  showImg();
});

function showImg() {
  console.log(curPosition);
  const translateXDistance = -curPosition * containerWidth;
  console.log(translateXDistance);
  flexContainer.style.transform = `translateX(${translateXDistance}vw)`;
}
