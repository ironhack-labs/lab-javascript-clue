var stacksCluedo = {

  suspects : [
    { firstName: "Jacob", lastName: "Green", color: "Green"},
    { firstName: "Doctor", lastName: "Orchid", color: "White"},
    { firstName: "Victor", lastName: "Plum", color: "Purple"},
    { firstName: "Kasandra", lastName: "Scarlet", color: "Red"},
    { firstName: "Eleanor", lastName: "Peacock", color: "Blue"},
    { firstName: "Jack", lastName: "Mustard", color: "Yellow"},
  ],

  weapons : ["Rope", "Knife", "Candlestick", "Dumbbell", "Poison", "Axe", "Bat", "Trophy", "Pistol"],

  places : ["Dinning room", "Conservatory","Kitchen","Study","Library","Billiard room","Lounge", "Ballroom", "Hall", "A spa", "Living room", "Observatory", "Theater", "Guest house", "A patio"],

}

//1. Método de selección aleatoria

function randomFunct (stack) {
  var randomCard = Math.floor((Math.random()*stack.length));
  var chosenCard = stack[randomCard];
  return chosenCard;
}

//2. Función que llama al método anterior para ejecutarlo en cada baraja

function chosingCards (gameNaming){
  var arrayCartasElegidas =[];
  Object.keys(gameNaming).forEach(function(mazos){
     arrayCartasElegidas.push(randomFunct(gameNaming[mazos]));
  });
//3. Envoltorio virtual
  return arrayCartasElegidas;
}

//4. Mostrar el resultado
chosingCards(stacksCluedo);
