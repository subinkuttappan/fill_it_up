var click_count = 0;

function set_cyan(square_id) {
	
	neighbors = [];
	if(square_id % 5 != 1) {
		neighbors.push(square_id - 1);
	}

	if(square_id % 5 != 0) {
		neighbors.push(square_id + 1);
	}

	if(square_id > 5) {
		neighbors.push(square_id - 5);
	}

	if(square_id <=20) {
		neighbors.push(square_id + 5);
	}
	console.log("square_id: " + square_id + " neighbors: " + neighbors);
	
	for(id in neighbors) {
		console.log(neighbors[id]);
		var id = "b" + neighbors[id];
		document.getElementById(id).style.backgroundColor = "#34ebd8";
		/*switch(neighbors[id]) {
			case 1 : document.getElementById("b1").style.backgroundColor = "#34ebd8";break;
			case 2 : document.getElementById("b2").style.backgroundColor = "#34ebd8";break;
			case 3 : document.getElementById("b3").style.backgroundColor = "#34ebd8";break;
			case 4 : document.getElementById("b4").style.backgroundColor = "#34ebd8";break;
			case 5 : document.getElementById("b5").style.backgroundColor = "#34ebd8";break;
			case 6 : document.getElementById("b6").style.backgroundColor = "#34ebd8";break;
			case 7 : document.getElementById("b7").style.backgroundColor = "#34ebd8";break;
			case 8 : document.getElementById("b8").style.backgroundColor = "#34ebd8";break;
			case 9 : document.getElementById("b9").style.backgroundColor = "#34ebd8";break;
		}*/
	}
	click_count ++;
	document.getElementById("moves").innerHTML = "Number of clicks : " + click_count;
}

function reset_squares() {
	for (i=1;i<=25;i++)
	{
		var id = "b" + i;
		document.getElementById(id).style.backgroundColor = "darkgrey";
	}
	click_count=0;
	document.getElementById("moves").innerHTML = "Number of clicks : 0";

}
