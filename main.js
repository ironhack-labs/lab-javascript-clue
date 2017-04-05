/*
ARRAY WEAPONS
*/
var Rope = {
  weight:100,
  color:"blue",
  hurts:10
},
Knife = {
  weight:100,
  color:"white",
  hurts:100
},
Candlestic = {
  weight:150,
  color:"white",
  hurts:80
},
Dumbbell = {
  weight:150,
  color:"black",
  hurts:70
},
Poison = {
  weight:2,
  color:"green",
  hurts:100
},
Axe = {
  weight:510,
  color:"silver",
  hurts:100
},
Bat = {
  weight:100,
  color:"black",
  hurts:10
},
Trophy = {
  weight:100,
  color:"golden",
  hurts:50
},
Pistol = {
  weight:200,
  color:"golden",
  hurts:100
};
var arrWeapons = [Rope, Knife, Candlestic, Dumbbell, Poison, Axe, Bat, Trophy, Pistol];

/*
ARRAY ROOMS
*/
var arrRooms =[
  "Dining room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard room",
  "Lounge",
  "Ballroom",
  "Hall",
  "A spa",
  "Living room",
  "Observatory",
  "Theater",
  "Guest house",
  "A patio"
];

/*
ARRAY SUSPECTS
*/
var suspect1 = {
  firstName:"Jacob",
  lastName:"Green",
  occupation:"Service",
  age:22,
  description:"top guy",
  color:"green"
},
suspect2 = {
  firstName:"Doctor",
  lastName:"orchid",
  occupation:"Doctor",
  age:55,
  description:"very, very fat",
  color:"white"
},
suspect3 = {
  firstName:"Victor",
  lastName:"Plum",
  occupation:"Video game designer",
  age:28,
  description:"vary very fucker",
  color:"purple"
},
suspect4 = {
  firstName:"Kasandra",
  lastName:"Scarlet",
  occupation:"Movie star",
  age:26,
  description:"she is pretty",
  color:"red"
},
suspect5 = {
  firstName:"Eleanor",
  lastName:"Peacock",
  occupation:"family rich",
  age:80,
  description:"very ugly",
  color:"blue"
},
suspect6 = {
  firstName:"Jack",
  lastName:"Mustard",
  occupation:"Mister",
  age:"54",
  description:"former glory",
  color:"yellow"
};
var arrSuspects = [suspect1, suspect2, suspect3, suspect4, suspect5, suspect6];

/*
OBJECT METHOD RANDOM
*/
var card = {
  addRandom: function(arrayWeapons, arrayRooms, arraySuspects){
    var totalWeapons= arrayWeapons.length,
    totalRooms= arrayRooms.length,
    totalSuspects= arraySuspects.length;

    var randomTotalWeapons= arrayWeapons[Math.floor(Math.random() * totalWeapons)],
    randomTotalRooms=arrayRooms[Math.floor(Math.random() * totalRooms)],
    randomTotalSuspects=arraySuspects[Math.floor(Math.random() * totalSuspects)];

    var randomEnvelope = {
      suspect: randomTotalSuspects,
      weapon: randomTotalWeapons,
      room: randomTotalRooms
    };

    return randomEnvelope;
  }
};

console.log(card.addRandom(arrWeapons,arrRooms,arrSuspects));
