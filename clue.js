var suspects = [{name: 'Jacob Green', color: 'green', occupation: 'dentist'},
               {name: 'Doctor Orchid', color: 'white', occupation: 'doctor'},
               {name: 'Victor Plum', color: 'purple', occupation: 'videogames designer'},
               {name: 'Kasandra Scarlet', color: 'red', occupation: 'moviestar'},
               {name: 'Eleanor Peacock', color: 'blue', occupation: 'retired billionaire'},
               {name: 'Jack Mustard', color: 'yellow', occupation: 'football player'}];
var weapons =  [{type: 'rope', weightInGrams: 250, color: 'brown', damage: 5},
               {type: 'knife', weightInGrams: 35, color: 'silver', damage: 8},
               {type: 'candlestick', weightInGrams: 80, color: 'gold', damage: 3},
               {type: 'dumbbell', weightInGrams: 5000, color: 'black', damage: 5},
               {type: 'poison', weightInGrams: 5, color: 'transparent', damage: 9},
               {type: 'axe', weightInGrams: 800, color: 'red', damage: 9},
               {type: 'bat', weightInGrams: 500, color: 'wood', damage: 7},
               {type: 'trophy', weightInGrams: 1000, color: 'gold', damage: 7},
               {type: 'pistol', weightInGrams: 250, color: 'black', damage: 10}];

var rooms = [{name: "Dining room", floor: "first"},
         {name: "Conservatory", floor: "first"},
         {name: "Kitchen", floor: "second"},
         {name: "Study", floor: "first"},
         {name: "Library", floor: "first"},
         {name: "Billiard room", floor: "basement"},
         {name: "Lounge", floor: "second"},
         {name: "Ballroom", floor: "third"},
         {name: "Hall", floor: "first"},
         {name: "Spa", floor: "second"},
         {name: "Living Room", floor: "first"},
         {name: "Observatory", floor: "outside"},
         {name: "Theater", floor: "third"},
         {name: "Guest House", floor: "first"},
         {name: "Patio", floor: "second"}
        ];

function drawCard(deck){
  return deck[Math.floor(Math.random() * deck.length)];
}

function solveMystery (suspects, weapons, rooms){
  var envelope = {};
  envelope.suspect = drawCard(suspects);
  envelope.weapon = drawCard(weapons);
  envelope.room = drawCard(rooms);
  return envelope;
}

function revealMystery (secretEnvelope){
  console.log("It was " + secretEnvelope.suspect.name + " using the " +
                secretEnvelope.weapon.type + " in the " + secretEnvelope.room.name + "!");
}

var secretEnvelope = solveMystery(suspects, weapons, rooms);
revealMystery(secretEnvelope);
