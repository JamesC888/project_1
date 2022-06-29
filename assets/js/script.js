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