var about = document.getElementById("About");
var hobbies = document.getElementById("BHobbies");
var services = document.getElementById("WorkingAt");
var skills = document.getElementById("Skills");
var aboutDiv = document.getElementsByClassName("Body")[0];
var serDiv = document.getElementsByClassName("SerHob")[0];
function display(path,address,type)
{
	var cont;
	var myRequest = new XMLHttpRequest();
	myRequest.open('GET',path,false);
	myRequest.onload = function(){
		cont = myRequest.responseText;
// 		console.log(cont);
	};
	myRequest.send();
	if(address == "./about")
	{
		aboutDiv.innerHTML = cont;
		serDiv.innerHTML = "";
	}
	else if(address == "./hobbies")
	{
		aboutDiv.innerHTML = "";
		serDiv.innerHTML = cont;
	}
	else if(address == "./services")
	{
		aboutDiv.innerHTML = "";
		serDiv.innerHTML = cont;
	}
	else if(address == "./skills")
	{
		aboutDiv.innerHTML = "";
		serDiv.innerHTML = cont;
	}
	console.log(address);
	if(type==1){
		history.pushState({path,address},"pushed",address);
	}
}
// display("html/about.html","./about");
about.addEventListener("click",function(){display("html/about.html","./about");},1);
hobbies.addEventListener("click",function(){display("html/hobbies.html","./hobbies")},1);
services.addEventListener("click",function(){display("html/services.html","./services")},1);
skills.addEventListener("click",function(){display("html/skill.html","./skills")},1);
window.addEventListener('popstate',function(e)
{
	if(e.state.path != null)
		display(e.state.path, e.state.address,0);
	else 
	{
		aboutDiv.innerHTML="";
		serDiv.innerHTML="";
	}
});