var button = document.getElementByClassName('button');
for (var i = 0; i <= button.length; i ++) {
	var buttonInnerText = button[i].innerText;
	alert(buttonInnerText);
}