var images = ["JS/Prologue/page1.png", "JS/Prologue/page2.png", "JS/Prologue/page3.png"]

x = 1

function changeImage() {

	document.getElementById("main-image").src = images[x];
	x = x + 1
	if(x > 2){
		x = 0
	}

}

