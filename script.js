var cssView = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");
var randomBtn = document.getElementById("randomColors");
var testing = document.querySelector("h4");
var char = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A", "B", "C","D", "E", "F"]


function setGradientBackground(){

	body.style.background =
	"linear-gradient(to right, "
	 + color1.value 
	 + ", " 
	 + color2.value 
	 + ")";
 	cssView.textContent = body.style.background + ";";
}

setGradientBackground()

function setColor1(){
	var colorKey = "#";

	for(let i = 0; i < 6; i++){
		var index = Math.floor(Math.random()* char.length);
		colorKey = colorKey + char[index]
	}
	color1.value = colorKey
}

function setColor2() {
	var colorKey = "#";
	for(let i = 0; i < 6; i++){
		var index = Math.floor(Math.random()* char.length);
		colorKey = colorKey + char[index]
	}
	color2.value = colorKey
}

function setRandomHexColors(){
	setColor1();
	setColor2();
	setGradientBackground()

}

randomBtn.addEventListener("click", setRandomHexColors);
color1.addEventListener("input", setGradientBackground);
color2.addEventListener("input", setGradientBackground);