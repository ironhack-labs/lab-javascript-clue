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
  occupation:   "Scientist"
  }
  let profPlum = {
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer",
  }
  let missScarlet = {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor",
  }
  let mrsPeacock = {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité",
  }
  let mrMustard = {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player",
  }
  // Weapons
  let weapon1 = {
    name: "rope",
    weight: 10,
  }
  let weapon2 = {
    name: "knife",
    weight: 8,
  }
  let weapon3 = {
    name: "candlestick",
    weight: 2
  }
  let weapon4 = {
    name: "dumbbell",
    weight: 30
  }
  let weapon5 = {
    name: "poison",
    weight: 2
  }
  let weapon6 = {
  name: "axe",
  weight: 15,
  }
  let weapon7 = {
  name: "bat",
  weight: 13
  }
  let weapon8 = {
  name: "trophy",
  weight: 25
  }
  let weapon9 = {
  name: "pistol",
  weight: 20
  }
  
  // Rooms
  
  let place1 = {name: "Dinning Room"}
  let place2 = {name: "Conservatory"}
  let place3 = {name: "Kitchen"}
  let place4 = {name: "Study"}
  let place5 = {name: "Library"}
  let place6 = {name: "Billiard Room"}
  let place7 = {name: "Lounge"}
  let place8 = {name: "Ballroom"}
  let place9 = {name: "Hall"}
  let place10 = {name: "Spa"}
  let place11 = {name: "Living Room"}
  let place12 = {name: "Observatory"}
  let place13 = {name: "Theater"}
  let place14 = {name: "Guest House"}
  let place15 = {name: "Patio"}
  
  
  
  // Characters Collection
  const charactersArray = [];
  charactersArray.push(mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard)
  // Rooms' Collection
  const roomsArray = [];
  roomsArray.push(place1,place2,place3,place4,place5,place6,place7,place8,place9,place10,place11,place12,place13,place14,place15)
  // Weapons Collection
  const weaponsArray = [];
  weaponsArray.push(weapon1,weapon2,weapon3,weapon4,weapon5,weapon6,weapon7,weapon8,weapon9)
/*
  let randomSelector = (arr) => {
    if(arr.length === 0 ) {
      return undefined 
    } else if(arr.length === 1 ) {
      return arr.length 
    } else {
      return Math.floor(Math.random() * arr.length)
    }
  }
let misteryEnvelope = []
let pickMistery = (s1,s2,s3) => {
    return [randomSelector(s1),randomSelector(s2),randomSelector(s3)]

}
  misteryEnvelope = pickMistery(charactersArray,roomsArray,weaponsArray)

let revealMistery = arr => {
  return charactersArray[arr[0]].first_name + " " + charactersArray[arr[0]].last_name + " killed Mr.Boddy using the " + weaponsArray[arr[2]].name +" in the " + roomsArray[arr[1]].name +"!!!!"
}

console.log(revealMistery(misteryEnvelope))

*/

  let randomSelector = (arr) => {
    if(arr.length === 0 ) {
      return undefined 
    } else if(arr.length === 1 ) {
      return arr[0]
    } else {
      return arr[Math.floor(Math.random() * arr.length)]
    }
  }

let misteryEnvelope

let pickMistery = (s1,s2,s3) => {
  return [randomSelector(s1),randomSelector(s2),randomSelector(s3)]
}
  misteryEnvelope = pickMistery(charactersArray,weaponsArray,roomsArray)

let revealMistery = arr => {
  return arr[0].first_name + " " + arr[0].last_name + " killed Mr.Boddy using the " + arr[1].name +" in the " + arr[2].name +"!!!!"
}
