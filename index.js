// Your code here
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  let currentLeft = dodger.style.left.replace('px', '');
  let currentLPosition = parseInt(currentLeft, 10);

  if (currentLPosition > 0) {
    dodger.style.left = `${currentLPosition - 1}px`;
  }
}

function moveDodgerRight() {
  let currentRight = dodger.style.left.replace('px', '');
  let currentRPosition = parseInt(currentRight, 10);

  if (currentRPosition > 0) {
    dodger.style.left = `${currentRPosition + 1}px`;
  }
}

document.addEventListener('keydown', function(e) {
  console.log(e.key);
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
