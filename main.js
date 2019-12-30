const $fahrenheitDisplay = $('#fahrenheit'),
	$convertButton = $('button');

function calculateFahrenheit(e) {
	const celsius = $('#celsius').val(),
	fahrenheit = 32 + (celsius * 9) / 5;

	e.preventDefault();
	$fahrenheitDisplay.val(fahrenheit);
}

function bindUiEvents() {
	$convertButton.on('click', (e) => calculateFahrenheit(e));
}

bindUiEvents();