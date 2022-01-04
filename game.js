var crossIsCurrentlyPlaying = true

function tappedSquare(id) {
	var button = document.getElementById(id);

	if (crossIsCurrentlyPlaying){
		button.classname = "cross"
	} else{
		button.classname = "nought"
	}

	console.log(crossIsCurrentlyPlaying)

	crossIsCurrentlyPlaying = !crossIsCurrentlyPlaying
}