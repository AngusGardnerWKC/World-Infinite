var images = ["JS/ch0/page1.png", "JS/ch0/page2.png", "JS/ch0/page3.png"]




function imageForward() {
	pageNumber++;
	document.getElementById("main-image").src = images[pageNumber - 1];
	window.scrollTo(0,0)
	if(pageNumber > 2){
		pageNumber = 0
	}
	
	

}

function imageBackward() {
	pageNumber--;
	document.getElementById("main-image").src = images[pageNumber - 1];
	window.scrollTo(0,0)
	if(pageNumber < 0){
		pageNumber = 2
	}

	
	

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

function removeSpoiler() {
	document.getElementById('spoiler').innerHTML = "Status: Alive";
	document.getElementById('spoiler').style.cursor = "default";
	document.getElementById('spoiler-italic').innerHTML ="";
}