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

pageNumber = getUrlParams("id");





if (pageNumber == 1){
	x  = 0;
	document.getElementById('main-image').src = images[pageNumber - 1];
}
if (pageNumber == 2){
	x = 1;
	document.getElementById('main-image').src = images[pageNumber - 1];
}
if (pageNumber == 3){
	x = 2;
	document.getElementById('main-image').src = images[pageNumber - 1];
}

