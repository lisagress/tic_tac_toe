$(document).ready(function() {
	$(".square").click(function() {
		var player = currentPlayer();
		selectSquare(this, player);
	});

	$(".new_game").click(function() {
		$(".square").empty();
		$(".square").removeClass("selected");
	})
});

function selectSquare(obj, player) {
	if ($(obj).hasClass("selected")) {
		alert("That square has already been selected!");
	} else {
		$(obj).append(player);
		$(obj).addClass("selected");
	};
};

function currentPlayer() {
	if ($(".selected").length % 2 == 0) {
		return "x";
	} else {
		return "o";
	}
}; 