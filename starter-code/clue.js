var suspects = {
  characters: [
    {
      firstName: "Jacob",
      lastName: "Green",
      color: "green",
      occupations: "Entrepreneur",
      age: 45 ,
      image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
      descriptions: "he has a lot of connections",
    },
    {
      firstName: "Doctor",
      lastName: "Orchid",
      color: "white",
      description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
      age: 26,
      image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
      occupation: "Scientist"
    },
    {

      firstName: "Victor",
      lastName: "Plum",
      color: "purple",
      description: "Billionare video game designer",
      age: 22,
      image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
      occupation: "Designer"
    },
    {
      firstName: "Kasandra",
      lastName: "Scarlet",
      color: "red",
      description: "She is an A-list movie star with a dark past",
      age: 31,
      image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
      occupation: "Actor"
    },
    {
      firstName: "Eleanor",
      lastName: "Peacock",
      color: "blue",
      description: "She is from a wealthy family and uses her status and money to earn popularity",
      age: 36,
      image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
      occupation: "Socialité"
    },
    {
      firstName: "Jack",
      lastName: "Mustard",
      color: "yellow",
      description: "He is a former football player who tries to get by on his former glory",
      age: 62,
      image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
      occupation: "Retired Football player"
    }
  ]
};

var rooms = {
  places: [
    {
      name: "Dinning Room"
    },
    {
      name: "Conservatory"
    },
    {
      name: "Kitchen"
    },
    {
      name: "Study"
    },
    {
      name: "Library"
    },
    {
      name: "Billiard Room"
    },
    {
      name: "Lounge"
    },
    {
      name: "Ballroom"
    },
    {
      name: "Hall"
    },
    {
      name: "Spa"
    },
    {
      name: "Living Room"
    },
    {
      name: "Observatory"
    },
    {
      name: "Theater"
    },
    {
      name: "Guest House"
    },
    {
      name: "Patio"
    }
  ]
};

var weapons ={
  possible: [
    {
      name: "Rope",
      weight: 10
    },
    {
      name: "Knife",
      weight: 8
    },
    {
      name:"Candlestick",
      weight: 2
    },
    {
      name:"Dumbbell",
      weight: 30
    },
    {
      name:"Poison",
      weight: 2
    },
    {
      name:"Axe",
      weight: 15
    },
    {
      name:"Bat",
      weight: 13
    },
    {
      name:"Trophy",
      weight: 25
    },
    {
      name:"Pistol",
      weight: 20
    }
  ]
}

function getRandomArbitrary(max) {
  return Math.floor(Math.random() * (max - 1));
}

function random_selector(array) {
  var index = getRandomArbitrary(array.length);
  return array[index]
}

function pick_mistery() {
  var char = random_selector(suspects.characters)
  var wea = random_selector(weapons.possible)
  var roo = random_selector(rooms.places)
  var envelope = {char, wea, roo};
  return envelope
}

function reveal_mistery(mistery) {
  
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
