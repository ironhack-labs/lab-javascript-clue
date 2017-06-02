// Iteration 1
var clueGame = {
  suspects: [
      { name: "Jacob Green",
        color: "Green",
        discription: "Has connections and is willing to help for a price."},
      { name: "Doctor Orchid",
        color: "White",
        discription: "Daughter of victim, biologist, near fatal accident with daffodils."},
      { name: "Victor Plum",
        color: "Purple",
        discription: "Billionaire video game designer, very popular."},
      { name: "Kasandra Scarlet",
        color: "Red",
        discription: "A-list movie star, her past haunts her."},
      { name: "Eleanor Peacock",
        color: "Blue",
        discription: "Wealthy family uses money and status to gain popularity."},
      { name: "Jack Mustard",
        color: "Yellow",
        discription: "Formal football player who tries to get by on his formal glory, lives in the past."},
  ],
  weapons: [
    { type: "Rope",
      color: "Brown",
      criticalHitPoints: 5},
    { type: "Knife",
      color: "Silver",
      criticalHitPoints: 9},
    { type: "Candlestick",
      color: "Bronze",
      criticalHitPoints: 6},
    { type: "Dumbbell",
      color: "Gray",
      criticalHitPoints: 8},
    { type: "Poison",
      color: "Yellow",
      criticalHitPoints: 10},
    { type: "Axe",
      color: "Red",
      criticalHitPoints: 10},
    { type: "Bat",
      color: "Tan",
      criticalHitPoints: 7},
    { type: "Trophy",
      color: "Gold",
      criticalHitPoints: 4},
    { type: "Pistol",
      color: "Silver",
      criticalHitPoints: 10},
  ],
  houseRooms: ["Dining Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room",
              "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"]
};

// Iteration 2
function getSuspect() {
  return clueGame.suspects[Math.floor(Math.random() * (5 - 0))];
}

function getWeapon() {
  return clueGame.weapons[Math.floor(Math.random() * (8 - 0))];
}

function getHouseRoom() {
  return clueGame.houseRooms[Math.floor(Math.random() * (14 - 0))];
}

function revealMystery() {
  var caseFileConfidential = [getSuspect(), getWeapon(), getHouseRoom()];
  console.log(caseFileConfidential);

}

revealMystery();

//function getRandomArbitrary(min, max) {
    //return Math.random() * (max - min) + min;
//}

//console.log(Math.round(getRandomArbitrary(0,9)));

//function getSuspect() {
  //  console.log(clueGame.suspects.Math.floor());
//}
