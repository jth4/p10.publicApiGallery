var pokeXhr = new XMLHttpRequest();
pokeXhr.open('GET', 'http://pokeapi.co/api/v2/pokemon/');

pokeXhr.onreadystatechange = function () {
	if(pokeXhr.readyState === 4) {
		
		var pokemon = JSON.parse(pokeXhr.responseText);
		var pokeHTML = '<div id="gallery">';
		var pokeStats = {};
		
			for (var i=0; i < pokemon.results.length; i+= 1) {
				
				var picNum = i + 1;	
				var pokeWeight = 0;
				console.log(pokeWeight);
				var pokeHeight = 0;
				var pokedex = [];
			
					//individual poke stats
					fetch(pokemon.results[i].url)
					.then(res => res.json())
					.then(function(pokeStats) {
						pokeWeight = pokeStats.weight;
						console.log(pokeStats.name);
						console.log(pokeWeight);
						pokeHeight = pokeStats.height; 
						console.log(pokeHeight);
						pokedex.push(pokeStats.name, pokeWeight, pokeHeight);
							
					})
					.catch(err => console.error(err));
					
				pokeHTML += '<a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + picNum + '.png" data-lightbox="gallery" ';	
				pokeHTML += ' data-title= Weight: ' + pokeWeight + '<br>' +
								'Height: ' + pokeHeight;
				pokeHTML += '<div class="pokePic"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + picNum + '.png"></div>';
				pokeHTML += pokemon.results[i].name;
				pokeHTML += ' </a>';
			}
		
		pokeHTML += '</div>';
		
		document.getElementById('pokeWrap').innerHTML = pokeHTML;
	}
};

pokeXhr.send();




