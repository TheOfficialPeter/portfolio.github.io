var lastClick = ""
function onClickClass(element) {
	var box = document.getElementById("Box");
	var button = element;

	if (button.innerText == lastClick){
		box.style.padding = "10px 20px 10px 20px";
		box.style.transition = "all .5s";
		lastClick = "";
	}
	else
	{
		lastClick = element.innerText;
		box.style.padding = "10px 20px 150px 20px";
		box.style.transition = "all 1s";
	}
}