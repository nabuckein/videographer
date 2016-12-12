$(document).ready(function(){
	console.log("Document READY!");

// -- INITIALIZE VARIABLES AND CONTENT -- ////////////////////////////////////////////////////

//hideDynamicContent();
$('.welcomeDiv').show(50);



///////////////////////////////////////////////////////////////////////////////////////////

// -- LOGIC TO SWITCH DYNAMIC CONTENT -- /////////////////////////////////////////////////////

$('.iconVideo').click(function(){
	
	var icon = this.id.replace("Icon","");
	document.getElementById('secondaryTitle').innerHTML = icon;
	icon = "#" + icon;
	//hideDynamicContent();

	//$(icon).show(100);
	
	dynamicDivSelect(icon);
	console.log(icon + "CLICKED")


	
});


//////////////////////////////////////////////////////////////////////////////////////////


});


// -- FUNCTION DEFINITIONS -- ///////////////////////////////////////////////////////////

function hideDynamicContent(){
	$('.dynamicContent').hide(50);
}
var firsPass = 0;
function dynamicDivSelect(div){
	var dynamicContentDivsArray = ["#Welcome", "#Videos", "#Calendar", "#Pictures", "#Contact"];
	
	for (var n=0; n<=dynamicContentDivsArray.length-1; n++){
		if(dynamicContentDivsArray[n] !== div){
			var hiddenDiv = dynamicContentDivsArray[n];			
			//console.log(hiddenDiv);
			$(hiddenDiv).addClass("divDisappear");
			$(hiddenDiv).removeClass("divAppear");
		}else if(dynamicContentDivsArray[n] === div){
			 
			var shownDiv = dynamicContentDivsArray[n];
			console.log(shownDiv);
			$(shownDiv).removeClass("divDisappear");
			$(shownDiv).addClass("divAppear");
			
		}
	}
	
}