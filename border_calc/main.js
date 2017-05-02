//Add in external javacript file
$(document).ready(function () { //checks if html is fully loaded
	$("input[type='number']").on("keydown", function (e) {
		if (e.keyCode === 190) {
			e.preventDefault();
		}
	});
	$("#compute").on("click", function (e) {
		e.preventDefault();
		var mango = parseFloat($("#mango").val());
		var avocado = parseFloat($("#avocado").val());
		var tomato = parseFloat($("#tomato").val());
		var banana = parseFloat($("#banana").val());
		var tangerine = parseFloat($("#tangerine").val());
		var strawberry = parseFloat($("#strawberry").val());
		var lime = parseFloat($("#lime").val());
		var pineapple = parseFloat($("#pineapple").val());
		var beer = parseFloat($("#beer").val());
		var tequila = parseFloat($("#tequila").val());


		var total = calculate(mango, avocado, tomato, banana, tangerine, strawberry, lime, pineapple, beer, tequila);
		var sqft = wall(total);
		//	var wall = wall(wall);

		// var total = 0;
		//
		// $("input[type='number']").each(function () {
		// 	var fruit = $(this);
		// 	var storePrice = parseFloat(fruit.data("storePrice"));
		// 	var likelihood = parseFloat(fruit.data("likelihood"));
		// 	var qty = parseInt(fruit.val());
		//
		// 	var calc = qty * ((storePrice * 1.2) - storePrice);
		//
		// 	total = total + calc;
		// });

		$("#final-answer").addClass("active");
		$("#final-answer2").addClass("active");
		$("#wall_answer").addClass("active");
		$("#wall_answer2").addClass("active");
		showIt(total, sqft);


	});


});


function calculate(mango, avocado, tomato, banana, tangerine, strawberry, lime, pineapple, beer, tequila) {

	return (((mango * .53) * ((1.75 * 1.20) - 1.75)) + ((avocado * .59) * ((1.5 * 1.20) - 1.5)) + ((tomato * .41) * ((.5 * 1.20) - .5)) + ((banana * .03) * ((.20 * 1.2) - .20)) + ((tangerine * .04) * ((.1 * 1.2) - .1)) + ((strawberry * .08) * ((2.5 * 1.2) - 2.5)) + ((lime * .95) * ((.2 * 1.2) - .2)) + ((tequila * .99) + ((25 * 1.2) - 25))) * 48
};

function showIt(total, sqft) {
	$("#final-results").text(total.toFixed(2));
	$("#wall").text(sqft.toFixed(2));
};

function wall(total) {
	return (total / 189.39);
};
