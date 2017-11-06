//He sustituido todos los objetos por simples vectores, que solamente incluyen un nombre.
// Ha sido por ahorrar tiempo, ya que le funcionamiento del programa es idéntico.
// El programa está bien en codepen. Gracias!

var suspects = ["Jacob","Doctor","Victor","Casandra","Eleanor","Jack"];

var weapons = ["Rope","Knife","Candlestick","Dumbbell",
"Poison","Axe","Bat","Trophy","Pistol"];

var rooms = ["Dinning room","Conservatory", "Kitchen","Study","Library",
"Billiard room","Lounge","Ballroom","Hall","A spa","Living room",
"Observatory","Guest house","Theater","A patio"];

var allTogether = [suspects, weapons, rooms];

//Este es el vector que escondo.
var virtualEnvelope = [randomCard(allTogether [0]), randomCard(allTogether [1]), randomCard(allTogether [2]) ];

var allChosen = [randomCard(allTogether [0]), randomCard(allTogether [1]), randomCard(allTogether [2])];

for (var i = 0; i < allTogether.length; i++){
  while (equalToArray(allChosen [i]) === -1){
    allChosen [i] = randomCard(allTogether [i]);
  }
}

//Imprimo el vector que ha encontrado el ordenador con prueba-error.
console.log (allChosen);

function equalToArray (input){
  return virtualEnvelope.indexOf(input);
}

function randomCard (group){
 var length = group.length;
 var random = Math.floor(Math.random() * (length));
 return group[random];
}
