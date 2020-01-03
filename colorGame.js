var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.getElementById("messageDisplay");
var h1=document.querySelector("h1");
var resetButton=document.getElementById("resetButton");
var easyButton=document.getElementById("easyButton");
var hardButton=document.getElementById("hardButton");
hardButton.classList.add("selected");

var colors=generateRandomColors(6);
var pickedColor=pickRandomColor();
colorDisplay.textContent=pickedColor;


easyButton.addEventListener("click", function(){
	this.classList.add("selected");
	hardButton.classList.remove("selected");

	colors=generateRandomColors(3);
	pickedColor=pickRandomColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
});

hardButton.addEventListener("click", function(){
	this.classList.add("selected");
	easyButton.classList.remove("selected");

	colors=generateRandomColors(6);
	pickedColor=pickRandomColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.display="initial";
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
});

resetButton.addEventListener("click", function(){
	var currentArrLen=colors.length; // it checks current level of the game
	colors=generateRandomColors(currentArrLen);
	pickedColor=pickRandomColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<colors.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
});

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor==pickedColor){
			messageDisplay.textContent="Right";
			h1.style.backgroundColor=pickedColor;
			changeAllColor(pickedColor);
			resetButton.textContent="Play Again"
		}else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Wrong";
		}
	});
}

function changeAllColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function generateRandomColors(num){
	var arr=[]
	for(var i=0;i<num;i++){
		var r=Math.floor(Math.random() * 256);
		var g=Math.floor(Math.random() * 256);
		var b=Math.floor(Math.random() * 256);
		var rColor="rgb(" + r + ", " + g + ", " + b + ")";
		arr[i]=rColor;
	}

	return arr;
}

function pickRandomColor(){
	//choosing random index from colors array
	var pos=Math.floor(Math.random() * colors.length);
	return colors[pos];
}