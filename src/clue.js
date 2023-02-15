// ITERATION 1

// Suspects Array

const suspectsArray = [];

const suspectData = `
mrGreen
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
color: yellow`

function loadSuspects(data) {
    let plainSuspectArray = data.split("\n\n");
    plainSuspectArray.forEach((suspect) => {
      suspectLines = suspect.split("\n");
      let suspectObj = {};
      suspectObj.shortName = suspectLines[0];
      for (let i = 1; i < suspectLines.length; i++) {
        if(isNaN(suspectLines[i].split(": ")[1]) === false){
          suspectObj[suspectLines[i].split(": ")[0]] = Number(suspectLines[i].split(": ")[1]);
        }else{
           suspectObj[suspectLines[i].split(": ")[0]] =
          suspectLines[i].split(": ")[1];
        }
      }
      suspectsArray.push(suspectObj);
    });
}

loadSuspects(suspectData);

// Rooms Array

const roomsArray = [];

const roomData = `
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
`;

function loadRoom(data) {
    let plainRoomArray = data.split("\n");
     if(plainRoomArray[0] === ""){
        plainRoomArray.splice(0,1);
     }
     if(plainRoomArray[plainRoomArray.length -1] === ""){
        plainRoomArray.splice(plainRoomArray.length -1,1);
     }
    plainRoomArray.forEach((room) => {
      roomLines = room.split("\n");
       let roomObj = {};
      for(let i = 0; i < roomLines.length; i++){ 
        roomObj[roomLines[i].split(": ")[0]] =
        roomLines[i].split(": ")[1];
      }
    roomsArray.push(roomObj);
    });
}

loadRoom(roomData);

// Weapons Array

const weaponsArray = [];

const weaponsData = `
name: rope --- weight: 10
name: knife --- weight: 8
name: candlestick --- weight: 2
name: dumbbell --- weight: 30
name: poison --- weight: 2
name: axe --- weight: 15
name: bat --- weight: 13
name: trophy --- weight: 25
name: pistol --- weight: 20
`;

function loadWeapons(data) {
    let plainWeaponArray = data.split("\n");
    if(plainWeaponArray[0] === ""){
        plainWeaponArray.splice(0,1);
     }
     if(plainWeaponArray[plainWeaponArray.length -1] === ""){
        plainWeaponArray.splice(plainWeaponArray.length -1,1);
     }
     plainWeaponArray.forEach((weapon) => {    
       const splitWeapon = weapon.split("---");
       const split0 = splitWeapon[0].split(":");
       const split1 = splitWeapon[1].split(":");
       let weaponObj = {};
       weaponObj.name = split0[1];
       weaponObj.weight = Number(split1[1]);
       weaponsArray.push(weaponObj);
     })
}


loadWeapons(weaponsData);

// ITERATION 2

function selectRandom(array) {
    if(array.length === 0){
        return undefined;
       }else if(array.length === 1){
        return array[0];
       }
       return array[Math.floor(Math.random() * array.length)];
    
}

function pickMystery() {}


// ITERATION 3

function revealMystery() {}

