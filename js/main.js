//6a

function howdy() {
	console.log('Hannah Helms says hi!')
	return
}

howdy();

//6b

function numba(string) {
//var numba = function(string);

	if (string.length < 7) {
		console.log ("What a short little word!")
	}

	if  (string.length > 7) {
		console.log ("I'm sorry, but that's too many to count.")
	}

	if (string.length = 7) {
		console.log ("7, what a perfect choice!")
	}
}

numba(7);
numba('seventy');
numba('university');

//6c

//function display(favMovie) {
	//console.log(favMovie + ' is a fantastic movie.')
//}

function display() {
	console.log(favMovie + ' is a fantastic movie.')
	return
}

function inception (display, favMovie){
	display(favMovie);
}

inception('', 'Shrek 2');

display();


//console.log(favMovie + ' is a fantastic movie.')
