var suspects = [
  {firstname: "Jacob", lastname: "Green", occupations: "Mercenary", age: "35", color: "green", description:"Helper", assasin: false},
  {firstname: "Doctor", lastname: "Orchid", occupations: "Biologist", age: "65", color: "white", description:"Cleaver", assasin: false},
  {firstname: "Victor", lastname: "Plum", occupations: "Billionarie", age: "45", color: "purple", description:"Stupid", assasin: false},
  {firstname: "Kasandra", lastname: "Scarlet", occupations: "Star Movie", age: "25", color: "red", description:"Beauty", assasin: false},
  {firstname: "Eleanor", lastname: "Peacock", occupations: "Rich", age: "56", color: "blue", description:"Posh", assasin: false},
  {firstname: "Jack", lastname: "Mustard", occupations: "Football Player", age: "20", color: "yellow", description:"Sportsman", assasin: false}
];

var rooms = [
  {name: "Dining room"},
  {name: "Conservatory"},
  {name: "Kitchen"},
  {name: "Study"},
  {name: "Library"},
  {name: "Billiar Room"},
  {name: "Lunch"},
  {name: "Ballroom"},
  {name: "Hall"},
  {name: "Spa"},
  {name: "Living room"},
  {name: "Observatory"},
  {name: "Theater"},
  {name: "Guest House"},
  {name: "Patio"},
];

var weapons = {

  list: [
    {name: "Rope", color:"yellow"},
    {name: "Knife", color:"white"},
    {name: "Candlestick", color:"silver"},
    {name: "Dumbbell", color:"grey"},
    {name: "Poison", color:"green"},
    {name: "Bat", color:"brown"},
    {name: "Trophy", color:"gold"},
    {name: "Axe", color:"red"},
    {name: "Pistol", color:"black"}
  ],

  getRandomWeapon: function(){
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
};


function select(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function startGame (){
  var cards = [];
  cards.push(select(suspects));
  cards.push(select(rooms));
  //cards.push(select(weapons));
  cards.push(weapons.getRandomWeapon());

  console.log("el asesino es: " + cards[0].firstname);
  console.log("el asesinato se cometió en: " + cards[1].name);
  console.log("el arma es: " + cards[2].name);
  return cards;
}

startGame();
