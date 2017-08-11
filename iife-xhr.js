function showCarnivores(carnivores) {
    let animalDiv = document.getElementById("allMyAnimals");
	let animalData = '';

	for(item in carnivores){
        let animalItem = carnivores[item];
		animalData += "<div class='allMyAnimals'>";
		animalData += "<h2>" + animalItem.animals + "</h2>";
		animalData += "</div>";
	}
	animalDiv.innerHTML += animalData;
}

  
  function showHerbivores (herbivores) {
    let animalDiv2 = document.getElementById("allMyAnimals2");
	let animalData2 = '';

	for(item in herbivores) {
        let animalItem2 = herbivores[item];
		animalData2 += "<div class='allMyAnimals'>";
		animalData2 += "<h2>" + animalItem2.animals + "</h2>";
		animalData2 += "</div>";
	}
	animalDiv2.innerHTML += animalData2;
  
  }
  
  Predator.loadCarnivores(showCarnivores);
  Predator.loadHerbivores(showHerbivores);