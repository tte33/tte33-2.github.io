var isCrossTurn = true;

var WINNING_SCRIPTS = ["abc", "def", "ghi", "adg", "beh", "cfi", "aei", "ceg"]

var noughtsSquares = [];
var crossSquares = [];

var winner = "";

function winners(){
	for(var i = 0; i < WINNING_SCRIPTS.length; i++){
		for(var j = 0; j < 3; j++){
			if (WINNING_SCRIPTS[i[j]] in noughtsSquares){

				//something
			}

			else if (WINNING_SCRIPTS[i] in crossSquares){
				//something else

			}
		}
	}
}

function containsEveryLetter(testString, smallString){
	for (const letter of smallString){
		if (testString.includes(letter)){
			console.log(letter);
			continue;
		} else {
			return false;
		}
	}

	return true;

}

function hasWon(playerString){
// 	go through every winning line to see if it occurs in noughts or crosses squares
	for (const line of WINNING_SCRIPTS) {
		if (containsEveryLetter(playerString, line)){
			return true;
		} else {
			continue;
		}
	}
	return false;
}

function checkForAWinner(){
	if (hasWon(noughtsSquares)){
		winner = "noughts win!";
	} else if (hasWon(crossSquares)){
		winner = "crosses win!";
	}
}

function displayWinner() {
	var banner = document.getElementById(winner);
	if (isCrossTurn){
		console.log('crosses wins!');
	} else {
		console.log('noughts wins!');
	}
}

function tappedSquare(buttonID){
	var button = document.getElementById(buttonID);

// 	check to see if the button
	if(button.className == "square cross" || button.className == "square nought"){
		console.log("tried to click on an occupied square!");
		return;
	}

	if(isCrossTurn){
		button.className = "square cross";
        button.innerHTML = "x";
        crossSquares += buttonID;
				console.log(crossSquares);
	} else {
		button.className = "square nought";
        button.innerHTML = "o";
        noughtsSquares += buttonID;
	}			console.log(noughtsSquares);

	checkForAWinner()

	if (winner != "") {
		displayWinner()
	}

	isCrossTurn = !isCrossTurn;
}






function reset(){
    //reset the buttons!
    var buttons = document.getElementsByClassName("square");

    for(var i=0; i < buttons.length; i++){
        buttons[i].className = "square";
        buttons[i].innerHTML = "";
				console.log("reset")
    }
    isCrossTurn = true;
}
