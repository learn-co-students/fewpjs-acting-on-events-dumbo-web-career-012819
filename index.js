// Your code here

let dodger = document.getElementById('dodger')

dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = '0px';

function moveDodgerLeft() {
	let leftNumbers = dodger.style.left.replace('px', '')
	let left = parseInt(leftNumbers, 10)

	if (left > 0) {
		dodger.style.left = `${left - 10}px`
	}
}

document.addEventListener('keydown', function(e) {
	if (e.which === 37) {
		moveDodgerLeft()
	}
});

function moveDodgerRight() {
	let leftNumbers = dodger.style.left.replace('px', '')
	let left = parseInt(leftNumbers, 10)

	if (left > 0) {
		dodger.style.left = `${left + 10}px`
	}
}

document.addEventListener('keydown', function(e) {
	if (e.which === 39) {
		moveDodgerRight()
	}
});

dodger.style.top = '180px';

function moveDodgerUp() {
	let topNumbers = dodger.style.top.replace('px', '')
	let top = parseInt(topNumbers, 10)

	if (top > 0) {
		dodger.style.top = `${top - 10}px`
	}
}

document.addEventListener('keydown', function(e) {
	if (e.which === 38) {
		moveDodgerUp()
	}
});

function moveDodgerDown() {
	let topNumbers = dodger.style.top.replace('px', '')
	let top = parseInt(topNumbers, 10)

	if (top > 0) {
		dodger.style.top = `${top + 10}px`
	}
}

document.addEventListener('keydown', function(e) {
	if (e.which === 40) {
		moveDodgerDown()
	}
});