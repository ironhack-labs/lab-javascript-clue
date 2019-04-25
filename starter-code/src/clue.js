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

// character names
const mrGreen = {
  first_name: "Jacob",
  last_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};
const drOrchid = {
  first_name: "Doctor",
  last_name: "Orchid",
  color: "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation: "Scientist"
}
const profPlum = {
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          "22",
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer",
}
const missScarlet = {
  first_name:   'Kasandra',
  last_name:    'Scarlet',
  color:        'red',
  description:  'She is an A-list movie star with a dark past',
  age:          '31',
  image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation:   'Actor',
}
const mrsPeacock = {
  first_name:   'Eleanor',
  last_name:    'Peacock',
  color:        'blue',
  description:  'She is from a wealthy family and uses her status and money to earn popularity',
  age:          '36',
  image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation:   'Socialité',
}
const mrMustard = {
first_name:   'Jack',
last_name:    'Mustard',
color:        'yellow',
description:  'He is a former football player who tries to get by on his former glory',
age:          '62',
image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
occupation:   'Retired Football player',
}

// weapons 
const rope = {
  name: 'rope',  
  weight: 10
}
const knife = {
  name: 'knife',
  weight: 8
}
const candlestick = {
  name: 'candlestick',
  weight: 2
}
const dumbbell = {
  name: 'dumbbell',
  weight: 30
}
const poison = {
  name: 'poison',
  weight: 2
}
const axe = {
  name: 'axe',
  weight: 15
}
const bat = {
  name: 'bat',
  weight: 13
}
const trophy = {
  name: 'trophy',
  weight: 25
}
const pistol = {
  name: 'pistol',
  weight: 20
}

// rooms

let DinningRoom = {
  name: "DinningRoom"
}
let Conservatory = {
  name: "Conservatory"
}
let Kitchen = {
  name:"Kitchen"
}
let Study = {
  name: "Study"
}
let Library = {
  name: "Library"
}
let BilliardRoom = {
  name: "BilliardRoom"
}
let Lounge = {
  name: "Lounge"
}
let Ballroom = {
  name: "Ballroom"
}
let Hall = {
  name: "Hall"
}
let Spa = {
  name: "Spa"
}
let LivingRoom = {
  name: "LivingRoom"
}
let Observatory = {
  name: "Observatory"
}
let Theater = {
  name: "Theater"
}
let GuestHouse = {
  name: "GuestHouse"
}
let Patio = {
  name: "Patio"
}


// Characters Collection
var charactersArray = [];
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard)
// Rooms' Collection
var roomsArray = [];
roomsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol)
// Weapons Collection
var weaponsArray = [];
weaponsArray.push(DinningRoom, Conservatory, Kitchen, Study, Library, BilliardRoom, Lounge, Ballroom, Hall, Spa, LivingRoom, Observatory, Theater, GuestHouse, Patio)

function randomSelector(cardStack){
  return cardStack[Math.floor(Math.random() * charactersArray.length + 1)]
}
function pickMistery(){
  let misteryEnvelope =[];
  misteryEnvelope.push(randomSelector(charactersArray), randomSelector(roomsArray), randomSelector(weaponsArray))
  return misteryEnvelope
}
function revealMistery(pickMistery){
  return `${pickMistery[0]["first_name"]} ${pickMistery[0]["last_name"]} killed Mr.Boddy using the ${pickMistery[1]["name"]} in the ${pickMistery[2]["name"]}!!!!`
}
