var images = ["JS/ch0/page1.png", "JS/ch0/page2.png", "JS/ch0/page3.png"]




function imageForward() {
	pageNumber++;
	if(pageNumber == 4){
	pageNumber = 1;
	}

	document.getElementById("main-image").src = images[pageNumber - 1];
	window.scrollTo(0,0)

	
	
	

}

function imageBackward() {
	pageNumber--;
	if(pageNumber == 0){
		pageNumber = 3;
	}

	document.getElementById("main-image").src = images[pageNumber - 1];
	window.scrollTo(0,0)
	
	

}

function getUrlParams( prop ) {
    var params = {};
    var search = decodeURIComponent( window.location.href.slice( window.location.href.indexOf( '?' ) + 1 ) );
    var definitions = search.split( '&' );

    definitions.forEach( function( val, key ) {
        var parts = val.split( '=', 2 );
        params[ parts[ 0 ] ] = parts[ 1 ];
    } );

    return ( prop && prop in params ) ? params[ prop ] : params;
}

URLNumber = getUrlParams("id");
var pageNumber = 1;
if(pageNumber == undefined){

		document.getElementById('main-image').src = images[0];

}

if (URLNumber == undefined){
	pageNumber = 1;
}

if (URLNumber == 1){
	pageNumber = 1;
	document.getElementById('main-image').src = images[pageNumber - 1];
}
if (URLNumber == 2){
	pageNumber = 2;
	document.getElementById('main-image').src = images[pageNumber - 1];
}
if (URLNumber == 3){
	pageNumber = 3;
	document.getElementById('main-image').src = images[pageNumber - 1];
}

console.log(pageNumber)

function spoilerAlive() {
	document.getElementById('spoiler').innerHTML = "Status: Alive";
	document.getElementById('spoiler').style.cursor = "default";
	document.getElementById('spoiler-italic').innerHTML ="";
}

function spoilerDead() {
	document.getElementById('spoiler').innerHTML = "Status: Dead";
	document.getElementById('spoiler').style.cursor = "default";
	document.getElementById('spoiler-italic').innerHTML ="";
}