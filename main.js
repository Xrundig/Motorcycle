let buttonMaker = document.querySelector(".button-maker");
let pageMaker = document.querySelector(".page-maker");
buttonMaker.onclick = function(event){
	event.preventDefault();
	pageMaker.classList.add("invisible");
	alert('');
}