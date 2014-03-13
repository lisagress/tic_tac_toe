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

function displayTurnMessage(player) {
	var message = "Player " + player + ", it's your turn!";
	$("#message").text(message);
}

function displayDrawMessage() {
	var drawMessage = "Bummer, the game is a draw.  Try again.";
	$("#message").text(drawMessage);
}

function displayWinMessage(player) {
	var winMessage = "Player " + player + ", YOU WIN!!";
	$("#message").text(winMessage);
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


function checkGameStatus() {	
	var winningCombinations = [[".top.left", ".top.center", ".top.right"],
								[".middle.left", ".middle.center", ".middle.right"],
								[".bottom.left", ".bottom.center", ".bottom.right"],
								[".top.left", ".middle.left", ".bottom.left"],
								[".top.center", ".middle.center", ".bottom.center"],
								[".top.right", ".middle.right", ".bottom.right"],
								[".top.left", ".middle.center", ".bottom.right"],
								[".top.right", ".middle.center", ".bottom.left"]]
	
	// check for win
	for(i = 0; i < winningCombinations.length; i++) {
		var winFound = checkThreeSquares(winningCombinations[i]);
		if(winFound) {
			return "win";
		}
	}

	// win not found.  check for draw.
	if ($(".selected").length == 9) {
		return "draw";
	}

	// game is neither a win nor a draw.  game continues.
	return;
}

function startNewGame() {
	$(".square").empty();
	$(".square").removeClass("selected");
	var player = currentPlayer();
	displayTurnMessage(player);
}

$(document).ready(function() {
	var player = currentPlayer();
	displayTurnMessage(player);

	$(".square").click(function() {
		selectSquare(this, player);
		var status = checkGameStatus();

		if (status == "win") {
			displayWinMessage(player);
		} else if (status == "draw") {
			displayDrawMessage();
		} else {
			player = currentPlayer();
			displayTurnMessage(player);
		};
	});

	$(".new_game").click(function() {
		startNewGame();
	})
});