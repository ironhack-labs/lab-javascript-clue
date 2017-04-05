


var suspects = [
  {
    firstName:"Jacob",
    lastName:"Green",
    color: "Green",
    occupation:"Help people",
    description:"Lot of connections"
  },
  {
    firstName:"Doctor",
    lastName:"Orchids",
    color: "White",
    occupation:"Biologist",
    description:"She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning"
  },
  {
    firstName:"Victor",
    lastName:"Plum",
    color: "Purple",
    occupation:"Billionaire",
    description:"Popularity"
  },
  {
    firstName:"Kasandra",
    lastName:"Scarlet",
    color: "Red",
    occupation:"A-list movie star"
  },
  {
    firstName:"Eleanor",
    lastName:"Peacock",
    color: "Blue",
    occupation:"Popularity",
    description:"From healthy family"
  },
  {
    firstName:"Jack",
    lastName:"Mustard",
    color: "Yellow",
    occupation:"Former football player",
    description:"Real Madrid fan"
  },
];

var weapons = [
  {
    name: "Rope",
    color: "Blue"
  },
  {
    name: "Knife",
    color: "Red"
  },
  {
    name: "Candlestick",
    color: "Orange"
  },
  {
    name: "Dumbbell",
    color: "White"
  },
  {
    name: "Poison",
    color: "Transparent"
  },
  {
    name: "Axe",
    color: "Silver"
  },
  {
    name: "Bat",
    color: "Black"
  },
  {
    name: "Trophy",
    color: "Gold"
  },
  {
    name: "Pistol",
    color: "Cream"
  },
];

var houseRooms = [
  'Dining Room',
  'Conservatory',
  'Kitchen',
  'Study',
  'Library',
  'Billiard Room',
  'Lounge',
  'Ballroom',
  'Hall',
  'Spa',
  'Living Room',
  'Observatory',
  'Theater',
  'Guest House',
  'Patio',
];

function sacarCarta (nombreBaraja) {
  return nombreBaraja[Math.floor(Math.random() * nombreBaraja.length)];
}

console.log(sacarCarta(baraja));

console.log(sacarCarta(suspects));
console.log(sacarCarta(weapons));
console.log(sacarCarta(houseRooms));

var CaseFileConfidential = {
  assasin: sacarCarta(suspects),
  weapon: sacarCarta(weapons),
  place: sacarCarta(houseRooms),
  solution: function () {
    return 'It was ' + this.assasin.firstName + ' with a ' + this.weapon.name + ' in ' + this.place;
  }
};

console.log(CaseFileConfidential.solution());
