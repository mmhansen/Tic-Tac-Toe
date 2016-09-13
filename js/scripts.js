$(document).ready(function(){

/////////////////////
// Event Listeners //
/////////////////////

// menu buttons 
var icon = true;
$('#tie').click(function(){
	if (icon) {
		$(this).html(app.win);
		icon = false;
	} else {
		$(this).html('<i class="material-icons">not_interested</i>')
		icon = true;
	}
	
})

var icon2 = true;
$('#loss').click(function(){
	if (icon2) {
		$(this).html(app.loss);
		icon2 = false;
	} else {
		$(this).html('<i class="material-icons">computer</i>')
		icon2 = true;
	}
})


$('#restart').click(function(){
	 app.restart();
})
// modal buttons
$('#X').click(function(){
	app.userChar = "X";
	app.computerChar = "O";
})
$('#O').click(function(){
	app.userChar = "O";
	app.computerChar = "X";
	// start move sequence for computer
	app.makeMove();
})
// game board

$('.tile').click(function(){
	var clicked = $(this).attr('id');
	if (app.checkSpaceOccupied(clicked)) {
		app.makeMove(clicked);
	}
})


/////////
// App //
/////////

var app = {
	userMoves : [],
	computerMoves : [],
	turn : 1,
	loss : 0,
	tie: 0,
	win: 0
};

app.checkSpaceOccupied = function(id){
	var space = $('#'+id).text();
	if (space) {
		return false;
	} else {
		return true;
	}
}

app.restart = function(){
	// empty board
	$('.tile').text("");
	// reset characters
	app.userChar = null;
	app.computerChar = null;
	app.turn = 1;
	app.userMoves = [];
	app.computerMoves = [];
	// open modal
	$('#modal1').openModal();
	// clear win indicator
	$('.tile').css("color", "white")
}

// triggered on click
app.makeMove = function(id){

	if (app.turn%2 == 1) {
		app.oddMove(id);
	} else {
		app.evenMove(id);
	}




}


app.oddMove = function(id){
	if (app.userChar == "X") {
		$("#"+id).text(app.userChar);
		(app.userMoves).push(app.convertId(id));
		// check after user move
		app.checkWinCondition();

		app.turn++;
		app.makeMove();
	} else {
		setTimeout(function(){app.computer()}, 300);
	}
}

app.evenMove = function(id){

	if (app.userChar == "O") {
		$("#"+id).text(app.userChar);
		(app.userMoves).push(app.convertId(id));
		// check after user move
		app.checkWinCondition();	

		app.turn++;
		app.makeMove();
	} else {
		setTimeout(function(){app.computer()}, 300); 
	}
}


// will make a move whenever it is called
app.computer = function(id){
	function getRandom(){
		return (Math.floor(Math.random()*9))
	}
	var randomIn9 = getRandom(); 
	var options = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

	if (app.checkSpaceOccupied(options[randomIn9])) {
		$("#"+options[randomIn9]).text(app.computerChar);		
		(app.computerMoves).push(app.convertId(options[randomIn9]));

		// check after computer move
		app.checkWinCondition();	

		app.turn++;
	} else {
		app.computer();
	}


}

app.convertId = function(id){
	
	if (id == "one") {
		return 1;
	} else if (id == "two") {
		return 2;
	} else if (id == "three") {
		return 3;
	} else if (id == "four") {
		return 4;
	} else if (id == "five") {
		return 5;
	} else if (id == "six") {
		return 6;
	} else if (id == "seven") {
		return 7;
	} else if (id == "eight") {
		return 8;
	} else if (id == "nine") {
		return 9;
	}
}

app.convertNum = function(number){
	if (number == 1) {
		return "one";
	} else if (number == 2) {
		return "two";
	} else if (number == 3) {
		return "three";
	} else if (number == 4) {
		return "four";
	} else if (number == 5) {
		return "five";
	} else if (number == 6) {
		return "six";
	} else if (number == 7) {
		return "seven";
	} else if (number == 8) {
		return "eight";
	} else if (number == 9) {
		return "nine";
	}
}


app.rtos = function(num){
	var conv = app.convertNum(num);
	return $('#'+conv).text();
}

app.showWin = function(one, two, three) {
	app.userChar = null;
	app.computerChar = null;

	$("#"+(app.convertNum(one))).css("color", "#00BCD4 ");
	$("#"+(app.convertNum(two))).css("color", "#00BCD4 ");
	$("#"+(app.convertNum(three))).css("color", "#00BCD4 ");

}

app.checkWinCondition = function(){
	console.log("user : " + app.userMoves + "\ncomp : " + app.computerMoves + "\nTURN : " + app.turn)

	// push the number clicked into array, check that array if it contains 
	// all 3 numbers in any order, in any winning condition
app.winningPermutations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

(app.winningPermutations).forEach(function(solution) {

		if (app.rtos(solution[0]) == app.computerChar && app.rtos(solution[1]) == app.computerChar && app.rtos(solution[2]) == app.computerChar){
			app.showWin(solution[0], solution[1], solution[2])

			console.log("comp win")
			app.loss++;
			$('#loss').html(app.loss);

		}
		 if (app.rtos(solution[0]) == app.userChar && app.rtos(solution[1]) == app.userChar && app.rtos(solution[2]) == app.userChar){
			app.showWin(solution[0], solution[1], solution[2])

			console.log("user win")
			app.win++;
			$('#tie').html(app.win);
		}


})


}

         



////////////////
// Initialize //
////////////////

app.restart();

// end doc ready
})