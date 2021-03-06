var click_count = 0;

let squares = Array(5).fill().map(() => Array(5).fill(0));
// 0 - grey
// 1 - cyan

function set_cyan(row, column) {
	
	toggle(row, column);
	if(row != 0 && row != 4 && column != 0 && column != 4) {
		toggle(row, column-1);
		toggle(row, column+1);
		toggle(row-1, column);
		toggle(row+1, column);
	}
	else if(row == 0 && column == 0) {
		toggle(row, column+1);
		toggle(row+1, column);
	}
	else if(row == 0 && column == 4) {
		toggle(row, column-1);
		toggle(row+1, column);
	}
	else if(row == 4 && column == 0) {
		toggle(row-1, column);
		toggle(row, column+1);
	}
	else if (row == 4 && column == 4) {
		toggle(row-1, column);
		toggle(row, column-1);
	}
	else if(row == 0) {
		toggle(row, column-1);
		toggle(row, column+1);
		toggle(row+1, column);
	}
	else if(column == 0) {
		toggle(row, column+1);
		toggle(row-1, column);
		toggle(row+1, column);
	}
	else if(row == 4) {
		toggle(row-1, column);
		toggle(row, column-1);
		toggle(row, column+1);
	}
	else if(column == 4) {
		toggle(row-1, column);
		toggle(row+1, column);
		toggle(row, column-1);
	}
	//console.log("square_id: " + square_id + " neighbors: " + neighbors);
	
	/*for(id in neighbors) {
		console.log(neighbors[id]);
		var id = "b" + neighbors[id];
		document.getElementById(id).style.backgroundColor = "#34ebd8";
	}*/
	click_count ++;
	document.getElementById("moves").innerHTML = "Number of clicks : " + click_count;

	console.log(squares);
	var cyanCount = 0;
	for (i=0;i<5;i++) {
		for(j=0;j<5;j++) {
			if(squares[i][j] == 1) {
				cyanCount ++;
			}
		}
	}
	if(cyanCount == 25) {
		alert("Congratulations. You have won.");
	}

	play();
}

function toggle(row, column) {
	var id = "b_" + row + "_" + column;
		
    if(squares[row][column] == 0) {
    	squares[row][column] = 1;
    	document.getElementById(id).style.backgroundColor = "#34ebd8";
    }
    else {
    	squares[row][column] = 0;
    	document.getElementById(id).style.backgroundColor = "darkgrey";
    }
}

function start_game() {
	reset_squares();

	var cell = Math.floor(Math.random() * 25);

	var r = Math.round(cell / 5);
	if (r == 5) {
		r = 4;
	}
	var c = cell % 5;
        var id = "b_" + r + "_" + c;
        console.log("cell : " + cell + " r : " + r + " c : " + c + " id : " + id) ;
        document.getElementById(id).style.backgroundColor = "#34ebd8";
	squares[r][c] = 1;
}

function reset_squares() {
	for (i=0;i<5;i++) {
		for(j=0;j<5;j++) {
			var id = "b_" + i + "_" + j;
			document.getElementById(id).style.backgroundColor = "darkgrey";
			squares[i][j] = 0;
		}
	}
	click_count=0;
	document.getElementById("moves").innerHTML = "Number of clicks : 0";

}

function fill_squares() {
	for (i=0;i<5;i++) {
		for(j=0;j<5;j++) {
			var id = "b_" + i + "_" + j;
			document.getElementById(id).style.backgroundColor = "#34ebd8";
			squares[i][j] = 1;
		}
	}
	click_count=0;
	document.getElementById("moves").innerHTML = "Number of clicks : 0";

}

function play() {
    var audio = document.getElementById("playclick");
    audio.play();
}
