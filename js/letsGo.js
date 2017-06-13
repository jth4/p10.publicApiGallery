function letsGo(){

	let searchbar = document.getElementById('search');
	console.log(searchbar);
	
	let userInput = searchbar.value.toLowerCase();
	console.log(userInput);
	
	let gallery = document.querySelectorAll('#gallery a');
	console.log(gallery);
	
	let photo = document.querySelectorAll('img');
	console.log(photo);
	
	for ( var i=0; i < gallery.length; i++ ) {
		
		let photoCaption = gallery[i].getAttribute('data-title').toLowerCase();
		console.log(photoCaption);
		
		if (photoCaption.indexOf(userInput) > -1) {
			gallery[i].style.display = "";
		} else {
			gallery[i].style.display = "none";
		}
	}
}