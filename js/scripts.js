$(document).ready(function(){

/////////////////////
// Event Listeners //
/////////////////////
$('#win').click(function(){

})
$('#loss').click(function(){

})
$('#restart').click(function(){
	console.log("true");
	 $('#modal1').openModal();

})
$('#1').click(function(){

})
$('#2').click(function(){

})
$('#3').click(function(){

})
$('#4').click(function(){

})
$('#5').click(function(){

})
$('#6').click(function(){

})
$('#7').click(function(){

})
$('#8').click(function(){

})
$('#9').click(function(){

})

/////////
// App //
/////////

var app = {
	chosenChar : false,
	boardSpaces : ['#','#','#','#','#','#','#','#','#'],
	winningPermutations : [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],	
};

app.showModal = function(){

};
app.hideModal = function(){

}
app.checkWinCondition = function(){

}
app.checkSpaceOccupied = function(){

}




// end doc ready
})