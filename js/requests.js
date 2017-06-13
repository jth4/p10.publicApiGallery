//var xhr = new XMLHttpRequest();
//xhr.onreadystatechange = function () {
//  if(xhr.readyState === 4) {
//    var employees = JSON.parse(xhr.responseText);
//    var statusHTML = '<ul class="bulleted">';
//    for (var i=0; i<employees.length; i += 1) {
//      if (employees[i].inoffice === true) {
//        statusHTML += '<li class="in">';
//      } else {
//        statusHTML += '<li class="out">';
//      }
//      statusHTML += employees[i].name;
//      statusHTML += '</li>';
//    }
//    statusHTML += '</ul>';
//    document.getElementById('employeeList').innerHTML = statusHTML;
//  }
//};
//xhr.open('GET', '../data/employees.json');
//xhr.send();

// 

var pokeXhr = new XMLHttpRequest();
pokeXhr.onreadystatechange = function () {
	if(pokeXhr.readyState === 4) {
		
		var pokemon = JSON.parse(pokeXhr.responseText);
		console.log(pokemon.results[1].name);

		var pokeHTML = '<ul>';
		
			for (var i=0; i < pokemon.results.length; i+= 1) {
				pokeHTML += '<li>';
				pokeHTML += pokemon.results[i].name;
				pokeHTML += '</li>';
			}
			
		pokeHTML += '</ul>';
		
		console.log(pokeHTML);
		
		document.getElementById('pokeWrap').innerHTML = pokeHTML;
	}
};

pokeXhr.open('GET', 'http://pokeapi.co/api/v2/pokemon/');
pokeXhr.send();




