//Empezamos el juego creando Arrays
//Creado por Fran y Andrei
var suspects = [
  { firstName: "Jacob", lastName: "Green", age: 17, color:"green"},
  { firstName: "Doctor", lastName: "Orchid", age: 18 , color :"white"},
  { firstName: "Victor", lastName: "Plum", age: 18, color:"purlple" },
  { firstName: "Kasandra", lastName: "Scarlet", age: 20, color:"red" },
  { firstName: "Eleanor",lastName: "Peacock", age: 19, color:"blue" },
  { firstName: "Jack",lastName: "Mustard", age: 19, color:"yellow" }
];
var weapons =[
  {name: "rope", weight:"ee" , color: "ee",hurt:3 },
  {name: "knife", weight: "ee", color:"ee" ,hurt:3 },
  {name: "candlestick", weight:"ee" , color: "ee",hurt:4 },
  {name: "dumbbell", weight:"ee" , color:"ee" ,hurt:5 },
  {name: "poison", weight:"ee" , color:"ee" ,hurt:2 },
  {name: "axe", weight:"ee" , color:"ee" ,hurt: 3},
  {name: "bat", weight: "ee", color: "ee",hurt:4 },
  {name: "trophy", weight: "ee", color: "ee",hurt: 5},
  {name: "pistol", weight: "ee", color: "ee",hurt: 1}
]
var rooms =[
  {place:"Dining room"},
  {place:"Conservatory"},
  {place:"Kitchen"},
  {place:"Study"},
  {place:"Library"},
  {place:"Billiard Room"},
  {place:"Lounge"},
  {place:"Ballroom"},
  {place:"Hall"},
  {place:"A spa"},
  {place:"Living room"},
  {place:"Observatory"},
  {place:"Theater"},
  {place:"Guest house"},
  {place:"A patio"}
]

 var solution = {
  murder: "",
  weapon: "",
  room:""
}

function solucionAleatoria(){

  var murder = Math.floor((Math.random() * 6) + 1); //Nº aleatorio entre 1 y 6
  solution.murder = suspects[murder].firstName;
  var weapon = Math.floor((Math.random() * 9) + 1);
  solution.weapon = weapons[weapon].name;
  var place = Math.floor((Math.random() * 15) + 1);
  solution.room = rooms[place].place;
  return
}
solucionAleatoria();
console.log("El asesino es " + solution.murder + " con la arma " + solution.weapon + " en el lugar " + solution.room);
