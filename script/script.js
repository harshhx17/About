var stat1 = 0;
var stat2 = 0;
display1();
var hobb = document.getElementById("BHobbies");
var about = document.getElementById("About");
function display1()
{
	var myRequest1 = new XMLHttpRequest();
	myRequest1.open('GET','html/about.html',false);
	var cont1;
	/*important to make it false(makes it synchronous), otherwise the value of cont2 was being received afterwards the cont of the div was being set beforehand.*/
	myRequest1.onload = function (){
		cont1 = myRequest1.responseText;
	}
	myRequest1.send();
	var ser1 = document.getElementsByClassName("Body")[0];
	if(stat1 === 0)
	{
		ser1.innerHTML = cont1;
		stat1 = 1;
	}
	else
	{
		ser1.innerHTML = "";
		stat1 = 0;
	}
	history.pushState({stat1,stat2},null,'./about');
}
function display2()
{
	var cont2;
	var myRequest2 = new XMLHttpRequest();
	myRequest2.open('GET','html/hobbies.html',false);
	myRequest2.onload = function (){
		cont2 = myRequest2.responseText;
	};
	myRequest2.send();
	var ser2 = document.getElementsByClassName("SerHob")[0];
	if(stat2 === 0)
	{
		ser2.innerHTML = cont2;
		stat2 = 1;
	}
	else
	{
		ser2.innerHTML = "";
		stat2 = 0;
	}
	history.pushState({stat1,stat2},null,'./hobbies');

}
hobb.addEventListener("click",display2);
about.addEventListener("click",display1);
window.addEventListener('popstate',function(e)
{
	console.log(e);
	stat1 = (e.state.stat1 + 1)%2;
	stat2 = (e.state.stat2 + 1)%2;
	display1();
	display2();
});