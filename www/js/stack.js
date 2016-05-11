var checkArray=[];
var emptyArray=[];
$(document).ready(function(){
    if(localStorage.getItem("names")){
		var storedNames = JSON.parse(localStorage.getItem("names"));
		var len=storedNames.length;
		for(i=len-1;i>=0;i--){
			$(".left").append("<p class='stk'>"+storedNames[i]+"</p>");
		}
	}
	else{
		localStorage.setItem("names", JSON.stringify(emptyArray));	
	}   
    
    if(localStorage.getItem("checkArray")){
    	checkArray = JSON.parse(localStorage.getItem("checkArray"));
	}
	else{
		localStorage.setItem("checkArray", JSON.stringify(emptyArray));	
	}
    
    for(i=0;i<checkArray.length;i++){
    	if(!localStorage.getItem(checkArray[i])){
    		localStorage.setItem(checkArray[i], JSON.stringify(emptyArray));
        }
    	addCheckOptionElements(checkArray[i]);
    }
});

 $(".add").click(function(){
	 	addToArray('names');
		var innp=$("#inp").val();
		alert(checkArray.length);
		for(i=0;i<checkArray.length;i++){
			var id=checkArray[i]+"Check";
			alert(document.getElementById(id).checked);
			if(document.getElementById(id).checked){
				alert(checkArray[i]);
				addToArray(checkArray[i]);
			}
		}
		$(".left").prepend("<p class='stk'>"+innp+"</p>");
		$("#inp").val("");
    });
	
 
 $(document).on("click", ".stk", function(){
	 var itemtext=$(this).text();
	 var item=$(this);
	 $(".del").click(function(){
		 deleteFromArray(itemtext,'names');			
			for(i=0;i<checkArray.length;i++){
					deleteFromArray(itemtext,checkArray[i]);
			}
			item.remove();
	 	});
	 $(".top").click(function(){
	       var storedNames = JSON.parse(localStorage.getItem("names"));
			var len=storedNames.length;
			var names = [];
			for(var i=0;i<len;i++)
				{
				if(itemtext==storedNames[i]){
					for(j=i+1;j<len;j++){
						names[j-1]=storedNames[j];
					}
					names[j-1]=itemtext;
					break;
				}
				else
					{
					names[i]=storedNames[i];
					}
				}

			localStorage.setItem("names", JSON.stringify(names));
			item.remove();
			$(".left").prepend(item);
	 	});
	 
	 $(".bot").click(function(){
	       var storedNames = JSON.parse(localStorage.getItem("names"));
			var len=storedNames.length;
			var names = [];
			names[0]=itemtext;
			for(var i=0;i<len;i++)
				{
				if(itemtext==storedNames[i]){
					for(j=i+1;j<len;j++){
						names[j]=storedNames[j];
					}
					break;
				}
				else
					{
					names[i+1]=storedNames[i];
					}
				}

			localStorage.setItem("names", JSON.stringify(names));
			item.remove();
			$(".left").append(item);
	 	});	 

	});
	
function addToArray(arrayName){
	var storedNames = JSON.parse(localStorage.getItem(arrayName));
	var len=storedNames.length;
	var innp=$("#inp").val();
	storedNames[len]=innp;
	var names = [];
	names=storedNames;
	localStorage.setItem(arrayName, JSON.stringify(names));
	
}
function deleteFromArray(itemtext,arrayName){
	var storedNames = JSON.parse(localStorage.getItem(arrayName));
	var len=storedNames.length;
	var names = [];
	for(var i=0;i<len;i++)
		{
		if(itemtext==storedNames[i]){
			for(j=i+1;j<len;j++){
				names[j-1]=storedNames[j];
			}
			break;
		}
		else
			{
			names[i]=storedNames[i];
			}
		}
	localStorage.setItem(arrayName, JSON.stringify(names));
}
$( "#filter" ).change(function() {
	$(".left").empty();
	var filterName=$(this).val();
	var storedNames = JSON.parse(localStorage.getItem(filterName));
	var len=storedNames.length;
	for(i=len-1;i>=0;i--){
		$(".left").append("<p class='stk'>"+storedNames[i]+"</p>");
	}
	});

$(".addClass").click(function(){
    var storedNames = JSON.parse(localStorage.getItem("checkArray"));
		var len=storedNames.length;
		var innp=prompt("Enter");
		storedNames[len]=innp;
		var names = [];
		names=storedNames;
		checkArray=storedNames;
		localStorage.setItem("checkArray", JSON.stringify(names));
		localStorage.setItem(innp, JSON.stringify(emptyArray));
		addCheckOptionElements(innp);		
});

$(".delClass").click(function(){
		var innp=prompt("Enter");
		deleteFromArray(innp,'checkArray');
		localStorage.setItem(innp, JSON.stringify(emptyArray));
		checkArray = JSON.parse(localStorage.getItem("checkArray"));
		delCheckOptionElements(innp);
});

function addCheckOptionElements(innp){
	$(".checkboxDiv").append("<input type='checkbox' class='checkbox' id="+innp+"Check><span id="+innp+"Check>"+innp+"</span>");
	$("#filter").append("<option value="+innp+" id="+innp+"Option>"+innp+"</option>");
}

function delCheckOptionElements(innp){
	$("#"+innp+"Check").remove();
	$("#"+innp+"Check").remove();
	$("#"+innp+"Option").remove();
}
