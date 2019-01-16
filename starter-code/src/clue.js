// Characters


let mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
}


let drOrchid = {
first_name:   "Doctor",
last_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist"
}

let profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"
}

let missScarlet = {

first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor"
}

let mrsPeacock = {

first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité"
}

let mrMustard = {

first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player"
}

// Weapons

let weapon1 = {
    name: "rope",
    weight: 10
    }
    
let weapon2 = {
    name: "knife",
    weight: 8
    }

let weapon3 = {name: "candlestick", 
weight: 2 
    }

let weapon4 = {name: "dumbbell",
weight: 30
    }

let weapon5 = {name: "CaretPosition",
 weight: 2
    }

 let weapon6 = {name: "ActiveXObject",
 weight: 15
    }

 let weapon7 = {name: "btoa",
 weight: 13
    }

 let weapon8 = {name: "trophy",
 weight: 25
    }

 let weapon9 = {name: "SVGTextPositioningElement",
 weight: 20
    }

// Rooms

let plc1 = {
    name: "Dinning Room"}

let plc2 = {name: "Conservatory"}

let plc3 = {name: "Kitchen"}

let plc4 = {name: "Study"}

let plc5 = {name: "Library"}

let plc6 = {name: "Billiard Room"}

let plc7 = {name: "Lounge"}

let plc8 = {name: "Ballroom"}

let plc9 = {name: "Hall"}

let plc10 = {name: "Spa"}

let plc11 = {name: "Living Room"}

let plc12 = {name: "Observatory"}

let plc13 = {name: "Theater"}

let plc14 = {name: "Guest House"}

let plc15 = {name: "Patio"}


// Characters Collection
let charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms' Collection
let roomsArray = [plc1, plc2, plc3, plc4, plc5, plc6, plc7, plc8, plc9, plc10, plc11, plc12,plc13, plc14, plc15];

// Weapons Collection
let weaponsArray = [weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8, weapon9];

//functions 

function randomSelector(x) {
    let selected = Math.floor(Math.random()* x.length); 
      return x[selected];
  }
  // console.log(randomSelector(charactersArray))

  function randomSelectorWeapon(y) {
    let rooms = Math.floor(Math.random()* y.length); 
      return y[rooms];
  }
  // console.log(randomSelector(roomsArray))

  function randomSelectorPlace (z) {
    let weapons = Math.floor(Math.random()* z.length); 
      return z[weapons];
  }
  // console.log(randomSelector(weaponsArray))

  let mistery = [];

  function pickMistery(mistery) {
      mistery.push(randomSelector(charactersArray))
      mistery.push(randomSelectorPlace(roomsArray))
      mistery.push(randomSelectorWeapon(weaponsArray))
  }

  pickMistery(mistery)
  // console.log(mistery)


function revealMystery (){
return mistery[0].first_name + " " + mistery[0].last_name + "  killed Mr. Boddy using the" + " " + mistery[2].name + " in the place " + mistery[1].name 
}

console.log(revealMystery(mistery))