//ITERATION ONE

//Characters

var mrGreen = {
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur",
  }

var drOrchid = {
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation:   "Scientist"
  }

var profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
}

var missScarlet = {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"
  }


  var mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
}

var mrMustard = {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player",
  }

// Weapons

var ropeObject = {
   name: "rope",        
   weight: 10,

}

var knifeObject = {
   name: "knife",
   weight: 8,

}

var candlestickObject = {
   name: "candlestick",
   weight: 2,

}

var dumbbellObject = {
   name: "dumbbell",
   weight: 30
}

var poisonObject = {
   name: "poison",      
   weight: 2

}

var axeObject = {
   name: "axe",            
   weight: 15

}

var batObject = {
   name: "bat",        
   weight: 13
}

var trophyObject = {
   name: "trophy",
   weight: 25

}

var pistolObject = {
   name: "pistol",
   weight: 20

}

// Rooms
var diningRoomObject = {
  name: "Dining Room"
  }
var conservatoryObject = {
  name: "Conservatory"
  }
var kitchenObject = {
  name: "Kitchen"
  }
var studyObject = {
  name: "Study"
  }
var libraryObject = {
  name: "Library"
  }
var biliardRoomObject = {
  name: "Billiard Room"
  }
var loungeObject = {
  name: "Lounge"
  }
var ballroomObject = {
  name: "Ballroom"
  }
var hallObject = {
  name: "Hall"
  }
var spaObject = {
  name: "Spa"
  }
var livingroomObject = {
  name: "Living Room"
  }
var observatoryObject = {
  name: "Observatory"
  }
var theaterObject = {
  name: "Theater"
  }
var guestHouseObject = {
  name: "Guest House"
  }
var patioObject = {
  name: "Patio"
  }


// Characters Collection
var charactersArray = [];

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock,mrMustard);

// Rooms' Collection
var roomsArray = [];

roomsArray.push(diningRoomObject,kitchenObject,studyObject,conservatoryObject, kitchenObject, libraryObject, biliardRoomObject, loungeObject, ballroomObject, hallObject, livingroomObject, observatoryObject, theaterObject, guestHouseObject, patioObject);

// Weapons Collection
var weaponsArray = [];

weaponsArray.push(ropeObject,knifeObject,candlestickObject,dumbbellObject,poisonObject,axeObject,batObject,trophyObject,pistolObject);

//ITERATION TWO



function randomSelector(arr){
  var index = Math.floor(Math.random()*arr.length);

  return arr[index];

}

randomSelector(weaponsArray)



function pickMystery(){
  var mysteryPick = [];
  
  mysteryPick.push(randomSelector(charactersArray))
  mysteryPick.push(randomSelector(weaponsArray))
    mysteryPick.push(randomSelector(roomsArray))

  return mysteryPick

}

var mysteryEnvelope = pickMystery()

//console.log(mysteryEnvelope)


//ITERATION THREE
function revealMystery (arr){

var firstName = arr[0]["first_name"];
var lastName = arr[0]["last_name"];
var weapon = arr[1].name;
var place = arr[2].name;

  console.log(firstName + " " + lastName + " killed Mr. Boddy using the " + weapon + " in the " + place + "!!!!");

}

revealMystery(mysteryEnvelope)


