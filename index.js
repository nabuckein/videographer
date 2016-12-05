$(document).ready(function(){
	console.log("Document READY!");

// -- INITIALIZE VARIABLES AND CONTENT -- ////////////////////////////////////////////////////

hideDynamicContent();
$('.welcomeDiv').show(100);


///////////////////////////////////////////////////////////////////////////////////////////

// -- LOGIC TO SWITCH DYNAMIC CONTENT -- /////////////////////////////////////////////////////

$('.iconVideo').click(function(){

	var icon = this.id.replace("Icon","");
	document.getElementById('secondaryTitle').innerHTML = icon;
	icon = "#" + icon;
	hideDynamicContent();

	$(icon).show(100);

	
});


//////////////////////////////////////////////////////////////////////////////////////////


});


// -- FUNCTION DEFINITIONS -- ///////////////////////////////////////////////////////////

function hideDynamicContent(){
	$('.dynamicContent').hide(100);
}