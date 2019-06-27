// Characters Collection
var charactersArray = [
  { firstName:   "Jacob",
    lastName:    "Green",
    color:       "green",
    description: "He has a lot of connections",
    age:         45,
    image:       "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:  "Entrepreneur"
    },
  
  { firstName:   "Doctor",
    lastName:    "Orchid",
    color:       "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:    "Scientist"
    },
  
  { firstName:   "Victor",
    lastName:    "Plum",
    color:       "purple",
    description: "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
    },
  
  { firstName:   "Kasandra",
    lastName:    "Scarlet",
    color:       "red",
    description: "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
    },
  
  { firstName:   "Eleanor",
    lastName:    "Peacock",
    color:       "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
    },
  
  { firstName:   "Jack",
    lastName:    "Mustard",
    color:       "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"
    }
  ];
  
  
  // Rooms' Collection
  var roomsArray = [
  { place: "Dining Room"},
  { place: "Conservatory"},
  { place: "Kitchen"},
  { place: "Study"},
  { place: "Library"},
  { place: "Billiard Room"},
  { place: "Lounge"},
  { place: "Ballroom"},
  { place: "Hall"},
  { place: "Spa"},
  { place: "Living Room"},
  { place: "Observatory"},
  { place: "Theater"},
  { place: "Guest House"},
  { place: "Patio"}
  ];
  
  // Weapons Collection
  var weaponsArray = [
  { weapon: "rope",
    weight: 10
  },
  
  { weapon: "knife",
    weight: 8
  },
  
  { weapon: "candlestick",
    weight: 2
  },
  
  { weapon: "dumbbell",
    weight: 30
  },
  
  { weapon: "poison",
    weight: 2
  },
  
  { weapon: "axe",
    weight: 15
  },
  
  { weapon: "bat",
    weight: 13
  },
  
  { weapon: "trophy",
   weight: 25
  },
  
  { weapon: "pistol",
    weight: 20
  }
  ];
  
  //----------------------------------------------------------
  
  var randomSelector = charactersArray[Math.floor(Math.random()*charactersArray.length)];
  
  document.body.innerHTML = randomSelector;
  
  //console.log(randomSelector);
  
  //----------------------------------------------------------
  
  var randomSelector2 = roomsArray[Math.floor(Math.random()*roomsArray.length)];
  
  document.body.innerHTML = randomSelector;
  
  //console.log(randomSelector2);
  
  //----------------------------------------------------------
  
  var randomSelector3 = weaponsArray[Math.floor(Math.random()*weaponsArray.length)];
  
  document.body.innerHTML = randomSelector;
  
  //console.log(randomSelector3);
  
  //----------------------------------------------------------
  
  var pickMystery = [
    {randomSelector},
    {randomSelector2},
    {randomSelector3}
  ]
  
  //console.log(pickMystery);
  
  var mysteryEnvelope = pickMystery;
  
  console.log(mysteryEnvelope);
  
  //console.log(`${mysteryEnvelope[0].randomSelector.firstName} ${mysteryEnvelope[0].randomSelector.lastName} killed Mr.Boddy using the ${mysteryEnvelope[2].randomSelector3.weapon} in the ${mysteryEnvelope[1].randomSelector2.place}.`);
  

function revealMistery (misteryEnvelope) {
  return `${mysteryEnvelope[0].randomSelector.firstName} ${mysteryEnvelope[0].randomSelector.lastName} killed Mr.Boddy using the ${mysteryEnvelope[2].randomSelector3.weapon} in the ${mysteryEnvelope[1].randomSelector2.place}.`
}

console.log(revealMistery(pickMystery))