var isCrossTurn = true;

function tappedSquare(buttonID){
	let button = document.getElementById(buttonID);
	if(isCrossTurn){
		let button.className = "square cross";
		let button.innerHTML = "X";
	} else {
		let button.className = "square nought";
		let button.innerHTML = "0";
	}
	
	isCrossTurn = !isCrossTurn;
	
}

function reset(){
	let buttons = document.getElementsByClassName('square');

	for (let i = 0; i < buttons.length; i++){
		buttons[i].className = 'square';
			}
}