
// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];



let mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: "45",
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};

let drOrchid = {
  firstName: "Doctor",
  lastName:"Orchid",
  color: "white",
  description:"PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:"26",
  image:"http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation:"Scientist"
};


let profPlum = {
  firstName:"Victor",
  lastName:"Plum",
  color:"purple",
  description:"Billionare video game designer",
  age:"22",
  image:"https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:"Designer"
};


let missScarlet = {
  firstName:"Kasandra",
  lastName:"Scarlet",
  color:"red",
  description:"She is an A-list movie star with a dark past",
  age:"31",
  image:"https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:"Actor"
};


let mrsPeacock = {
  firstName:"Eleanor",
  lastName:"Peacock",
  color:"blue",
  description:"She is from a wealthy family and uses her status and money to earn popularity",
  age:"36",
  image:"https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:"Socialité"
};


let mrMustard = {
  firstName:"Jack",
  lastName:"Mustard",
  color:"yellow",
  description:"He is a former football player who tries to get by on his former glory",
  age:"62",
  image:"https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:"Retired Football player"
};

// push character object into charactersArray
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);


//Weapons

let rope = {
  weapon: "rope",
  weight: "10"
};

let knife = {
  weapon: "knife",
  weight: "8"
};

let candelstick = {
  weapon: "candlestick",
  weight: "2"
};

let dumbbell = {
  weapon: "dumbbell",
  weight: "30"
};

let poison = {
  weapon: "poison",
  weight: "2"
};

let axe = {
  weapon: "axe",
  weight: "15"
};

let bat = {
  weapon: "bat",
  weight: "13"
  };

let trophy = {
  weapon: "trophy",
  weight: "25"
};

let pistol = {
  weapon: "pistol",
  weight: "20"
};


//push weapons objects into weaponsArray
weaponsArray.push(rope, knife, candelstick, dumbbell, poison, axe, bat, trophy, pistol);


//Rooms

let dinningRoom = {
  room: "Dinning Room"
};

let conservatory = {
  room: "Conservatory"
};

let kitchen = {
  room: "Kitchen"
};

let study = {
  room: "Study"
};

let library = {
  room: "Library"
};

let billiardRoom = {
  room: "Billiard Room"
};

let lounge = {
  room: "Lounge"
};

let ballroom = {
  room: "Ballroom"
};

let hall = {
  room: "Hall"
};

let spa = {
  room: "Spa"
};

let livingRoom = {
  room: "Living Room"
};

let observatory = {
  room: "Observatory"
};

let theater = {
  room: "Theater"
};

let guestHouse = {
  room: "Guest House"
};

let patio = {
  room: "Patio"
};

//push room objects into roomsArray
roomsArray.push(dinningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa,  livingRoom, observatory, theater, guestHouse, patio);

//Function that selects random object in array
function randomSelector(array){
  
  return array[Math.floor(Math.random() * array.length)]
};




function pickMistery(){
 
  let misteryEnvelope =[];
  const suspect = randomSelector(charactersArray);
  const weapon = randomSelector(weaponsArray);
  const room = randomSelector(roomsArray)

  misteryEnvelope.push(suspect, weapon, room);

   return misteryEnvelope;
}

function revealMistery(array){
  
  // return array[0].firstName + ' ' + array[0].lastName + ' killed Mr.Boddy using the ' + array[1].weapon + ' in the ' + array[2].room + '!!!!';

   console.log(`${array[0].firstName} ${array[0].lastName} killed Mr.Boddy using the ${array[1].weapon} in the ${array[2].room}!!!!`);
}

revealMistery(pickMistery());

// Finally, we need to reveal the mistery. Create a revealMistery method, that will receive our misteryEnvelope array as an argument and return the revealed mistery like this:

// <FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!