const duo = document.getElementById('duo');
const trio = document.getElementById('trio');

function getRandom() {
	return Math.random();
}

trio.addEventListener('click', function casinoThird() {
	if ( getRandom() <= 0.33 ) {
  	alert('1-12');
  } else if ( getRandom() >= 0.33 && getRandom() <= 0.67 ) {
  	alert('12-24');
  } else {
  	alert('24-36');
  }
},

duo.addEventListener('click', function casinoDuo() {
	if ( getRandom() <= 0.5 ) {
  	alert('black');
  } else {
  	alert('red');
  }
}))

// casinoDuo();
// casinoThird();