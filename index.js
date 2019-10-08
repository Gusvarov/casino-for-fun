const duo = document.getElementById('duo');
const trio = document.getElementById('trio');
const out = document.getElementById('out');
const duoColor = document.getElementById('duo-color');

function getRandom() {
	return Math.random();
}

trio.addEventListener('click', function casinoThird() {
	if ( getRandom() <= 0.33 ) {
        out.innerText = '1-12';
        document.body.style.color = "green";
        out.style.fontSize = '156px'
        out.style.textAlign = "center";
  } else if ( getRandom() >= 0.33 && getRandom() <= 0.67 ) {
        out.innerText = '12-24';
        document.body.style.color = "green";
        out.style.fontSize = '156px'
        out.style.textAlign = "center";
  } else {
  	    out.innerText = '24-36';
        document.body.style.color = "green";
        out.style.fontSize = '156px'
        out.style.textAlign = "center";
  }
},

duo.addEventListener('click', function casinoDuo() {
	if ( getRandom() <= 0.5 ) {
        duoColor.style.backgroundColor="black";
  } else {
  	    duoColor.style.backgroundColor="red";
  }
}))

