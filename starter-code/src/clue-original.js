// Characters

const mrGreen = {
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur"
}

const drOrchid = {
first_name:   "Doctor",
last_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
occupation:    "Scientist"
}

const profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionaire video game designer",
age:          22
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"
}

const missScarlet = {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor",
}

const mrsPeacock = {
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36
image:        "vhttps://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité",
}

const mrMustard = {
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player"
}

// Weapons

const wepon01 = { name: "rope", weight: 10 };
const wepon02 = { name: "knife", weight: 8 };
const wepon03 = { name: "candlestick", weight: 2 };
const wepon04 = { name: "dumbbell", weight: 30 };
const wepon05 = { name: "poison", weight: 2 };
const wepon06 = { name: "axe", weight: 15 };
const wepon07 = { name: "bat", weight: 13 };
const wepon08 = { name: "trophy", weight: 25 };
const wepon09 = { name: "pistolv", weight: 20 };

// Rooms
const wepon01 = { name: "Dining Room" };
const wepon02 = { name: "Conservatory" };
const wepon03 = { name: "Kitchen" };
const wepon04 = { name: "Study" };
const wepon05 = { name: "Library" };
const wepon06 = { name: "Billiard Room" };
const wepon07 = { name: "Lounge" };
const wepon08 = { name: "Ballroom" };
const wepon09 = { name: "Hall" };
const wepon010 = { name: "Spa" };
const wepon011 = { name: "Living Room" };
const wepon012 = { name: "Observatory" };
const wepon013 = { name: "Theater" };
const wepon014 = { name: "Guest House" };
const wepon015 = { name: "Patio" };




// Characters Collection
const charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms Collection
const roomsArray = [room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15];

// Weapons Collection
const weaponsArray = [weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8, weapon9, weapon10];

function randomSelector(arr){
    for(let i = 0; i < arr.length; i++){
        return Math.floor(Math.random() * arr.length);
    }
};

function pickMystery(){
   return{
       suspect: randomSelector(charactersArray),
       rooms: randomSelector(roomsArray),
       suspect: randomSelector(weaponArray),
   }
};

function  revealMystery(mE){
    return (`${mE.suspect.first_name} ${mE.suspect.last_name} killed Mr. Boddy using the ${mE.weapon.name} in the ${mE.room.name}!!!!`)
};
