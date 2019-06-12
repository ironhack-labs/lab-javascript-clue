// Characters
// mrGreen   Jacob Green
let mrGreen = {
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"
  };
  
  
//drOrchi   Doctor Orchid
let drOrchid= {
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation:   "Scientist",
  };
  
//profPlum  Victor Plum
let profPlum = {
  first_name:   "Victor",
  last_name:   "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"
  };
  
//   missScarlet Kasandra Scarlet
let missScarlet= {
  first_name:   "Kasandra",
  last_name:   "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"
  };
  
 // mrsPeacock  Eleanor Peacock 
 let mrsPeacock = {
  first_name:  "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"
  };
  
 // mrMustard   Jack Mustard 
 let mrMustard = {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"
  };
  
  
 // WEAPONS OBJECT
 //rope
 let rope= {
  name: "rope",        
  weight: 10
  };
  
 //knife
 let knife= {
  name: "knife",         
  weight: 8
  };
  
 //candlestick
 let candlestick = {
  name: "candlestick",   
  weight: 2
  };
  
 //dumbbell
 let dumbbell = {
  name: "dumbbell",      
  weight: 30
  };
  
 //poison
 let poison = {
  name: "poison",        
  weight: 2
  };
  
 //axe
 let axe ={name: "axe",        
  weight: 15
  };
  
 //bat
 let bat= {
  name: "bat",           
  weight: 13
  };
  
 //trophy
 let trophy = {
  name: "trophy",        
  weight: 25
  };
  
 //pistol
 let pistol = {
  name: "pistol",       
  weight: 20
  };
  
// ROOM OBJECT
  
let dinningRoom= {name: "Dinning Room"};
let conservatory={name: "Conservatory"};
let kitchen={name: "Kitchen"};
let study ={ name: "Study"};
let library = {name: "Library"};
let billiardRoom ={name: "Billiard Room"};
let lounge ={name: "Lounge"};
let ballroom ={name: "Ballroom"};
let hall ={name: "Hall"};
let spa ={name: "Spa"};
let livingRoom ={name: "Living Room"};
let observatory ={name: "Observatory"};
let theater ={name: "Theater"};
let guestHouse ={name: "Guest House"};
let patio ={name: "Patio"};
 
const charactersArray = [];
const weaponsArray = [];
const roomsArray = [];

charactersArray.push(mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard);
weaponsArray.push(rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol);
roomsArray.push(dinningRoom,conservatory,kitchen,study,library,billiardRoom,lounge,ballroom,hall,spa,livingRoom,observatory,theater,guestHouse,patio);

// console.log(charactersArray);
// console.log(weaponsArray);
// console.log(roomsArray);

function randomSelector(array){
  let element = Math.floor(Math.random()*array.length);
  return array[element];
};

function pickMistery(){
  let misteryEnvelope = [];
  misteryEnvelope.push(randomSelector(charactersArray));
  misteryEnvelope.push(randomSelector(weaponsArray));
  misteryEnvelope.push(randomSelector(roomsArray));
  return misteryEnvelope;
};

function revealMistery(array){
  return (`${array[0].first_name} ${array[0].last_name} killed Mr.Boddy using the ${array[1].name} in the ${array[2].name}!!!!`);
};

let mistery = pickMistery(charactersArray,weaponsArray,roomsArray);

revealMistery(mistery);

