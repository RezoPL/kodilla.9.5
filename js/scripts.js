var buttonClass = dokument.getElementByClassName('button');
var buttonClassLength = buttonClass.length;
for (var i= 0; i <= buttonClass.length ; i++) {
	var buttonInnerText = buttonClass[i].innerText;
	alert(buttonInnerText);
}