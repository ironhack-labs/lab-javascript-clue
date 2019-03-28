// Characters
const mrGreen = {
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"
  };
  
  const drOrchid = {
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:   "Scientist"
  };
  
  const profPlum = {
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"
  };
  
  const missScarlet = {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"
  };
  
  const mrsPeacock = {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"
  };
  
  const mrMustard = {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player",
  };
  

// Weapons
const weapon1 = {name: "rope", weight: 10}
const weapon2 = {name: "knife", weight: 8}
const weapon3 = {name: "candlestick", weight: 2}
const weapon4 = {name: "dumbbell", weight: 30}
const weapon5 = {name: "poison", weight: 2}
const weapon6 = {name: "axe", weight: 15}
const weapon7 = {name: "bat", weight: 13}
const weapon8 = {name: "trophy", weight: 25}
const weapon9 = {name: "pistol", weight: 20}


// Rooms

 const room1 = {name: "Dinning Room"}
 const room2 ={name: "Conservatory"}
 const room3 = {name: "Kitchen"}
  const room4 = {name: "Study"}
  const room5 ={name: "Library"}
  const room6 = {name: "Billiard Room"}
  const room7 = {name: "Lounge"}
  const room8 = {name: "Ballroom"}
  const room9 = {name: "Hall"}
  const room10 = {name: "Spa"}
  const room11 = {name: "Living Room"}
  const room12 = {name: "Observatory"}
  const room13 = {name: "Theater"}
  const room14 =  {name: "Guest House"}
  const room15 = {name: "Patio"}


// Characters Collection
var charactersArray = [];

charactersArray.push(mrGreen)
charactersArray.push(drOrchid)
charactersArray.push(profPlum)
charactersArray.push(missScarlet)
charactersArray.push(mrsPeacock)
charactersArray.push(mrMustard)

console.log(charactersArray);
// Rooms' Collection
var roomsArray = [];

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

console.log(roomsArray)
// Weapons Collection
var weaponsArray = [];

weaponsArray.push(weapon1)
weaponsArray.push(weapon2)
weaponsArray.push(weapon3)
weaponsArray.push(weapon4)
weaponsArray.push(weapon5)
weaponsArray.push(weapon6)
weaponsArray.push(weapon7)
weaponsArray.push(weapon8)
weaponsArray.push(weapon9)
console.log(weaponsArray)


const randomSelector = array => {
  const random = Math.random() * array.length;
  const index = Math.floor(random);

   return array[index];
};


const pickMistery = () => { 
  let character = randomSelector(charactersArray)
  let room = randomSelector(roomsArray)
  let weapon = randomSelector(weaponsArray)
return [character, weapon, room]
}; 


let misteryEnvelope = pickMistery();


const revealMistery = (newArr) => {
  let character = newArr[0]
  let room = newArr[2]
  let weapon = newArr[1]
return  `${character.first_name} ${character.last_name} killed Mr.Boddy using the ${weapon.name} in the ${room.name}!!!!`;
};

console.log(revealMistery(misteryEnvelope));