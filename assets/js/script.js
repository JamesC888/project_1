function coinCall() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a6818c31a4msh45fd99238bffffap109889jsn1dbd8e8a35cb',
            'X-RapidAPI-Host': 'coin-flip2.p.rapidapi.com'
        }
    };
    
    fetch('https://coin-flip2.p.rapidapi.com/flip', options)
	.then(response => response.json())
	.then(response => flip(response.side === 'heads'? 1: -1))
	.catch(err => console.error(err));
}


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
    var feedbackEl = document.querySelector("#feedback");

function flip(newState) {

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
}, 5000);

// coin flip feedback
// heads
    if (curState !== -1) {
   
      feedbackEl.textContent = "😢😢Loser😢😢";
      feedbackEl.style.color = "red";
      feedbackEl.style.fontSize = "400%";
    } else {
      feedbackEl.textContent = "💰💰Winner💰💰!";
      feedbackEl.style.color = "white";
      feedbackEl.style.fontSize = "400%";
    }
  
    // // flash winner/loser feedback
    var delayInMilliseconds = 5000
    // setTimeout(function(){
    // feedbackEl.setAttribute("class", "feedback");
    // }, delayInMilliseconds);
    
    // setTimeout(function() {
    //     feedbackEl.setAttribute("class", "feedback hide");
    //   }, 7500)
    

    //   tails
    //   if () {
   
    //     feedbackEl.textContent = "😢😢Loser😢😢";
    //     feedbackEl.style.color = "red";
    //     feedbackEl.style.fontSize = "400%";
    //   } else {
    //     feedbackEl.textContent = "💰💰Winner💰💰!";
    //     feedbackEl.style.color = "white";
    //     feedbackEl.style.fontSize = "400%";
    //   }
    
      
      
      setTimeout(function(){
      feedbackEl.setAttribute("class", "feedback");
      }, delayInMilliseconds);
      
      setTimeout(function() {
          feedbackEl.setAttribute("class", "feedback hide");
        }, 7500)

}

//Javascript for modal

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems,);

	// return instances;
});

// var instance = m.Modal.getInstance(elem);

// instance.open();

// instance.close();
var headsCall = document.querySelector('#heads');
var tailsCall = document.querySelector('#tails');

headsCall.addEventListener('click', function() {

coinCall();

});

tailsCall.addEventListener('click', function() {

coinCall();
	
	});

