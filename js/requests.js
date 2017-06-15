var pokeXhr = new XMLHttpRequest();
pokeXhr.open('GET', 'http://pokeapi.co/api/v2/pokemon/?limit=151');

pokeXhr.onreadystatechange = function () {
	if(pokeXhr.readyState === 4) {
		
		var pokemon = JSON.parse(pokeXhr.responseText);
		
		var pokeHTML = '<div id="gallery">';
		
		for (var i=0; i < pokemon.results.length; i+= 1) {

			var pokeName = pokemon.results[i].name;
			var pokeURL = pokemon.results[i].url;
			
			pokeHTML += ' <a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + parseInt(i+1) + '.png" data-lightbox="gallery" data-title="' + pokeName + '</br>' + pokeURL + '"> ';
				
			pokeHTML += '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + parseInt(i+1) + '.png">';
			pokeHTML += ' </a>';							
		}
		
		pokeHTML += '</div>';
		document.getElementById('pokeWrap').innerHTML = pokeHTML;
	}
};

pokeXhr.send();