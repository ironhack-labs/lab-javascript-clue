
var characters = [
    { name: 'Jacob Green', description: 'He has a lot of connections and is always willing to help people out -- for a price.', color: "green", job: "fixer" },
    { name: 'Doctor Orchid', description: 'She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning', color: "white", job: "doctor" },
    { name: 'Victor Plum', description: 'He is a billionaire video game designer who is embracing his new popularity.', color: "purple", job: "video game designer" },
    { name: 'Kasandra Scarlet', description: 'She is an A-list movie star whose past haunts her.', color: "red", job: "movie star"},
    { name: 'Eleanor Peacock', description: 'She is from a wealthy family and uses her status and money to earn popularity.', color: "blue", job: "Fashion designer" },
    {name: "Jack Mustard", description: "He is a former football player who tries to get by on his former glory.", color: "yellow", job: "ex-football player"}
  ];
var  rooms =  [
    "Dining Room",
    "Conservatory",
    "Kitchen",
    "Study",
    "Library",
    "Billiard Room",
    "Lounge",
    "Ballroom",
    "Hall",
    "A Spa",
    "Living Room",
    "Observatory",
    "Theater",
    "Guest House",
    "A patio"
  ];
var weapons =[
    { weaponType: 'Rope', weight: "13 oz", color: "Brown", damage: 3 },
    { weaponType: 'Knife', weight: '24 oz', color: "Black", damage: 7 },
    { weaponType: 'Candlestick', weight: '34 oz', color: "yellow", damage: 5},
    { weaponType: 'Dumbbell', weight:'55 oz', color: "Green", damage: 6},
    { weaponType: 'Poison', weight: '2 oz', color: "red", damage: 9},
    { weaponType: 'Axe', weight: ' 70 oz', color: "pink", damage: 9},
    { weaponType: 'Bat', weight: '60 oz', color: "white", damage: 8},
    { weaponType: 'Trophy', weight: '20 oz', color: "gold", damage: 5},
    { weaponType: 'Pistol', weight: '45 oz', color: "grey", damage: 10}
  ];




function chooseThree(){
  var randomWeapon =  weapons[Math.floor((Math.random()* weapons.length) + 0)];
  var randomRoom =  rooms[Math.floor((Math.random()* rooms.length) + 0)];
  var randomCharacter =  characters[Math.floor((Math.random()* characters.length) + 0)];
  console.log(randomCharacter);
  console.log(randomRoom);
  console.log(randomWeapon);
}

var envelope = {
  caseFileConfidential: chooseThree()
};
console.log(envelope.caseFileConfidential + "Case Closed! That's who did it");
