//first create objects, then create functions, 
// Characters


mrGreen = {
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur" 
  },
  
   drOrchid = { 
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          "26",
  image:        "http://www.radiotimes.com/uploads/images/Original/111967,.jpg",
  ocupation:   "Scientist"
  },
  
   profPlum = {
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07,/professor-plum.jpg",
  occupation:   "Designer",
  },
  
   missScarlet = {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07,/miss-scarlett.jpg",
  occupation:   "Actor",
  },
  
   mrsPeacock  = {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:       " https://metrouk2.files.wordpress.com/2016/07,/mrs-peacock.jpg",
  occupation:   "Socialité",
  },
  
   mrMustard = {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description: " He is a former football play,er who tries to get by on his former glory",
  age:          62,
  image:       " https://metrouk2.files.wordpress.com/2016/07,/colonel-mustard.jpg",
  occupation:   "Retired Football player",
  }
  
  var charactersArray = [mrGreen,drOrchid, profPlum, missScarlet,mrsPeacock,mrMustard];
  
  
   rope = {name: "rope", weight: 10},
   knife = {name: "knife", weight: 8},
   candlestick ={name: "candlestick", weight: 2},
   dumbell = {name: "dumbbell", weight: 30},
   poison = {name: "poison", weight: 2},
   axe = {name: "axe", weight: 15},
   bat = {name: "bat", weight: 13},
   troph ={name: "troph", weight: 25},
   pistol = {name: "pistol", weight: 20}
  
  var weaponsArray = [pistol,troph, bat, axe, poison, dumbell, candlestick, knife, rope];
  
  diningRoom = {name: "Dinning Room"},
  conservatory = {name: "Conservatory"},
  kitchen = {name: "Kitchen"},
  study = {name: "Study"},
  library = {name: "Library"},
  billiardRoom ={name: "Billiard Room"},
  lounge = {name: "Lounge"},
  ballroom = {name: "Ballroom"},
  hall = {name: "Hall"},
  spa = {name: "Spa"},
  livingRoom = {name: "Living Room"},
  observatory = {name: "Observatory"},
  theater={name: "Theater"},
  guestHouse={name: "Guest House"},
  patio={name: "Patio"}
  
  var roomsArray = [diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];
  
  
  // Characters Collection
  var getCards = {
    roomsArray, 
    weaponsArray,
    charactersArray,
    randomSelector: function(array){
      var max = array.length;
      return array[Math.floor(Math.random() * Math.floor(max))];
    },
    pickMistery: function(room,weapon,character){
      var mysteryEnvelope = [];
      mysteryEnvelope.push(this.randomSelector(room));
      mysteryEnvelope.push(this.randomSelector(weapon));
      mysteryEnvelope.push(this.randomSelector(character));
      return mysteryEnvelope;
      },
    revealMistery: function(){
      var array = this.pickMistery(this.roomsArray,this.weaponsArray,this.charactersArray);
      return array[2].first_name + " " + array[2].last_name + " killed Mr.Boddy using the " + array[1].name + " in the " + array[0].name;
    }
    }
  
  getCards.revealMistery();
  

