$(document).ready(function(){
    if(localStorage.getItem("names")){
		var storedNames = JSON.parse(localStorage.getItem("names"));
		var len=storedNames.length;
		for(i=len-1;i>=0;i--){
			$(".bottom").append("<p class='stk'>"+storedNames[i]+"</p>");
		}
	}
	else{
		var names = [];
		localStorage.setItem("names", JSON.stringify(names));	
	}
});

 $(".add").click(function(){
       var storedNames = JSON.parse(localStorage.getItem("names"));
		var len=storedNames.length;
		var innp=$("#inp").val();
		storedNames[len]=innp;
		var names = [];
		names=storedNames;
		localStorage.setItem("names", JSON.stringify(names));
		$(".bottom").prepend("<p class='stk'>"+innp+"</p>");
		$("#inp").val("");
    });
	
 $(".del").click(function(){
       var storedNames = JSON.parse(localStorage.getItem("names"));
		var len=storedNames.length;
		var names = [];
		for(i=len-2;i>=0;i--){
			names[i]=storedNames[i];
		}
		localStorage.setItem("names", JSON.stringify(names));
		$('.bottom').find('p').first().remove();
    });
	
 $(".top").click(function(){
		$(".bot").remove();
    });