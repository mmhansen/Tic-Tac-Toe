$(document).ready(function(){


/////////////////////
// Event Listeners //
/////////////////////

$('#start').click(function(){
	console.log('true');
	Materialize.toast('Allright, lets work for '+app.work+' minutes.', 3000);
})



/////////
// App //
/////////

var app = {
	running: false,
	work: 25,
	break: 5
}
/*
app.startClock = function(){

}
app.pauseClock = function(){
	
}
app.restartClock = function(){

}
app.addSessionTime = function(){

}
app.subSessionTime = function(){
	
}
app.addBreakTime = function(){
	
}
app.subBreakTime = function(){
	
}
*/


})