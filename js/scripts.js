$(document).ready(function(){

/////////////////////
// Event Listeners //
/////////////////////

// menu buttons 
$('#win').hover(function(){
	//$(this).toggleClass();
})
$('#loss').hover(function(){
	//$(this).toggleClass();
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
	boardSpaces : ['#','#','#','#','#','#','#','#','#'],
	winningPermutations : [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],
	userMoves : [],
	computerMoves : [],
	turn : 1,
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
	// open modal
	$('#modal1').openModal();
}

// triggered on click
app.makeMove = function(id){
	// user odd turn (X)
	if (app.userChar == "X"){
		if (app.turn%2 == 1){
			$("#"+id).text(app.userChar);
			(app.userMoves).push(app.convertId(id));
			
		// even turn (O)
		} else {
			app.computer();
			(app.computerMoves).push(app.convertId(id));
		}
	} else {
		// computer odd turn
		if (app.turn%2 == 1){
			app.computer();
			(app.computerMoves).push(app.convertId(id));
		// even turn (O)
		} else {
			$("#"+id).text(app.userChar);
			(app.userMoves).push(app.convertId(id));
			
		}
	}

app.turn++


}


app.computer = function(){
	function getRandom(){
		return (Math.floor(Math.random()*9))
	}
	var randomIn9 = getRandom(); 
	var options = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

	if (app.checkSpaceOccupied(options[randomIn9])) {
		$("#"+options[randomIn9]).text(app.computerChar);
	} else {
		app.computer();
	}


}

app.convertId = function(id){
	var square;
	
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

app.checkWinCondition = function(){

	// push the number clicked into array, check that array if it contains all 3 numbers in any order, in any winning condition

}




////////////////
// Initialize //
////////////////

app.restart();

// end doc ready
})