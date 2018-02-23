var about = document.getElementById("About");
var hobbies = document.getElementById("BHobbies");
var services = document.getElementById("WorkingAt");
var skills = document.getElementById("Skills");
var aboutDiv = document.getElementsByClassName("Body")[0];
var serDiv = document.getElementsByClassName("SerHob")[0];
function display(path,address)
{
	var cont;
	var myRequest = new XMLHttpRequest();
	myRequest.open('GET',path,false);
	myRequest.onload = function(){
		cont = myRequest.responseText;
// 		console.log(cont);
	};
	myRequest.send();
	if(address === "./about")
	{
		aboutDiv.innerHTML = cont;
		serDiv.innerHTML = "";
	}
	else if(address === "./hobbies")
	{
		aboutDiv.innerHTML = "";
		serDiv.innerHTML = cont;
	}
	else if(address === "./services")
	{
		aboutDiv.innerHTML = "";
		serDiv.innerHTML = cont;
	}
	else if(address === "./skills")
	{
		aboutDiv.innerHTML = "";
		serDiv.innerHTML = cont;
	}
	console.log(address);
	history.pushState({path,address},null,address);
}
// display("html/about.html","./about");
about.addEventListener("click",function(){display("html/about.html","./about");});
hobbies.addEventListener("click",function(){display("html/hobbies.html","./hobbies")});
services.addEventListener("click",function(){display("html/services.html","./services")});
skills.addEventListener("click",function(){display("html/skill.html","./skills")});
window.addEventListener('popstate',function(e)
{
	display(e.state.path, e.state.address);
});