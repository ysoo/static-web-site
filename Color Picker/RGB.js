var colors = generateRandomColors(6);
var pickedColor = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var message = document.getElementById("message");
var resetbutton = document.querySelector("#newcolors");
var h1 = document.querySelector("h1");
var easybtn = document.getElementById("easybtn");
var hardbtn = document.getElementById("hardbtn");

colorDisplay.textContent = pickedColor;

hardbtn.classList.add("selected");

easybtn.addEventListener("click", function() {
	
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
});
hardbtn.addEventListener("click", function() {
	
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
});

resetbutton.addEventListener("click", function(){
	colors = generateRandomColors(6);
	pickedColor = pickedColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
});











