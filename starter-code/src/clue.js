// Characters
var mrGreen = {
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          "45",
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"
};

var drOrchid = {
  first_name:   "Doctor",
  lst_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          "26",
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:   "Scientist"
  };

var profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          "22",
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"
};

var missScarlet = {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          "31",
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor"
};

var mrsPeacock = {
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          "36",
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité"
};

var mrMustard = {
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          "62",
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player",
};


// Rooms
var roomsArray = [
"Dinning Room",
"Conservatory",
"Kitchen",
"Study",
"Library",
"Billiard Room",
"Lounge",
"Ballroom",
"Hall",
"Spa",
"Living Room",
"Observatory",
"Theater",
"Guest House",
"Patio"
];



// Characters Collection
var charactersArray = [

];
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);

// Rooms' Collection



// Weapons Collection
var weapons = {
  rope : {
    weight : 10,
  },
    
    knife : { 
    weight: 8,
    },
    
    candlestick :{
    weight: 2
    },
    
    dumbbell : { 
    weight: 30,
    },
    
    poison : { 
    weight: 2
    },
    
    axe  : { 
    weight: 15
    },
    
    bat : { 
    weight: 13
    },
    
    trophy : { 
    weight: 25
    },
    
    pistol : { 
    weight: 20
    }
  };
  


var weaponsArray = Object.keys(weapons);



function randomSelector(array){
var index = Math.floor(Math.random() * array.length);
  return array[index];
  }

function pickMistery (char, room, weap){
var envelope = [];

envelope.push(randomSelector(char));
envelope.push(randomSelector(room));
envelope.push(randomSelector(weap));

return envelope;
}
var misteryEnvelope = pickMistery(charactersArray,weaponsArray,roomsArray);

function revealMistery (array){


return  array[0].first_name + " " + array[0].last_name + " killed Mr.Boddy using the " + array[1] + " in the " + array[2] + "!!!!";
}

revealMistery(misteryEnvelope);
