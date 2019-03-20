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
var charactersArray = []

// Rooms' Collection
var roomsArray = []

// Weapons Collection
var weaponsArray = []

let mrGreen = {
  first_name: "Jacob",
  last_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
}

let drOrchid = {
  first_name: "Doctor",
  last_name: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation: "Scientist"
}

let profPlum = {
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
}

let missScarlet = {
  first_name: "Kasandra",
  last_name: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
}

let mrMustard = {
  first_name: "Jack",
  last_name: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
}

const pushChars = () => {
  charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrMustard)
}
pushChars()

let rope = {
  name: "rope",
  weight: 10
}

let knife = {
  name: "knife",
  weight: 8
}

let candlestick = {
  name: "candlestick",
  weight: 2
}

let dumbbell = {
  name: "dumbbell",
  weight: 30
}

let poison = {
  name: "poison",
  weight: 2
}

let axe = {
  name: "axe",
  weight: 15
}

let bat = {
  name: "bat",
  weight: 13
}

let trophy = {
  name: "trophy",
  weight: 25
}

let pistol = {
  name: "pistol",
  weight: 20
}

const pushWeaps = () => {
  weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol)
}
pushWeaps()

let diningRoom = {
  name: "Dining Room"
}

let conservatory = {
  name: "Conservatory"
}

let kitchen = {
  name: "Kitchen"
}

let study = {
  name: "Study"
}

let library = {
  name: "Library"
}

let billiardRoom = {
  name: "Billiard Room"
}

let lounge = {
  name: "Lounge"
}

let ballroom = {
  name: "Ballroom"
}

let hall = {
  name: "Hall"
}

let spa = {
  name: "Spa"
}

let livingRoom = {
  name: "Living Room"
}

let observatory = {
  name: "Observatory"
}

let theater = {
  name: "Theater"
}

let guestHouse = {
  name: "Guest House"
}

let patio = {
  name: "Patio"
}

const pushRooms = () => {
  roomsArray.push(
    diningRoom,
    conservatory,
    kitchen,
    study,
    library,
    billiardRoom,
    lounge,
    ballroom,
    hall,
    spa,
    livingRoom,
    observatory,
    theater,
    guestHouse,
    patio
  )
}
pushRooms()

// Random Selector
// Create a method randomSelector to randomly select one element from a card stack. The method should receive an array as an argument, and return randomly one of the elements of the array.

const randomSelector = arr => {
  let randNum = Math.floor(Math.random() * arr.length)
  let output = arr[randNum]
  return output
}

//Mystery
// We need to create a pickMistery method that will call randomSelector for each card stack, and return an array with the 3 picked cards, a character, a weapon and a room. Our mystery should be stored on a misteryEnvelope variable.

// const pickMistery = (arr1, arr2, arr3) => {
//   let output = []
//   output.push(randomSelector(arr1), randomSelector(arr2), randomSelector(arr3))
//   return output
// }
// const misteryEnvelope = pickMistery(charactersArray, weaponsArray, roomsArray)

const pickMistery = () => {
  let output = []
  let x = randomSelector(weaponsArray)
  let y = randomSelector(roomsArray)
  let z = randomSelector(charactersArray)
  return [z, x, y]
}

const misteryEnvelope = pickMistery(charactersArray, weaponsArray, roomsArray)

const revealMistery = arr => {
  let name = arr[0]["first_name"]
  let lastName = arr[0]["last_name"]
  let weapon = arr[1]["name"]
  let place = arr[2]["name"]
  return `${name} ${lastName} killed Mr.Boddy using the ${weapon} in the ${place}!!!!`
}

console.log(revealMistery(misteryEnvelope))
console.log(charactersArray)
console.log(weaponsArray)
console.log(roomsArray)
