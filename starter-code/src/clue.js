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

let mrGreen ={
  first_name:"Jacob",
  last_name:"Green",
  color:"green",
  description: "He has a lot of connections",
  age:45,
  image:"https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:"Entrepreneur"
}
let drOrchid = {
  first_name:"Doctor",
  last_name:"Orchid",
  color:"white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:26,
  image:"http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:"Scientist"
}
let profPlum = {
  first_name:"Victor",
  last_name:"Plum",
  color:"purple",
  description: "Billionare video game designer",
  age:22,
  image:"https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:"Designer"

}
let missScarlet={
  first_name:"Kasandra",
  last_name:"Scarlet",
  color:"red",
  description:"She is an A-list movie star with a dark past",
  age:31,
  image:"https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:"Actor"

}
let mrsPeacock = {
  first_name:"Eleanor",
  last_name:"Peacock",
  color:"blue",
  description:"She is from a wealthy family and uses her status and money to earn popularity",
  age:36,
  image:"https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:"Socialité"

}
let mrMustard = {
  first_name:"Jack",
  last_name:"Mustard",
  color:"yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age:62,
  image:"https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:"Retired Football player"
}

let rope = {
  name: "rope",
  weight: 10,
  };
let knife ={
  name: "knife",
  weight: 8,
  };
let candlestick = {
  name: "candlestick",
  weight: 2,
  };
let dumbbell ={
  name: "dumbbell",
  weight: 30,
  };
let poison = {
  name:"poison",
  weight: 2,
  };
let axe = {
  name: "axe",
  weight: 15,
  };
let bat = {
  name: "bat",
  weight: 13,
  };
let trophy = {
  name: "trophy",
  weight: 25,
  };
let pistol = {
  name: "pistol",
  weight: 20,
  };

  let rooms = [
    { room_name: 'Dinning Room' },
    { room_name: 'Conservatory' },
    { room_name: 'Kitchen' },
    { room_name: 'Study' },
    { room_name: 'Library' },
    { room_name: 'Billiard Room' },
    { room_name: 'Lounge' },
    { room_name: 'Ballroom' },
    { room_name: 'Hall' },
    { room_name: 'Spa' },
    { room_name: 'Living Room' },
    { room_name: 'Observatory' },
    { room_name: 'Theater' },
    { room_name: 'Guest House' },
    { room_name: 'Patio' }
  ];

// Characters Collection
var charactersArray = [mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard];

// Rooms' Collection
var roomsArray = [...rooms]

// Weapons Collection
var weaponsArray = [rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol];

//Function to get a random number based on th length of the array - if array length = 10 then max number can only be 9 since array[9] will be the last element of array
const randomNumber = (limit)=>{
  let number = Math.floor(Math.random() * (limit))
  return number;
}

//function that returns an element of an array
const randomSelector = (array) =>{
  let lengthOfArray = array.length;
  let elementSelected = randomNumber(lengthOfArray);  
  return (lengthOfArray===0 ? undefined : array[elementSelected]);
}

//Function where we select a random value of each of the three arrays and returns an array with three objects
const pickMistery = () => {
  let character = randomSelector(charactersArray);
  let weapon = randomSelector(weaponsArray);
  let room = randomSelector(roomsArray);
  let mysteryEnvelope = [character,weapon,room];
  return mysteryEnvelope;
}

const revealMistery = (envelope) => {  
  return `${envelope[0].first_name} ${envelope[0].last_name} killed Mr.Boddy using the ${envelope[1].name} in the ${envelope[2].room_name}!!!!`
}

revealMistery(pickMistery());
