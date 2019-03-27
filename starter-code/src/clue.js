
let mrGreen = {
  first_name: "Jacob",
  las_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  ocupation: "Entrepreneur"
}

let drOrchid ={
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


let rope ={
name: "rope",
 weight: 10
}

let knife ={
name: "knife",
weight: 8
}

let candlestick ={
name: "candlestick",
weight: 2
}

let dumbbell ={
  name: "dumbbell",
weight: 30
}

let poison={
 name: "poison",
weight: 2
}

let axe ={
  name: "axe",
  weight: 15
}

let bat ={
  name: "bat",
  weight: 13
}

let trophy = {
  name: "trophy",
  weight: 25
}

let pistol = {
  name:"pistol",
  weight: 20
}

let room1={
name: "Dinning Room"
}

let room2={
name: "Conservatory"
}

let room3={
name: "Kitchen"
}

let room4={
name: "Study"
}

let room5={
name: "Library"
}

let room6={
name: "Billiard Room"
}

let room7={
name: "Lounge"
}

let room8={
name: "Ballroom"
}

let room9={
name: "Hall"
}

let room10={
name: "Spa"
}

let room11={
name: "Living Room"
}

let room12={
name: "Observatory"
}

let room13={
name: "Theater"
}

let room14={
name: "Guest House"
}

let room15={
name: "Patio"
}


var charactersArray = []

charactersArray.push(mrGreen)
charactersArray.push(drOrchid)
charactersArray.push(profPlum)
charactersArray.push(missScarlet)
charactersArray.push(mrsPeacock)
charactersArray.push(mrMustard)


var weaponsArray = []

weaponsArray.push(rope)
weaponsArray.push(knife)
weaponsArray.push(candlestick)
weaponsArray.push(dumbbell)
weaponsArray.push(poison)
weaponsArray.push(axe)
weaponsArray.push(bat)
weaponsArray.push(trophy)
weaponsArray.push(pistol)

var roomsArray =[]

roomsArray.push(room1)
roomsArray.push(room2)
roomsArray.push(room3)
roomsArray.push(room4)
roomsArray.push(room5)
roomsArray.push(room6)
roomsArray.push(room7)
roomsArray.push(room8)
roomsArray.push(room9)
roomsArray.push(room10)
roomsArray.push(room11)
roomsArray.push(room12)
roomsArray.push(room13)
roomsArray.push(room14)
roomsArray.push(room15)

function randomSelector(array){
  ind = Math.floor (Math.random()* array.length)
return array[ind]
}

function pickMistery(){
  let arrayCharacter = randomSelector(charactersArray)
  let arrayWeapon= randomSelector(weaponsArray)
  let arrayRoom = randomSelector(roomsArray)

  const arrayCards =[]

  arrayCards.push( arrayCharacter)
  arrayCards.push( arrayWeapon)
  arrayCards.push( arrayRoom)

  return arrayCards
}

function revealMistery (misteryEnvelope) {
  misteryEnvelope = pickMistery()
  message = `${misteryEnvelope[0].first_name} ${misteryEnvelope[0].last_name} killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${misteryEnvelope[2].name}!!!!`
  return message
 