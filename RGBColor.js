var numSquares = 6;
var colors = generateRandom(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");
colorDisplay.textContent = pickedColor;

for( var i =0; i<modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares =6;
		reset();
	});
}
//function to reset the chnanges on the page
function reset() {
	colors = generateRandom(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to picked color
	colorDisplay.textContent = pickedColor;
	//change color of Squares
	for (var i =0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor =colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	header.style.backgroundColor = "steelblue";
	//changing the messegae display to empty string
	messageDisplay.textContent = "";
	//change the text on the button to the New Colors
	resetButton.textContent = "New Colors"; 
}

// easyBtn.addEventListener("click", function() {
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares =3;
// 	colors = generateRandom(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i<squares.length; i++) {
// 		if(colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];	
// 		}
// 		else {
// 			squares[i].style.display="none";
// 		}		
// 	}
// 	header.style.backgroundColor = "steelblue";
// });

// hardBtn.addEventListener("click", function() {
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares =6;	
// 	colors = generateRandom(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i<squares.length; i++) {
// 		if(colors[i]) {
// 			squares[i].style.display = "block";
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 	}
// 	header.style.backgroundColor = "steelblue";
// });

resetButton.addEventListener("click", function() {
	reset();
	// //generate all new colors
	// colors = generateRandom(numSquares);
	// //pick a new random color from array
	// pickedColor = pickColor();
	// //change colorDisplay to picked color
	// colorDisplay.textContent = pickedColor;
	// //change color of Squares
	// for (var i =0; i<squares.length; i++) {
	// 	squares[i].style.backgroundColor =colors[i];
	// }
	// header.style.backgroundColor = "steelblue";
	// //changing the messegae display to empty string
	// messageDisplay.textContent = "";
	// //change the text on the button to the New Colors
	// this.textContent = "New Colors"; 
});

for(var i =0; i< squares.length; ++i) {
	//add initial colors to Square
	squares[i].style.backgroundColor = colors[i];
	//dd click listeners to squares
	squares[i].addEventListener("click", function() {
	//grab color of clicked squares
	var clickedColor = this.style.backgroundColor;
	//Compare color to the picked color
	if(clickedColor === pickedColor) {
		messageDisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again ?";
		changeColors(clickedColor);
		header.style.backgroundColor = clickedColor;
	}else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	});
}

function changeColors(color) {
		for (var j=0; j<squares.length; j++) {
		squares[j].style.backgroundColor = pickedColor;
	}
}

function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandom(num) {
	//make an Array
	var arr = [];
	//repeat num times
	for (i =0; i<num; i++) {
	//add num random colors to an array
		arr.push(randomColor());	
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}