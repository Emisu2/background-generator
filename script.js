var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function generateRandom() {
	var randomR1 = Math.floor(Math.random()*255).toString(16);
	if (randomR1.length < 2) {randomR1 = '0' + randomR1;}
	var randomG1 = Math.floor(Math.random()*255).toString(16);
	if (randomG1.length < 2) {randomG1 = '0' + randomG1;}
	var randomB1 = Math.floor(Math.random()*255).toString(16);
	if (randomB1.length < 2) {randomB1 = '0' + randomB1;}
	var randomR2 = Math.floor(Math.random()*255).toString(16);
	if (randomR2.length < 2) {randomR2 = '0' + randomR2;}
	var randomG2 = Math.floor(Math.random()*255).toString(16);
	if (randomG2.length < 2) {randomG2 = '0' + randomG2;}
	var randomB2 = Math.floor(Math.random()*255).toString(16);
	if (randomB2.length < 2) {randomB2 = '0' + randomB2;}
	var randomColor1 = randomR1+randomG1+randomB1;
	var randomColor2 = randomR2+randomG2+randomB2;
	console.log(randomColor1, randomColor2);
	color1.setAttribute("value", "#" + randomColor1);
	color2.setAttribute("value", "#" + randomColor2);
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", generateRandom);

setGradient();