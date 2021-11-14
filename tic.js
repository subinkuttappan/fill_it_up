function set_cyan(square_id) {
	console.log("square_id: " + square_id);
	for(id in square_id) {
		console.log(square_id[id]);
		switch(square_id[id]) {
			case 1 : document.getElementById("b1").style.backgroundColor = "#34ebd8";break;
			case 2 : document.getElementById("b2").style.backgroundColor = "#34ebd8";break;
			case 3 : document.getElementById("b3").style.backgroundColor = "#34ebd8";break;
			case 4 : document.getElementById("b4").style.backgroundColor = "#34ebd8";break;
			case 5 : document.getElementById("b5").style.backgroundColor = "#34ebd8";break;
			case 6 : document.getElementById("b6").style.backgroundColor = "#34ebd8";break;
			case 7 : document.getElementById("b7").style.backgroundColor = "#34ebd8";break;
			case 8 : document.getElementById("b8").style.backgroundColor = "#34ebd8";break;
			case 9 : document.getElementById("b9").style.backgroundColor = "#34ebd8";break;
		}
	}
	//document.getElementById("b9").value = "0";
}

function set_grey(square_id) {
	switch(square_id) {
		case 1 : document.getElementById("b1").style.backgroundColor = "darkgrey";break;
		case 2 : document.getElementById("b2").style.backgroundColor = "darkgrey";break;
		case 3 : document.getElementById("b3").style.backgroundColor = "darkgrey";break;
		case 4 : document.getElementById("b4").style.backgroundColor = "darkgrey";break;
		case 5 : document.getElementById("b5").style.backgroundColor = "darkgrey";break;
		case 6 : document.getElementById("b6").style.backgroundColor = "darkgrey";break;
		case 7 : document.getElementById("b7").style.backgroundColor = "darkgrey";break;
		case 8 : document.getElementById("b8").style.backgroundColor = "darkgrey";break;
		case 9 : document.getElementById("b9").style.backgroundColor = "darkgrey";break;

	}
	console.log("set_grey : " + square_id);
}

function reset_squares() {
	document.getElementById("b1").style.backgroundColor = "darkgrey";
	document.getElementById("b2").style.backgroundColor = "darkgrey";
	document.getElementById("b3").style.backgroundColor = "darkgrey";
	document.getElementById("b4").style.backgroundColor = "darkgrey";
	document.getElementById("b5").style.backgroundColor = "darkgrey";
	document.getElementById("b6").style.backgroundColor = "darkgrey";
	document.getElementById("b7").style.backgroundColor = "darkgrey";
	document.getElementById("b8").style.backgroundColor = "darkgrey";
	document.getElementById("b9").style.backgroundColor = "darkgrey";
}
