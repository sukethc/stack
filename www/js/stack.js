var checkArray=[]
$(document).ready(function(){
    if(localStorage.getItem("names")){
		var storedNames = JSON.parse(localStorage.getItem("names"));
		var len=storedNames.length;
		for(i=len-1;i>=0;i--){
			$(".left").append("<p class='stk'>"+storedNames[i]+"</p>");
		}
	}
	else{
		var names = [];
		localStorage.setItem("names", JSON.stringify(names));	
	}
    
    
    if(localStorage.getItem("checkArray")){
    	checkArray = JSON.parse(localStorage.getItem("checkArray"));
	}
	else{
		var emptyArray = [];
		localStorage.setItem("checkArray", JSON.stringify(emptyArray));	
	}
    
    for(i=0;i<checkArray.length;i++){
    	if(!localStorage.getItem(checkArray[i])){
    		var empty=[]
    		localStorage.setItem(checkArray[i], JSON.stringify(empty));
        }
    	
    	$(".checkboxDiv").append("<input type='checkbox' class='checkbox' id="+checkArray[i]+"Check>"+checkArray[i]+"");
    	$("#filter").append("<option value="+checkArray[i]+">"+checkArray[i]+"</option>");

    }
    
    /*if(!localStorage.getItem("cab")){
		var cab = [];
		localStorage.setItem("cab", JSON.stringify(cab));
    }
    if(!localStorage.getItem("home")){
		var home = [];
		localStorage.setItem("home", JSON.stringify(home));
    }
    if(!localStorage.getItem("office")){
    	var office = [];
    	localStorage.setItem("office", JSON.stringify(office));
    }
    if(!localStorage.getItem("boring")){
    	var boring = [];
		localStorage.setItem("boring", JSON.stringify(boring));
    }
    if(!localStorage.getItem("energyburn")){
    	var energyburn = [];
		localStorage.setItem("energyburn", JSON.stringify(energyburn));
    }
    if(!localStorage.getItem("watch")){
    	var watch = [];
		localStorage.setItem("watch", JSON.stringify(watch));
    }*/
});

 $(".add").click(function(){
       var storedNames = JSON.parse(localStorage.getItem("names"));
		var len=storedNames.length;
		var innp=$("#inp").val();
		storedNames[len]=innp;
		var names = [];
		names=storedNames;
		localStorage.setItem("names", JSON.stringify(names));

		/*var checkArray=['cab','home','office','boring','energyburn','watch'];*/
		for(i=0;i<checkArray.length;i++){
			var id=checkArray[i]+"Check";
			if(document.getElementById(id).checked){
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
	       var storedNames = JSON.parse(localStorage.getItem("names"));
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
			

			localStorage.setItem("names", JSON.stringify(names));
			/*var checkArray=['cab','home','office','boring','energyburn','watch'];*/
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
		var innp=prompt();
		storedNames[len]=innp;
		var names = [];
		names=storedNames;
		localStorage.setItem("checkArray", JSON.stringify(names));
		$(".checkboxDiv").append("<input type='checkbox' class='checkbox' id="+innp+"Check>"+innp+"");
		$("#filter").append("<option value="+innp+">"+innp+"</option>");
 });
