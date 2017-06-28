var characters = [
  {name: "Jacob Green", color : "green", kind : "He has a lot of connections and is always willing to help people out -- for a price."},
  {name: "Doctor Orchid", color : "white", kind : "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning"},
  {name: "Victor Plum", color: "purple", kind : "He is a billionaire video game designer who is embracing his new popularity."},
  {name: "Cassandra Scarlet", color : "red", kind : "She is an A-list movie star whose past haunts her"},
  {name: "Eleanor Peacock", color : "blue", kind: "She is from a wealthy family and uses her status and money to earn popularity."},
  {name: "Jack Mustard", color : "yellow", kind : "He is a former football player who tries to get by on his former glory."},
];

var weapons = [
  {name: "rope", damage: 20},
  {name: "knife",damage: 40},
  {name: "candlestick",damage: 10},
  {name: "dumbbell",damage: 30},
  {name: "poison",damage: 20},
  {name: "axe",damage: 50},
  {name: "Bat",damage: 30},
  {name: "Trophy",damage: 20},
  {name: "pistol",damage: 50},
  ];

var rooms  = ["Dining room", "Conservatory","Kitchen", "Study", "Library", "Billiard room", "Lounge", "Ballroom", "Hall", "A spa", "Living room", "Observatory", "Theater", "Guest house", "patio"];


function PlayCluedo(){
  var idxcharac=Math.floor(Math.random() * characters.length);
  var idxweapon = Math.floor(Math.random() * weapons.length);
  characters[idxcharac].weapon = weapons[idxweapon];
  var idxroom = Math.floor(Math.random() * rooms.length);
  characters[idxcharac].room = rooms[idxroom];
  var coupable= ("Le coupable est " + characters[idxcharac].name + " avec l arme " + characters[idxcharac].weapon.name + " dans la pièce " + characters[idxcharac].room + ".");
  return coupable;
}

PlayCluedo()
