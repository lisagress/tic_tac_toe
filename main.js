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

$(document).ready(function() {
	var player = currentPlayer();
	displayMessage(player);

	$(".square").click(function() {
		selectSquare(this, player);
		player = currentPlayer();
		displayMessage(player);
	});

	$(".new_game").click(function() {
		$(".square").empty();
		$(".square").removeClass("selected");
	})
});