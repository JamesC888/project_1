var coinFlip = document.getElementById('api');

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