window.onload =function(){
	var screen =document.getElementById("screen");
	var btn = document.getElementsByTagName("btn");
	var ul=document.getElementsByTagName("ul");
	btn[0].onclick= function(){
		if(screen.value.length<=0){
			alert("empty");
			return false;
		}
		var newCode=document.createElement("li");
		newCode.innerHTML=screen.value;
		ul.insertBefore(newCode,ul.firstChild);
		
	},
	btn[1].onclick= function(){
		if(screen.value.length<=0){
			alert("empty");
			return false;
		}
		var newCode=document.createElement("li");
		newCode.innerHTML=screen.value;
		ul.appendChild(newCode);
		
	},
	btn[2].onclick= function(){
		
		
	}
}