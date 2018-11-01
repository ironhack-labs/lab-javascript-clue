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
first_name:   Doctor
last_name:    Orchid
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
var charactersArray = [{

      alias: "mrGreen",
      first_name: "Jacob",
      last_name: "Green",
      color: "green",
      description: "He has a lot of connections",
      age: "45",
      image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",//duda
      occupation: "Entrepreneur"
  },{

      alias: "drOrchid",
      first_name: "Doctor",
      last_name: "Orchid",
      color: "white",
      description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
      age:  26,
      image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
      ocupation: "Scientist"
  },{

      alias:"profPlum",
      first_name: "Victor",
      last_name: "Plum",
      color: "purple",
      description: "Billionare video game designer",
      age: 22,
      image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
      occupation: "Designer"
  },{

      alias: "missScarlet",
      first_name:   "Kasandra",
      last_name:    "Scarlet",
      color:        "red",
      description:  "She is an A-list movie star with a dark past",
      age:          31,
      image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
      occupation:   "Actor"
  },{

      alias: "mrsPeacock",
      first_name:   "Eleanor",
      last_name:    "Peacock",
      color:        "blue",
      description:  "She is from a wealthy family and uses her status and money to earn popularity",
      age:          36,
      image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
      occupation:   "Socialité"
  },{

      alias: "mrMustard",
      first_name:   "Jack",
      last_name:    "Mustard",
      color:        "yellow",
      description:  "He is a former football player who tries to get by on his former glory",
      age:          62,
      image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
      occupation:   "Retired Football player"
  }
];

var aleatorioChar = Math.floor(Math.random()*charactersArray.length);

console.log(aleatorioChar);

var characters = charactersArray[aleatorioChar].alias  //Solo nos falta eliminar el 6 aleatorio
var charactersFirstName = charactersArray[aleatorioChar].first_name
var charactersLastName = charactersArray[aleatorioChar].last_name

// Rooms' Collection
var roomsArray = [{
    name: "Dinning Room"
  },{
    name: "Conservatory"
  },{
    name: "Kitchen"
  },{
  name: "Study"
  },{
  name: "Library"
  },{
  name: "Billiard Room"
  },{
  name: "Lounge"
  },{
  name: "Ballroom"
  },{
  name: "Hall"
  },{
  name: "Spa"
  },{
  name: "Living Room"
  },{
  name: "Observatory"
  },{
  name: "Theater"
  },{
  name: "Guest House"
  },{
  name: "Patio"
  }];

  var aleatorioRooms = Math.floor(Math.random()*roomsArray.length);

  console.log(aleatorioRooms);
  console.log(roomsArray[aleatorioRooms].name);

  var rooms = roomsArray[aleatorioRooms].name



// Weapons Collection
var weaponsArray = [{
    name: "rope",
    weight: 10
  },{
    name: "knife",
    weight: 8
  },{
    name: "candlestick",
    weight: 2
  },{
    name: "dumbbell",
    weight: 30
  },{
    name: "poison",
    weight: 2
  },{
    name: "axe",
    weight: 12
  },{
    name: "bat",
    weight: 13
  },{
    name: "trophy",
    weight: 25
  },{
    name: "pistol",
    weight: 20
  }
  
];

var aleatorioWeapons = Math.floor(Math.random()*weaponsArray.length);

console.log(aleatorioWeapons);
console.log(weaponsArray[aleatorioWeapons].name);

var weapons = weaponsArray[aleatorioWeapons].name


var randomSelector = function(card) {
  if (card === "Character") { 
    return characters
} else if (card === "Rooms" ) {
    return rooms
} else if (card === "Weapons") {
    return weapons 
} else {"No existe"}
}

console.log(randomSelector("Character"));


//Se hace push de los elementos aleatorios a un array PickMistery
var pickMistery = []

pickMistery.push(characters,rooms,weapons);

console.log(pickMistery)

//Variable que imprime frase concatenada con elementos aleatorios del array
var revealMistery = console.log(charactersFirstName + " " + charactersLastName + " killed Mr Boddy using the " + weapons + " in the " + rooms)