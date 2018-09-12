var images = ["JS/Prologue/page1.png", "JS/Prologue/page2.png", "JS/Prologue/page3.png"]

x = 0
document.getElementById('main-image').src = images[x];

function imageForward() {
	x = x + 1
	if(x > 2){
		x = 0
	}
	document.getElementById("main-image").src = images[x];
	

}

function imageBackward() {
	x = x - 1
	if(x < 0){
		x = 2
	}

	document.getElementById("main-image").src = images[x];
	

}
