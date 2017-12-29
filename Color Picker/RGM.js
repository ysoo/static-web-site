// Add all clickable components in for now
var display = document.getElementById("colorDisplay");
var resetbtn = document.getElementById("newcolors");
var easybtn = document.getElementById("easybtn");
var hardbtn = document.getElementById("hardbtn");
var squares = document.querySelectorAll(".square");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var numSquares = 6;
var colors = [];
var pickColor;

setupModes();
setupSquares();
reset();


resetbtn.addEventListener("click", function() {
	reset();
});


function setupModes(){
	hardbtn.classList.add("selected");
	easybtn.addEventListener("click", function(){
		easybtn.classList.add("selected");
		hardbtn.classList.remove("selected");
		numSquares = 3;
		reset();
	});
	hardbtn.addEventListener("click", function() {
		hardbtn.classList.add("selected");
		easybtn.classList.remove("selected");
		numSquares = 6;
		reset();
	});
}

// Initialize the squares to random colors depending on number of squares
// Also make sure the RGB is set to one of the colors
function reset() {
	colors = generateRandomColors(numSquares);
	pickColor = pickedColor();
	display.textContent = pickColor;
	resetbtn.textContent = "New Colors";
	message.textContent = "";
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else { 
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}


function setupSquares() {
		for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function() {
			if(this.style.backgroundColor === pickColor) {
				message.textContent = "Correct";
				resetbtn.textContent = "Play Again?";
				changeColors(this.style.backgroundColor);
				h1.style.backgroundColor = pickColor;
			}
			else {
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
		});
	}
}

// Make an array of random colors 
function generateRandomColors(num) {
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

// Choose a random color to be picked 
function pickedColor() {
	var rand = Math.floor(Math.random() * colors.length);
	return colors[rand];
}

// Generate randome colors
function randomColor() {
	var rand1 = Math.floor(Math.random()* 256);
	var rand2 = Math.floor(Math.random()* 256);
	var rand3 = Math.floor(Math.random()* 256);
	return "rgb(" + rand1 + ", " + rand2 + ", " + rand3 + ")";
}

function changeColors(color) {
	// loop through all squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}