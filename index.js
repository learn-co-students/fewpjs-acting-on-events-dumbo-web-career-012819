// // var dodger = document.getElementById('dodger');
// //
// // function moveDodger(direction) {
// //   var directionNumbers = dodger.style[direction].replace('px', '')
// //   var distance = parseInt(directionNumbers, 10)
// //
// //   if (distance > 0 && direction == "left") {
// //     dodger.style.left = `${distance - 3}px`
// //   } else if (  direction == "right") {
// //     dodger.style.left = `${distance + 3}px`
// //   }
// // }
// //
// // document.addEventListener('keydown', function(event) {
// //
// //   if (event.key === "ArrowLeft") {
// //     moveDodger("left")
// //   }else if (event.key === "ArrowRight") {
// //     moveDodger("right")
// //   } else if (event.key === "ArrowUp") {
// //     moveDodger("top")
// //   } else if (event.key === "ArrowDown") {
// //     moveDodger("bottom")
// //   }
// // });
// var dodger = document.getElementById('dodger');
//
// function moveDodger(direction) {
//
//   var leftNumbers = dodger.style.left.replace('px', '');
//   var rightNumbers = dodger.style.right.replace('px', '');
//   var upNumbers = dodger.style.top.replace('px', '');
//   var downNumbers = dodger.style.bottom.replace('px', '');
//
//   var distanceLeft  = parseInt(leftNumbers,10);
//   var distanceRight  = parseInt(rightNumbers,10);
//   var distanceTop  = parseInt(upNumbers,10);
//   var distanceBottom  = parseInt(downNumbers,10);
//
//
//   if (direction === "left" && distanceLeft > 0) {
//     dodger.style.left = `${distanceLeft - 3}px`;
//     dodger.style.right = `${distanceRight + 3}px`;
//   } else if (direction === "right" && distanceRight > 0) {
//     dodger.style.left = `${distanceLeft + 3}px`;
//     dodger.style.right = `${distanceRight - 3}px`;
//   } else if (direction === "top" && distanceTop > 0) {
//     dodger.style.top = `${distanceTop - 3}px`;
//     dodger.style.bottom = `${distanceBottom + 3}px`;
//   } else if (direction === "bottom" && distanceBottom > 0) {
//     dodger.style.top = `${distanceTop + 3}px`;
//     dodger.style.bottom = `${distanceBottom - 3}px`;
//   }
//
// }
//
//
// document.addEventListener('keydown', function(e) {
//   console.log(event.key)
//   if (e.key === "ArrowLeft") {
//     moveDodger("left")
//   } else if (e.key === "ArrowRight") {
//     moveDodger("right")
//   } else if (e.key === "ArrowUp") {
//     moveDodger("top")
//   } else if (e.key === "ArrowDown") {
//     moveDodger("bottom")
//   }
// })

var dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }

}


function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  } else if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
})
