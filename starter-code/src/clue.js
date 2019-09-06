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
occupation:    Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionaire video game designer
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
name: Dining Room
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


const charactersArray = [
    
];

const mrGreen = { first_name: "Jacob", last_name: "Green",
color: "green", description: "He has a lot of connections", age: 45, image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", occupation: "Entrepreneur" }

const drOrchid = { first_name: "Doctor", last_name: "Orchid",
color: "white", description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy", age: 26, image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg", occupation: "Scientist" }

const profPlum = { first_name: "Victor", last_name: "Plum", color: "purple", description: "Billionaire video game designer", age: 22, image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", occupation: "Designer" }

const missScarlet = { first_name: "Kasandra", last_name: "Scarlet", color: "red", description: "She is an A-list movie star with a dark past", age: 31, image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", occupation: "Actor" }

const mrsPeacock = { first_name: "Eleanor", last_name: "Peacock", color: "blue", description: "She is from a wealthy family and uses her status and money to earn popularity", age: 36, image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", occupation: "Socialité" }

const mrMustard = { first_name: "Jack", last_name: "Mustard", color: "yellow", description: "He is a former football player who tries to get by on his former glory", age: 62, image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", occupation: "Retired Football player" }

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard)

// console.log(charactersArray)
//


const roomsArray = [

];

const room1 = { room: "Dining Room" }
const room2 = { room: "Conservatory" }
const room3 = { room: "Kitchen" }
const room4 = { room: "Study" }
const room5 = { room: "Library" }
const room6 = { room: "Billiard Room" }
const room7 = { room: "Lounge" }
const room8 = { room: "Ballroom" }
const room9 = { room: "Hall" }
const room10 = { room: "Spa" }
const room11 = { room: "Living Room" }
const room12 = { room: "Observatory" }
const room13 = { room: "Theater" }
const room14 = { room: "Guest House" }
const room15 = { room: "Patio" }

roomsArray.push(room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15)

// console.log(roomsArray)
//


const weaponsArray = [

];

const weapon1 = { weapon: "rope", weight: 10 }
const weapon2 = { weapon: "knife", weight: 8 }
const weapon3 = { weapon: "candlestick", weight: 2 }
const weapon4 = { weapon: "dumbbell", weight: 30 }
const weapon5 = { weapon: "poison", weight: 2 }
const weapon6 = { weapon: "axe", weight: 15 }
const weapon7 = { weapon: "bat", weight: 13 }
const weapon8 = { weapon: "trophy", weight: 25 }
const weapon9 = { weapon: "pistol", weight: 20 }

weaponsArray.push(weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8, weapon9)

//console.log(weaponsArray)
//




function randomSelector(gameArray) {
    let anArray = [];
    let gameElement = Math.floor(Math.random() * gameArray.length)
    return gameArray[gameElement]
}

// console.log(randomSelector(charactersArray))
// console.log(randomSelector(roomsArray))
// console.log(randomSelector(weaponsArray))


function pickMystery(gameArray1, gameArray2, gameArray3) {
  let randomChar = randomSelector(gameArray1)
  let randomRoom = randomSelector(gameArray2)
  let randomWeapon = randomSelector(gameArray3)

  // console.log(randomChar)
  // console.log(randomRoom)
  // console.log(randomWeapon)

  let mysteryEnvelope = [randomChar, randomRoom, randomWeapon]

  // console.log(mysteryEnvelope)

  revealMystery(mysteryEnvelope)
}

pickMystery(charactersArray, roomsArray, weaponsArray)


function revealMystery(revealEnvelope) {
  console.log(`${revealEnvelope[0].first_name} ${revealEnvelope[0].last_name} killed Mr. Boddy using the ${revealEnvelope[2].weapon} in the ${revealEnvelope[1].room}!!!!`)
}










// function randomSelector(gameArray) {
//     let anArray = [];
//     let gameElement = 

// }

// function pickMystery(charArray, roomArray, weapArray) {
//   let randomArray = [];
//   let randomChar = Math.floor(Math.random() * charArray.length)
//   switch(randomChar) {
//     case 0:
//       randomArray.push(charactersArray[0]);
//       break;
//     case 1:
//       randomArray.push(charactersArray[1]);
//       break;
//     case 2:
//       randomArray.push(charactersArray[2]);
//       break;
//     case 3:
//       randomArray.push(charactersArray[3]);
//       break;
//     case 4:
//       randomArray.push(charactersArray[4]);
//       break;
//     case 5:
//       randomArray.push(charactersArray[5]);
//       break;
//   }

//   let randomRoom = Math.floor(Math.random() * roomsArray.length)
//   switch(randomRoom) {
//     case 0:
//       randomArray.push(roomsArray[0]);
//       break;
//     case 1:
//       randomArray.push(roomsArray[1]);
//       break;
//     case 2:
//       randomArray.push(roomsArray[2]);
//       break;
//     case 3:
//       randomArray.push(roomsArray[3]);
//       break;
//     case 4:
//       randomArray.push(roomsArray[4]);
//       break;
//     case 5:
//       randomArray.push(roomsArray[5]);
//       break;
//     case 6:
//       randomArray.push(roomsArray[6]);
//       break;
//     case 7:
//       randomArray.push(roomsArray[7]);
//       break;
//     case 8:
//       randomArray.push(roomsArray[8]);
//       break;
//     case 9:
//       randomArray.push(roomsArray[9]);
//       break;
//     case 10:
//       randomArray.push(roomsArray[10]);
//       break;
//     case 11:
//       randomArray.push(roomsArray[11]);
//       break;
//       case 12:
//       randomArray.push(roomsArray[12]);
//       break;
//     case 13:
//       randomArray.push(roomsArray[13]);
//       break;
//     case 14:
//       randomArray.push(roomsArray[14]);
//       break;
//       }

//   let randomWeap = Math.floor(Math.random() * weaponsArray.length)
//   switch(randomWeap) {
//     case 0:
//       randomArray.push(weaponsArray[0]);
//       break;
//     case 1:
//       randomArray.push(weaponsArray[1]);
//       break;
//     case 2:
//       randomArray.push(weaponsArray[2]);
//       break;
//     case 3:
//       randomArray.push(weaponsArray[3]);
//       break;
//     case 4:
//       randomArray.push(weaponsArray[4]);
//       break;
//     case 5:
//       randomArray.push(weaponsArray[5]);
//       break;
//     case 6:
//       randomArray.push(weaponsArray[6]);
//       break;
//     case 7:
//       randomArray.push(weaponsArray[7]);
//       break;
//   }
//   return randomArray
// }

// //console.log(pickMystery(charactersArray, roomsArray, weaponsArray))

// function revealMystery() {
  
// }