var packOfCards = {
  suspects:
    [
        {
          name: 'mrGreen',
          firstName: "Jacob",
          lastName: "Green",
          occupation: "Reverend",
          age: "35",
          description: "His color is green. He has a lot of connections and is always willing to help people out -- for a price."
        },
      {
        name: 'drOrchid',
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Doctor",
        age: "32",
        description: "her color is white. She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after...."
      },
      {
        mrPlum: 'mrPlum',
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Video game designer",
        age: "40",
        description: "his color is purple. He is a billionaire video game designer who is embracing his new popularity."
      },
      {
        name: 'msScarlet',
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Milf, movie star",
        age: "42",
        description: "Her color is red. She is an A-list movie star whose past haunts her."
      },
      {
        name: 'msPeacock',
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Rich",
        age: "19",
        description: "her color is blue. She is from a wealthy family and uses her status and money to earn popularity."
      },
       {
        name: 'mrMustard',
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Former football player",
        age: "60",
        description: "His color is yellow. He is a former football player who tries to get by on his former glory."
      }
    ],
  weapons:
    [
       {
        name: 'rope',
        weightInKg: 2,
        color: 'beige',
        hurtScale: 1
      },
      {
        name: 'knife',
        weightInKg: 0.3,
        color: 'black',
        hurtScale: 9
      },
      {
        name: 'candlestick',
        weightInKg: 1,
        color: 'silver',
        hurtScale: 5
      },
      {
        name: 'dumbbell',
        weightInKg: 10,
        color: 'gray',
        hurtScale: 7
      },
      {
        name: 'poison',
        weightInKg: 0.01,
        color: 'purple',
        hurtScale: 0
      },
      {
        name: 'axe',
        weightInKg: 9,
        color: 'brown',
        hurtScale: 10
      },
      {
        name: 'bat',
        weightInKg: 2,
        color: 'blue',
        hurtScale: 6
      },
      {
        name: 'trophy',
        weightInKg: 3,
        color: 'gold',
        hurtScale: 4
      },
      {
        name: 'pistol',
        weightInKg: 1,
        color: 'peach',
        hurtScale: 10
      }
    ],
  rooms:
    [
      {'name': 'diningroom'},
      {'name': 'conservatory'},
      {'name': 'kitchen'},
      {'name': 'study'},
      {'name': 'library'},
      {'name': 'billiardroom'},
      {'name': 'lounge'},
      {'name': 'ballroom'},
      {'name': 'hall'},
      {'name': 'spa'},
      {'name': 'livingroom'},
      {'name': 'observatory'},
      {'name': 'theater'},
      {'name': 'guesthouse'},
      {'name': 'patio'},
    ]
}

var selectRandomIndex = function(array){
  return Math.floor(Math.random()*array.length);
};

function selectRandomCard(object) {
  var keys = Object.keys(object);
  keys.forEach(function(key, index){
    var virtualEnvelope = packOfCards[key][selectRandomIndex(packOfCards[key])];
    console.log(virtualEnvelope);
  });
}

var mysteryInterface = {
  mysteryRevealingMethod: function(obj) {
    selectRandomCard(obj);
  }
}

mysteryInterface.mysteryRevealingMethod(packOfCards);
