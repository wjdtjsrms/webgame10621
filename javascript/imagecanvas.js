window.addEventListener("load",drawscreen,true);

function drawscreen(){
	var thecanvas=document.getElementById("gamecanvas");
	var Context=thecanvas.getContext("2d");
	var i='F';
	Context.fillStyle="#ff0000";
	Context.fillRect(0,0,1000,700);
	
}
