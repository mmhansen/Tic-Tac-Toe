$(document).ready(function(){


/////////////////////
// Event Listeners //
/////////////////////

$('#start').click(function(){
	
	if ($('#start').text() == "BEGIN"){
		Materialize.toast('Allright, lets work for '+(app.formatTime(app.work).slice(0,2))+' minutes.', 3000);
		$('#start').html('PAUSE');
		if (!app.isWork){
			app.isWork = true;
		}
		app.startClock();		

	} else if  ($('#start').text() == "PAUSE"){
		$('#start').html("RESUME");
		app.pauseClock();

	} else if ($('#start').text() == "RESUME"){
		$('#start').html("PAUSE");
		app.startClock();
	}


})

$('#Work-Add').click(function(){
	app.addSessionTime();
})
$('#Work-Sub').click(function(){
	app.subSessionTime();
})
$('#Break-Add').click(function(){
	app.addBreakTime();
})
$('#Break-Sub').click(function(){
	app.subBreakTime();
})
$('#Restart').click(function(){
	app.restartClock();
})
$('#fab').mouseenter(function(){
	$('h4').css("visibility", "visible");
	$('#start').css("visibility", "hidden");
})
$('#fab').mouseleave(function(){
	$('h4').removeAttr("style");
	$('#start').removeAttr("style");
})
/////////
// App //
/////////

var app = {
	isWork: false,
	isBreak: false,
	work: 1500,
	break: 300
}

app.startClock = function(){	
	app.runTime = setInterval(function(){
		if (app.isWork) {
			app.work--;
		} 

		if (app.isBreak) {
			app.break--;

		}

		if (app.work == 1) {
			Materialize.toast('Great work! Let\'s take a break', 3000);
		}

		if (app.work === 0) {
			app.isBreak = true;
			app.isWork = null;
			$('h4').css("visibility", "visible");
		}

		if (app.break === 0) {
			app.restartClock();
			Materialize.toast('How about one more session?', 3000);
		}

		app.update();
	}, 1000)
}

app.pauseClock = function(){
	clearInterval(app.runTime);
}

app.restartClock = function(){
app.pauseClock();
app.isWork = false;
app.isBreak = false;
app.work = 1500;
app.break = 300;
$('#start').html('BEGIN');
$('h4').removeAttr("style");
app.update();
}

app.formatTime = function(seconds){
	var hold;

	if (seconds > 0) {
		hold = (app.padTime(Math.floor(seconds/60)) + ":" + app.padTime(seconds%60)); 
	} else {
		hold = "00:00";
	}

	return hold;
	
}

app.padTime = function(num){
	return ('00' + num).slice(-2);
}

app.update = function(){
	$('#session').text(app.formatTime(app.work));
	$('#break').text(app.formatTime(app.break));
}

app.addSessionTime = function(){
	if (app.work < 3600 ){ 
		app.work += 300;
	}
	app.update();
}
app.subSessionTime = function(){
	if (app.work > 300 ){ 
		app.work -= 300;
	}
	app.update();
}
app.addBreakTime = function(){
	if (app.break < 3600 ){ 
		app.break += 300;
	}	
	app.update();
}
app.subBreakTime = function(){
	if (app.break > 300 ){ 
		app.break -= 300;
	}	
	app.update();
}

////////////////
// Initialize //
////////////////

app.update();



})