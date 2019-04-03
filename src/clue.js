

  var mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
  };

  var drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation:   "Scientist",
  };


  var profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer",
  };


  var missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor",
  }


  var mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité",
  };


var mrMustard ={
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player",
}

// Weapons

var rope = {
  weight: 10,
  };

var knife ={
  weight: 8,
};

var candlestick ={
  weight: 2,
};

var dumbbell ={
  weight: 30,
};

var poison ={
  weight: 2,
};

var axe ={
  weight: 15,
};

var bat ={
  weight: 13,
}

var trophy ={
  weight: 25,
};

var pistol ={
  weight: 20,
};
  
// Rooms

var rooms = ["Dinning room", "Conservatory", "Kitchen", "Study", "Library", 
"Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", 
"Living Room", "Observatory", "Theater", "Guest House", "Patio"]



// Characters Collection
var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard]

// Rooms' Collection
var roomsArray = ["Dinning room", "Conservatory", "Kitchen", "Study", "Library", 
"Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", 
"Living Room", "Observatory", "Theater", "Guest House", "Patio"];

// Weapons Collection
var weaponsArray = ["rope", "knife", "candlestick", "dumbbell", "poison", "axe", "bat", "trophy", "pistol"];

function randomSelector(array){
  return array[Math.floor(Math.random()*array.length)];
  }


function pickMistery(){

  var misteryEnvelope = [];

  misteryEnvelope.push(randomSelector(charactersArray));
  misteryEnvelope.push(randomSelector(weaponsArray));
  misteryEnvelope.push(randomSelector(roomsArray));

  return misteryEnvelope;  
  
  }  

  console.log(pickMistery()); // this gives a correct array with the three cards.

function revealMistery(){

 var firstName = pickMistery()[0].first_name;
 //str.toUpperCase(misteryEnvelope[0].last_name);

 console.log(firstName);

}

revealMistery()


//<FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!