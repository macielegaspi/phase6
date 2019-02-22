// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
var clue2 = document.getElementById("clue2");
var l1 = document.getElementById("l1");
var l2 = document.getElementById("l2");
var l3 = document.getElementById("l3");
var l4 = document.getElementById("l4");
var l5 = document.getElementById("l5");
var l6 = document.getElementById("l6");
var timer = setInterval( clueTwo, 1000);

function letterN(el){
	document.getElementById("l1").src = "images/letterN.png";
}

function letterA(el){
	document.getElementById("l2").src = "images/letterA.png";
}

function letterS(el){
	document.getElementById("l3").src = "images/letterS.png";
}

function letterT(el){
	document.getElementById("l4").src = "images/letterT.png";
}

function letterL(el){
	document.getElementById("l5").src = "images/letterL.png";
}

function letterI(el){
	document.getElementById("l6").src = "images/letterI.png";
}

function clueTwo(){
	if (document.getElementById("l1").src.match("images/letterN.png"), document.getElementById("l2").src.match("images/letterA.png"), document.getElementById("l3").src.match("images/letterS.png"), document.getElementById("l4").src.match("images/letterT.png"), document.getElementById("l5").src.match("images/letterL.png"), document.getElementById("l6").src.match("images/letterI.png")){
		clue2.classList.remove("opaque");
	}
	else {
		
	}
}

