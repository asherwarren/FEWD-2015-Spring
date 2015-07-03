// Set 'global' variables

var displayScreen;
var currentInput = "";
var digitInput = "";
var blankScreen = "0";

$(document).ready(function() {

	$(".digit").click(onDigitPress);
	$(".operator").click(onOperatorPress);
	$(".equals").click(onEqualsPress);
	$(".clear").click(onClearPress);

	displayScreen = $(".display");

});

// On digit press

function onDigitPress(event) {
	var val = $(this).data("action");

	currentInput += val;
	digitInput += val;
	displayScreen.val(digitInput);

	console.log(this, val);

};

// On operator press

function onOperatorPress(event) {
	var val = $(this).data("action");

	currentInput += val;
	digitInput = "";

	console.log(this, val);
};

// On clear press
function onClearPress(event) {
	currentInput = "";
	digitInput = "";

	displayScreen.val(blankScreen);

};


// On equals press, evaluate equation
function onEqualsPress(event) {
	var result = eval(currentInput);

	displayScreen.val(result);
	currentInput = result;
	digitInput = "";

	console.log(currentInput);

};




