// ITERATION 1

// Suspects Array

const suspectsString = `mrGreen
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
const suspectsArray = [];

function loadSuspects(data) {
  let plainSuspectArray = data.split("\n\n");
  plainSuspectArray.forEach((suspect) => {
    suspectLines = suspect.split("\n");
    let suspectObj = {};
    suspectObj.shortName = suspectLines[0];
    for (let i = 1; i < suspectLines.length; i++) {
      suspectObj[suspectLines[i].split(": ")[0]] =
        suspectLines[i].split(": ")[1];
    }
    suspectObj.age = Number(suspectObj.age);
    suspectsArray.push(suspectObj);
  });
}
loadSuspects(suspectsString);

console.log(suspectsArray);

const weapons = `name: rope --- weight: 10
name: knife --- weight: 8
name: candlestick --- weight: 2
name: dumbbell --- weight: 30
name: poison --- weight: 2
name: axe --- weight: 15
name: bat --- weight: 13
name: trophy --- weight: 25
name: pistol --- weight: 20`;

const weaponsArray = [];

function loadWeapons(data) {
  let plainWeaponArray = data.split("\n");
  plainWeaponArray.forEach((weapon) => {
    let weaponObj = {};
    let weaponLine = weapon.split(" --- ");
    let name = weaponLine[0].split("name: ")[1];
    let weight = weaponLine[1].split("weight: ")[1];
    weaponObj["name"] = name;
    weaponObj["weight"] = Number(weight);

    weaponsArray.push(weaponObj);
  });
}

loadWeapons(weapons);

console.log(weaponsArray);

const rooms = `name: Dining Room
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

const roomsArray = [];

function loadRooms(data) {
  let plainRoomsArray = data.split("\n");
  plainRoomsArray.forEach((room) => {
    let roomsObj = {};
    let name = room.split("name: ")[1];
    roomsObj["name"] = name;

    roomsArray.push(roomsObj);
  });
}

loadRooms(rooms);

console.log(roomsArray);

// ITERATION 2

function selectRandom(card) {
  return card[Math.floor(Math.random() * card.length)];
}
console.log(selectRandom(suspectsArray));

function pickMystery() {
  let mysteryObject = {};
  mysteryObject.suspect = selectRandom(suspectsArray);
  mysteryObject.weapon = selectRandom(weaponsArray);
  mysteryObject.room = selectRandom(roomsArray);

  return mysteryObject;
}
let mystery = pickMystery();
console.log(pickMystery());

// ITERATION 3
function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}

console.log(revealMystery(mystery));
