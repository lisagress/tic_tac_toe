function selectSquare(obj, player) {
	if ($(obj).hasClass("selected")) {
		alert("That square has already been selected!");
	} else {
		$(obj).append(player);
		$(obj).addClass("selected");
	};
}

function currentPlayer() {
	if ($(".selected").length % 2 == 0) {
		return "x";
	} else {
		return "o";
	}
}

function displayMessage(player) {
	var message = "Player " + player + ", it's your turn!";
	$("#message").text(message);
}

function checkThreeSquares(squares) {
	var square1 = squares[0];
	var square2 = squares[1];
	var square3 = squares[2];

	if($(square1).hasClass("selected") && ($(square1).text() == $(square2).text() && $(square1).text() == $(square3).text())) {
		return true;
	} else {
		return false;
	};
}

function checkForWin() {	
	var winningCombinations = [[".top.left", ".top.center", ".top.right"],
								[".middle.left", ".middle.center", ".middle.right"],
								[".bottom.left", ".bottom.center", ".bottom.right"],
								[".top.left", ".middle.left", ".bottom.left"],
								[".top.center", ".middle.center", ".bottom.center"],
								[".top.right", ".middle.right", ".bottom.right"],
								[".top.left", ".middle.center", ".bottom.right"],
								[".top.right", ".middle.center", ".bottom.left"]]
	for(i = 0; i < winningCombinations.length; i++) {
		var winFound = checkThreeSquares(winningCombinations[i]);
		if(winFound) {
			return true;
		};
	}
	return false;
}


$(document).ready(function() {
	var player = currentPlayer();
	displayMessage(player);

	$(".square").click(function() {
		selectSquare(this, player);
		var win = checkForWin();

		if (win) {
			var winMessage = "Player " + player + ", YOU WIN!!";
			$("#message").text(winMessage);
		} else {
			player = currentPlayer();
			displayMessage(player);
		};
	});

	$(".new_game").click(function() {
		$(".square").empty();
		$(".square").removeClass("selected");
		$("#message").empty();
	})
});