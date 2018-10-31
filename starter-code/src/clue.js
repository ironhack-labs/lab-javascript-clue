var charaterArray = [
  {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
  },
  {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:    "Scientist"

  },
  {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
  },
  {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
  },
  {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
  },
  {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"
  }
]

// Weapons

var weaponsArray = [
  {
    name: "rope",
    weigth: 10
  },
  {
    name: "knife",
    weigth: 8
  },
  {
    name: "candlestick",
    weigth: 2
  },
  {
    name: "dumbell", 
    weigth: 30
  },
  {
    name: "poison", 
    weigth: 2
  },
  {
    name: "axe",
    weigth: 15
  },
  {
    name: "bat", 
    weigth: 13
  },
  {
    name: "trophy",
    weigth: 25
  },
  {
    name: "pistol",
    weigth: 20
  }
]

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
]

var datos = [
  charaterArray,
  weaponsArray,
  roomsArray
]

function randomSelector (datos){
  if(datos.length === 0){
    return undefined
  }
  var lenChar = Math.floor( Math.random() * datos[0].length )
  var lenWeapon = Math.floor( Math.random() * datos[1].length)
  var lenRoom = Math.floor( Math.random() * datos[2].length)  

  return [lenChar,lenWeapon,lenRoom]
}

function pickMistery(datos){
  var randomArray = randomSelector(datos)
  var info = [datos[0][randomArray[0]],datos[1][randomArray[1]],datos[2][randomArray[2]]]
  return info;
  
}

var misteryEnvelope = pickMistery(datos)

function revealMistery (misteryEnvelope){
  var solucion = [{
    first_name: misteryEnvelope[0].first_name,
    last_name: misteryEnvelope[0].last_name
  },
  {
    name: misteryEnvelope[1].name
  },
  {
    name: misteryEnvelope[2]
  }
  ]
  return solucion
}

