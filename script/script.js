var about = document.getElementById("About");
var hobbies = document.getElementById("BHobbies");
var services = document.getElementById("WorkingAt");
var skills = document.getElementById("Skills");
var aboutDiv = document.getElementsByClassName("Body")[0];
var serDiv = document.getElementsByClassName("SerHob")[0];
var state = 1,toggle = 0;
function display(path,address,type)
{
	var cont;
	var myRequest = new XMLHttpRequest();
	myRequest.open('GET',path,false);
	myRequest.onload = function(){
		cont = myRequest.responseText;
	};
	myRequest.send();
	if(address == "./about" && state != 1)
	{
		aboutDiv.innerHTML = cont;
		serDiv.innerHTML = "";
		toggle = 1;
		state = 1;
	}
	else if(address == "./hobbies" && state != 2)
	{
		aboutDiv.innerHTML = "";
		serDiv.innerHTML = cont;
		toggle = 1;
		state = 2;
	}
	else if(address == "./services" && state != 3)
	{
		aboutDiv.innerHTML = "";
		serDiv.innerHTML = cont;
		toggle = 1;
		state = 3;
	}
	else if(address == "./skills" && state!=4)
	{
		aboutDiv.innerHTML = "";
		serDiv.innerHTML = cont;
		toggle = 1;
		state = 4;
	}
	console.log(address);
	console.log(type);
	if(type==1 && toggle==1){
		history.pushState({path,address},"pushed",address);
		toggle = 0;
		console.log(state);
	}
}
about.addEventListener("click",function(){display("html/about.html","./about",1);});
hobbies.addEventListener("click",function(){display("html/hobbies.html","./hobbies",1)});
services.addEventListener("click",function(){display("html/services.html","./services",1)});
skills.addEventListener("click",function(){display("html/skill.html","./skills",1)});
window.addEventListener('popstate',function(e)
{
	if(e.state != null)
		display(e.state.path, e.state.address,0);
	else 
	{
		display("html/about.html","./about",0);
	}
});