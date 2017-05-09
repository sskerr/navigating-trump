//Add in external javacript file
$(document).ready(function () { //checks if html is fully loaded
	$("input[type='number']").on("keydown keyup keypress", function (e) {
		if (e.keyCode === 190) {
			e.preventDefault();
		}
	});
	$("#compute").on("click", function (e) {
		e.preventDefault();
		var mango = 0;
		var avocado = 0;
		var tomato = 0;
		var banana = 0;
		var tangerine = 0;
		var strawberry = 0;
		var lime = 0;
		var pineapple = 0;
		var beer = 0;
		var tequila = 0;

		if ($("#mango").val()) {
			mango = parseFloat($("#mango").val());
		}

		if ($("#avocado").val()) {
			avocado = parseFloat($("#avocado").val());
		}

		if ($("#tomato").val()) {
			tomato = parseFloat($("#tomato").val());
		}

		if ($("#banana").val()) {
			banana = parseFloat($("#banana").val());
		}

		if ($("#coffee").val()) {
			coffee = parseFloat($("#coffee").val());
		}

		if ($("#strawberry").val()) {
			strawberry = parseFloat($("#strawberry").val());
		}

		if ($("#strawberry").val()) {
			strawberry = parseFloat($("#strawberry").val());
		}

		if ($("#lime").val()) {
			lime = parseFloat($("#lime").val());
		}

		if ($("#pineapple").val()) {
			pineapple = parseFloat($("#pineapple").val());
		}
		if ($("#beer").val()) {
			beer = parseFloat($("#beer").val());
		}
		if ($("#tequila").val()) {
			tequila = parseFloat($("#tequila").val());
		}




		var total = calculate(mango, avocado, tomato, banana, tangerine, strawberry, lime, pineapple, beer, tequila);

		var sqft = wall(total);


		$("#final-answer").addClass("active");
		$("#final-answer2").addClass("active");
		$("#wall_answer").addClass("active");
		$("#wall_answer2").addClass("active");
		showIt(total, sqft);


	});


});


function calculate(mango, avocado, tomato, banana, coffee, strawberry, lime, pineapple, beer, tequila) {
	var total = (((mango * .50 * delta(.14)) + (avocado * .79 * delta(.23)) + (tomato * .44 * delta(.2)) + (banana * .06 * delta(.15)) + (coffee * .04 * delta(.3)) + (strawberry * .11 * delta(1.96)) + (lime * .41 * delta(.1)) + (pineapple * .06 * delta(1.1)) + (tequila * delta(25)) + (beer * delta(3))) * 48)
	return total
};

function delta(price) {
	return (price * 1.2) - price;
}

function showIt(total, sqft) {
	$("#final-results").text(total.toFixed(2));
	$("#wall").text(sqft.toFixed(2));
};

function wall(total) {
	return (total / 189.39);
};
