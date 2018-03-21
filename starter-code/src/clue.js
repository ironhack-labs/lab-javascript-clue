// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
frst_name:   Doctor
lst_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];

var mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
  };
 
charactersArray.push(mrGreen);

var drOrchid = {
    frst_name:    "Doctor,",
    last_name:    "Orchid,",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:    "Scientist"
}

charactersArray.push(drOrchid);

var profPlum = {
    first_name:     "Victor",
    last_name:      "Plum",
    color:          "purple",
    description:    "Billionare video game designer",
    age:            22,
    image:          "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:     "Designer"
}

charactersArray.push(profPlum);

var missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
}
    
charactersArray.push(missScarlet);

var mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
}

charactersArray.push(mrsPeacock);

var mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player",
}

charactersArray.push(mrMustard);

var rope = {
    name: "rope",
    weight: 10
  }
  
  weaponsArray.push(rope);

var knife = {
    name: "knife",
    weight: 8
  }

  weaponsArray.push(knife);

var candlestick = {
    name: "candlestick",
    weight: 2
  }  

  weaponsArray.push(candlestick);

var dumbbell = {
    name: "dumbell",
    weight: 30
  }  

  weaponsArray.push(dumbbell);

var poison  = {
    name:   "poison",
    weight: 2
  }  

  weaponsArray.push(poison);

var axe = {
    name: "axe",
    weight: 15
  }  

  weaponsArray.push(axe);

var bat = {
    name:   "bat",
    weight: 13
  }  

  weaponsArray.push(bat);

var trophy  = {
    name:   "trophy",
    weight: 25
  }  

  weaponsArray.push(trophy);

var pistol = {
    name:   "pistol",
    weight: 20
  }

  weaponsArray.push(pistol);

  var room1 = {
      name: "Dinning Room"
    }

    roomsArray.push(room1);

  var room2 = {
        name: "Conservatory"
    }

    roomsArray.push(room2);
  
  var room3 = {
      name: "Kitchen"
  }
  
  roomsArray.push(room3);

  var room4 = {
      name: "Study"
  }

  roomsArray.push(room4);

  var room5 = {
        name: "Library"
  }

  roomsArray.push(room5);

  var room6 = {
        name: "Billiard Room"
  }

  roomsArray.push(room6);

  var room7 = {
        name: "Lounge"
  }

  roomsArray.push(room7);

  var room8 = {
        name: "Ballroom"
  }

  roomsArray.push(room8);

  var room9 = {
        name: "Hall"
  }

  roomsArray.push(room9);

  var room10 = {
        name: "Spa"
  }

  roomsArray.push(room10);

  var room11 = {
        name: "Living Room"
  }

  roomsArray.push(room11);

  var room12 = {
        name: "Observatory"
  }

  roomsArray.push(room12);

  var room13 = {
        name: "Theater",
  }

  roomsArray.push(room13);

  var room14 = {
      name: "Guest House"
  }

  roomsArray.push(room14);

  var room15 = {
        name: "Patio"
  }

  roomsArray.push(room15);

function randomSelector(aArray){
    if (aArray.length!==0){
    return aArray[Math.floor(Math.random()*aArray.length)];
    }
}

function pickMistery(){
   var misteryArray=[];
   misteryArray[0]=randomSelector(charactersArray);
   misteryArray[1]=randomSelector(weaponsArray);
   misteryArray[2]=randomSelector(roomsArray);
   return misteryArray
}

var misteryEnvelope = pickMistery(charactersArray, roomsArray, weaponsArray)

console.log(misteryEnvelope);

function revealMistery(envelope){
    return envelope[0].first_name +" "+ envelope[0].last_name+" killed Mr.Boddy using the " + envelope[1].name+" in the " + envelope[2].name +"!!!!";
}

console.log (revealMistery(misteryEnvelope));
