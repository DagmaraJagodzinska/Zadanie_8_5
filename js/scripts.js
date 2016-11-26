// plik scripts.js

var a = prompt('Podaj a');
var b = prompt('Podaj b');
value = (a*a) + (2 * a * b) - (b*b);
console.log('Wynik równy jest: ' + value);

if (value>0) {
	console.log('Wynik jest dodatni');
}
else if (value=0) {
	console.log('Wynik równa się 0');
}
else {
	console.log('Wynik jest ujemny');
}

