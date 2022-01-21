var isCrossTurn = true;

function tappedSquare(buttonID){
	let button = document.getElementById(buttonID);
	if button.className = "square"{
		if(isCrossTurn){
			 button.className = "cross"
		 	button.innerHTML = "X"
		} else {
			 button.className = "nought"
		 	 button.innerHTML = "0"
	}
	}
	isCrossTurn = !isCrossTurn;
	
}

function reset(){
	let buttons = document.getElementsByClassName('square');

	for (let i = 0; i < buttons.length; i++){
		buttons[i].className = 'square';
			}
}