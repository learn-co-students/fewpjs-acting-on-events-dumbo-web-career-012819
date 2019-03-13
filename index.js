// Your code here

let dodger = document.getElementById('dodger');

dodger.style.backgroundColor = '#ff69b4';

dodger.style.bottom = '0px';

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft();
  } else if (e.which === 39) {
    moveDodgerRight();
  }
})


function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);
  if (left > 0) {
  dodger.style.left = `${left - 1}px`;
  }
}


function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);
  if (left < 400) {
  dodger.style.left = `${left + 1}px`;
  }
}
