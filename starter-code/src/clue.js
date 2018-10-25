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
var charactersArray = [
  
      mrGreen= [{   
      name:"Jacob",
      lastName:"Green",
      description:"He has a lot of connections",
      age:"45", 
      image:"https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg"
    }],
      drOrchid= [{
      name:"Doctor",
      lastName:"Orchid",
      description:"PhD in plant toxicology. Adopted daughter of Mr. Boddy",
      age:"26",
      image:"http://www.radiotimes.com/uploads/images/Original/111967.jpg"
    }],
      profPlum= [{
      name:"Victor",
      lastName:"Plum",
      description:"billionare video game designer",
      age:"22",
      image:"https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg"
    }],
      missScarlet= [{
      name:"Kasandra",
      lastName:"Scarlet",
      description:"She is an A-list movie star with a dark past",
      age:"31",
      image:"https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg"
    }],
      mrsPeacock= [{
      name:"Eleanor",
      lastName:"Peacoc",
      description:"She is from a wealthy family and uses her status and money to earn popularity",
      age:"36",
      image:"https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg"
    }],
      mrMustard= [{
      name:"Jack",
      lastName:"Mustard",
      description:"He is a former football player who tries to get by on his former glory",
      age:"62",
      image:"https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg"
    }]
  
  
  
  ]

  


// Rooms' Collection
var roomsArray = [
  room1=[{name:"Dinning Room"}],
  room2=[{name:"Conservatory"}],
  room3=[{name:"Kitchen"}],
  room4=[{name:"Study"}],
  room5=[{name:"Library"}],
  room6=[{name:"Library"}],
  room7=[{name:"Billiard Room"}],
  room8=[{name:"Lounge"}],
  room9=[{name:"Ballroom"}],
  room10=[{name:"Hall"}],
  room11=[{name:"Spa"}],
  room12=[{name:"Living Room"}],
  room13=[{name:"Observatory"}],
  room14=[{name:"Theater"}],
  room15=[{name:"Guest House"}],
  room16=[{name:"Patio"}]

];

// Weapons Collection
var weaponsArray = [
weapons1=[{weapons:"rope",weight: 10}],        
weapons2= [{weapons:"knife", weight: 8}],         
weapons3=[{weapons: "candlestick",weight: 2}],
weapons4= [{weapons:"dumbbell", weight: 30}],   
weapons5= [{weapons:"poison", weight: 2}],     
weapons6= [{weapons:"axe", weight: 15}],  
weapons7= [{weapons:"bat", weight: 13}],       
weapons8= [{weapons:"trophy", weight: 25}],       
weapons9= [{weapons:"pistol", weight: 20}],      
];
function randomSelector(arry) {
    
  return arry[Math.floor(Math.random() * ((arry.length) - 0) + 0)];
}

function pickMistery() {
  var misteryEnvelope = [];
 misteryEnvelope.push(randomSelector(charactersArray))
 misteryEnvelope.push(randomSelector(weaponsArray))
 misteryEnvelope.push(randomSelector(roomsArray))

 return misteryEnvelope;
}

function revealMistery(arry) {
  var textSolution = `${arry[0].first_name} ${arry[0].last_name} killed Mr.Boddy using the ${arry[1].name} in the ${arry[2].name}!!!!`;
  
  return textSolution;
}








  
// function ramndomselector(array, tm){
  
//   return array[Math.random];
// }


// var character = ramndomselector(charactersArray,charactersArray.length);
// var room = ramndomselector(roomsArray,roomsArray.length);
// var weaponsArray = ramndomselector(weaponsArray,weaponsArray.length);

