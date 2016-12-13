$(document).ready(function(){
	console.log("Document READY!");

// -- INITIALIZE VARIABLES AND CONTENT -- ////////////////////////////////////////////////////

//hideDynamicContent();
//$('.welcomeDiv').show(50);
dynamicContentDivsArray = ["#Welcome", "#Videos", "#Calendar", "#Pictures", "#Contact"];
for (var i=1; i<=dynamicContentDivsArray.length-1; i++){
	var div = dynamicContentDivsArray[i];
	$(div).addClass("divDisappear");
}


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
	//var dynamicContentDivsArray = ["#Welcome", "#Videos", "#Calendar", "#Pictures", "#Contact"];
	
	for (var n=0; n<=dynamicContentDivsArray.length-1; n++){
		if(dynamicContentDivsArray[n] !== div){
			var hiddenDiv = dynamicContentDivsArray[n];			
			//console.log(hiddenDiv);

			$(hiddenDiv).addClass("divDisappear");
			$(hiddenDiv).removeClass("divAppear");
		}else if(dynamicContentDivsArray[n] === div){
			 
			var shownDiv = dynamicContentDivsArray[n];
			console.log(shownDiv);
			$(shownDiv).css("z-index","-1");
			$(shownDiv).removeClass("divDisappear");
			$(shownDiv).addClass("divAppear");
			
		}
	}
	
}