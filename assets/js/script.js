var coinFlip = document.getElementById('api');

<html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
  </head>
  <body>
    <div id="gradient" />
 </body>
</html>

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a6818c31a4msh45fd99238bffffap109889jsn1dbd8e8a35cb',
		'X-RapidAPI-Host': 'coin-flip2.p.rapidapi.com'
	}
};

fetch('https://coin-flip2.p.rapidapi.com/flip', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


//SportsAPI (Sports,Teams,Events,Data)
//Sport List
var sportlist = document.getElementsByClassName("box NFL");
const list = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'beeb917b33msh5fc7c425b542b12p1cd17ejsna253aba31551',
		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
	}
};

fetch('https://sportscore1.p.rapidapi.com/sports', list)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//Teams by sport
const teams = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'beeb917b33msh5fc7c425b542b12p1cd17ejsna253aba31551',
		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
	}
};

fetch('https://sportscore1.p.rapidapi.com/sports/1/teams?page=1', teams)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//Events live by sport ID
const events = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'beeb917b33msh5fc7c425b542b12p1cd17ejsna253aba31551',
		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
	}
};

fetch('https://sportscore1.p.rapidapi.com/sports/1/events/live?page=1', events)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//Sports Data
const data = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'beeb917b33msh5fc7c425b542b12p1cd17ejsna253aba31551',
		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
	}
};

fetch('https://sportscore1.p.rapidapi.com/sports/1', data)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    var curState = 1;
function temp() {
	document.getElementsByTagName("button")[0].disabled = true;
	document.getElementsByClassName("coin")[0].className += " headToTail";
}
function flip() {
	var newState = Math.random() >= 0.5 ? 1 : -1;
	document.getElementsByTagName("button")[0].disabled = true;
	if (curState == 1) {
    if (newState == 1) {
	document.getElementsByClassName("coin")[0].className += " headToHead";
    }
    else {
    document.getElementsByClassName("coin")[0].className += " headToTail";
    }
	}
	else {
    if (newState == 1) {
    document.getElementsByClassName("coin")[0].className += " tailToHead";
    }
    else {
    document.getElementsByClassName("coin")[0].className += " tailToTail";
    }
	}
	curState = newState;
	setTimeout(function () {
    document.getElementsByClassName("coin")[0].className = "coin" + (curState == -1 ? " bwd" : "");
    document.getElementsByTagName("button")[0].disabled = false;
	}, 7000);
}

var colors = new Array(
	[20,10,255],
	[60,10,60],
	[10,35,98],
	[45,175,10],
	[255,0,70],
	[255,10,0]);
  
  var step = 0;
  //color table indices for: 
  // current color left
  // next color left
  // current color right
  // next color right
  var colorIndices = [0,1,2,3];
  
  //transition speed
  var gradientSpeed = 0.002;
  
  function updateGradient()
  {
	
	if ( $===undefined ) return;
	
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";
  
   $('#gradient').css({
	 background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
	  background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
	
	step += gradientSpeed;
	if ( step >= 1 )
	{
	  step %= 1;
	  colorIndices[0] = colorIndices[1];
	  colorIndices[2] = colorIndices[3];
	  
	  //pick two new target color indices
	  //do not pick the same as the current one
	  colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
	  colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
	  
	}
  }
  
  setInterval(updateGradient,10);