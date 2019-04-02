// Your code here

const dodger = document.querySelector('#dodger')

dodger.style.backgroundColor = '#FF69B4'

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10)
  let rightNumbers = dodger.style.right.replace('px', '')
  let right = parseInt(rightNumbers, 10)

  if (left > 0) {
  dodger.style.left = `${left - 1}px`
  dodger.style.right = `${right + 1}px`
}
}

function moveDodgerRight() {
  let rightNumbers = dodger.style.right.replace('px', '')
  let right = parseInt(rightNumbers, 10)
  let leftNumbers = dodger.style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10)

  if (right > 0) {
    dodger.style.right = `${right - 1}px`
    dodger.style.left = `${left + 1}px`
}
}
document.addEventListener('keydown', function(e) {
  console.log(e.which)
  if (e.which == 37) {
    moveDodgerLeft()
  }
  else if (e.which == 39) {
    moveDodgerRight()
  }
})
