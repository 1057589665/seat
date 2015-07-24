$(function() {
	$(".back").on("click", function() {
		if (history.length > 1) {
			history.back();
		} else {
			location.href = "line.html";
		}
	});
})