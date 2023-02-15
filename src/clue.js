// ITERATION 1
let suspectsData = `mrGreen
firstName: Jacob
lastName: Green
occupation: Entrepreneur
age: 45
description: He has a lot of connections
image: https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
color: green

drOrchid
firstName: Doctor
lastName: Orchid
occupation: Scientist
age: 26
description: PhD in plant toxicology. Adopted daughter of Mr. Boddy
image: http://www.radiotimes.com/uploads/images/Original/111967.jpg
color: white

profPlum
firstName: Victor
lastName: Plum
occupation: Designer
age: 22
description: Billionaire video game designer
image: https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg
color: purple

missScarlet
firstName: Kasandra
lastName: Scarlet
occupation: Actor
age: 31
description: She is an A-list movie star with a dark past
image: https://www.radiotimes.com/uploads/images/Original/111967.jpg
color: red

mrsPeacock
firstName: Eleanor
lastName: Peacock
occupation: Socialité
age: 36
description: She is from a wealthy family and uses her status and money to earn popularity
image: https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
color: blue

mrMustard
firstName: Jack
lastName: Mustard
occupation: Retired Football player
age: 62
description: He is a former football player who tries to get by on his former glory
image: https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg
color: yellow`;

// Suspects Array

function loadSuspects(data) {
  const suspectsArray = [];
  let plainSuspectArray = data.split("\n\n");
  plainSuspectArray.forEach((suspect) => {
    let suspectLines = suspect.split("\n");
    let suspectObj = {};
    suspectObj.shortName = suspectLines[0];
    for (let i = 1; i < suspectLines.length; i++) {
      suspectObj[suspectLines[i].split(": ")[0]] =
        suspectLines[i].split(": ")[1];
      // suspectObj.age = +suspectObj.age;
      suspectObj.age = parseInt(suspectObj.age);
    }

    suspectsArray.push(suspectObj);
  });
  return suspectsArray;
}

const suspectsArray = loadSuspects(suspectsData);

// Weapons Array

let weapons = `name: rope --- weight: 10
name: knife --- weight: 8
name: candlestick --- weight: 2
name: dumbbell --- weight: 30
name: poison --- weight: 2
name: axe --- weight: 15
name: bat --- weight: 13
name: trophy --- weight: 25
name: pistol --- weight: 20`;

function loadWeapons(data) {
  const weaponsArray = [];
  let plainWeaponsArray = data.split("\n");

  for (let i = 0; i < plainWeaponsArray.length; i++) {
    let weaponObj = {};
    let splitArray = plainWeaponsArray[i].split(": ")[1];
    weaponObj[plainWeaponsArray[i].split(": ")[0]] =
      splitArray.split(" --- ")[0];
    weaponObj[splitArray.split(" --- ")[1]] = parseInt(
      plainWeaponsArray[i].split(": ")[2]
    );
    weaponsArray.push(weaponObj);
  }
  return weaponsArray;
}

const weaponsArray = loadWeapons(weapons);

// Rooms Array
let rooms = `name: Dining Room
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
name: Patio`;

function loadRooms(data) {
  const roomsArray = [];
  let plainRoomsArray = data.split("\n");
  for (let i = 0; i < plainRoomsArray.length; i++) {
    let roomsObj = {};

    roomsObj[plainRoomsArray[i].split(": ")[0]] =
      plainRoomsArray[i].split(": ")[1];
    roomsArray.push(roomsObj);
  }
  return roomsArray;
}

const roomsArray = loadRooms(rooms);

// ITERATION 2

function selectRandom(array) {
  let randomPosition = Math.floor(Math.random() * array.length);
  return array[randomPosition];
}

selectRandom(roomsArray);

function pickMystery() {
  let randomRoom = selectRandom(roomsArray);
  let randomWeapon = selectRandom(weaponsArray);
  let randomSuspect = selectRandom(suspectsArray);
  let objectMystery = {};
  objectMystery.suspect = randomSuspect;
  objectMystery.weapon = randomWeapon;
  objectMystery.room = randomRoom;
  return objectMystery;
}
const pickRandomMystery = pickMystery();

// ITERATION 3

function revealMystery(object) {
  return `${object.suspect.firstName} ${object.suspect.lastName} killed Mr. Boddy using the ${object.weapon.name} in the ${object.room.name}!`;
}

revealMystery(pickRandomMystery);
