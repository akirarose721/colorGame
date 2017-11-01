var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var header = document.querySelector("h1");
var resetButton = document.getElementById('reset');
var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.getElementById('hardBtn');

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	//generate all new colors
	numSquares = 3
	colors = generateRandomColors(numSquares);
	//pick random color
	pickedColor = pickColor();
	//update color display
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "new game"
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	//generate all new colors
	numSquares = 6
	colors = generateRandomColors(numSquares);
	//pick random color
	pickedColor = pickColor();
	//update color display
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "new game"
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}	
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick random color
	pickedColor = pickColor();
	//update color display
	colorDisplay.textContent = pickedColor;
	header.style.backgroundColor = "#7019c1";
	messageDisplay.textContent = "";
	this.textContent = "new game"
	//set square colors
	for(i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
})

colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++){
	//set initial colors
	squares[i].style.backgroundColor = colors[i];

	//add click listener to squares
	squares[i].addEventListener("click", function() {
		//get color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to check for correct or wrong
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "CORRECT!";
			changeColor(clickedColor);
			resetButton.textContent = "PLAY AGAIN?";
			header.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "TRY AGAIN!";
		}
	});
}

function changeColor(color) {
// loop through all squares
for(var i = 0; i < squares.length; i++){
	//Change each square color to chosen color
	squares[i].style.backgroundColor = color;

	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//create an array
	var arr = [];
	//repeat num times
	for(i = 0; i < num; i++) {
		//get random color and add to array
		arr.push(randomColor());

	}
	//return that array
	return arr;
}
function randomColor() {
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
