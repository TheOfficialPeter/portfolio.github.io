var lastClick = "";
var loaded = false;

function svg() {
	//grow the svg
	var svg = document.getElementById("svg");
	svg.style.margin = "0 0 0 0";
	svg.style.transform = "rotate(180deg)";
	svg.style.transition = "all 1s";
	setTimeout(function() {
		loaded = true;
	}, 1000);
}

function onClickClass(element) {
	var box = document.getElementById("Box");
	var button = element;
	var content = document.getElementById("Content");

	if (button.innerText == lastClick){
		content.style.height = "0px";
		content.innerText = "";
		content.style.transition = "all .5s";
		box.style.padding = "10px 20px 10px 20px";
		box.style.transition = "all .5s";
		lastClick = "";
	}
	else
	{
		lastClick = element.innerText;
		content.style.height = "100px";
		content.innerText = "";
		content.style.transition = "all .5s";
		box.style.padding = "10px 20px 150px 20px";
		box.style.transition = "all 1s";
	}
}

window.onload = svg();
