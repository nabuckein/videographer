$(document).ready(function(){
	console.log("Document READY!");

	videosId = [];
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
		//document.getElementById('secondaryTitle').innerHTML = icon;
		icon = "#" + icon;
		//hideDynamicContent();

		//$(icon).show(100);
		
		dynamicDivSelect(icon);



		if(icon === "#Videos"){

			

			$.ajax({ //request to wiki API

		      url: 'https://api.dailymotion.com/user/hd_sz/videos',
		      
		      success: function(x) {

		        var elementClassNames = document.getElementsByClassName("dynamic-content-paragraphs");

		        for (var n=0; n<=x.list.length-1; n++){
		        	
		        	videosId.push(x.list[n].id);
		        	var newPElement = document.createElement('p');
		        	newPElement.id = "videoTitle" + n;	
		        	
		        	newPElement.className = "dynamic-paragraphs-text-sizes";
		        	var newPElementTitle = document.createTextNode(x.list[n].title);
		        	if(x.list[n].title !== undefined){
		        		newPElement.appendChild(newPElementTitle);
		        		elementClassNames[0].appendChild(newPElement);
		        	}
		        	//var newAppendedElement = document.getElementById(newPElement.id);
		        	//newAppendedElement.addEventListener("click",elementClicked(),false);
		        	
		        }
		        
		      }

		    }).done(function(){
		    	//document.querySelectorAll('.dynamic-paragraphs-text-sizes')
		    	//makeVideosLoadedAvailable();
		    });



		}
		

		
	});


	//////////////////////////////////////////////////////////////////////////////////////////
	// -- LOGIC LOAD VIDEOS -- ///////////////////////////////////////////////////////////////
	
	$('.dynamic-content-paragraphs').on("click","p",function(event){

		var videoClicked = this.id.replace("videoTitle","");
		console.log(videosId[videoClicked]);	

		$.ajax({
			url: 'https://api.dailymotion.com/video/' + videosId[videoClicked] + "?fields=url" ,
			success: function(y){
				console.log(y);
			}
		});

	});
		
	

});

function makeVideosLoadedAvailable(){
	$('.dynamic-paragraphs-text-sizes').click(function(){
			console.log("Video title clicked!!");
			/*
			$.ajax({ //request to wiki API

			      url: 'https://api.dailymotion.com/user/hd_sz/videos' + videosId[0],
			      
			      success: function(x) {

			        		        
			        console.log(x);
			      }

			    });
			    */	

		});
}

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
			$(shownDiv).css("z-index","99");
			$(shownDiv).removeClass("divDisappear");
			$(shownDiv).addClass("divAppear");
			if(shownDiv === "#Pictures"){
				$("video").css({"opacity":"0.2","background-color":"black"});
			}else{
				$("video").css("opacity","1.0");
			}
			
		}
	}
	
}