for (i = 0; i < 100; i++) {
	$("body").append("<div>YO</div>");
}

//hover
$("div").hover(function () {

	// $(this).html("YO");
}, function () {
	$(this).html("DUDE");
});

//click
$("div").click(function () {

	var randoSkewX = Math.floor(Math.random() * 100);
	var randoSkewY = Math.floor(Math.random() * 5);
	var randoScale = Math.floor(Math.random()* 10);

	$(this).css("transform", 'scale(' + randoScale + ') ' + 'skew(' + randoSkewX + 'deg,' + randoSkewY + 'deg)');

	console.log(randoSkewX + " " + randoSkewY + " " + randoScale);
});