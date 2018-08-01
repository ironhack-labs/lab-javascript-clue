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
frst_name:   Doctor
lst_name:    Orchid
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


var charactersArray = [];
var weaponsArray = [];
var roomsArray = [{name: "Dinning Room"}, {name: "Conservatory"}, {name: "Kitchen"}];

var mrGreen = {

firstName:   "Jacob",
lastName:    "Green",
colorPerson:        "green",
description:  "He has a lot of connections",
age:          45,
imagePerson: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg"  ,      
occupation:   "Entrepreneur"
  }

var drOrchid = {
firstName:   "Doctor",
lastName:    "Orchid",
colorPerson:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
imagePerson:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist"
}

var profPlum = {
firstName:   "Victor",
lastName:    "Plum",
colorPerson:        "purple",
description:  "Billionare video game designer",
age:          22,
imagePerson:  "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"
}



var rope = {
  name: "rope", 
  weight: 10
} ;

var knife = {
  name: "knife",
  weight: 8
};

var candlestick = {
  name: "candlestick",
  weight: 2
};




charactersArray.push(mrGreen, drOrchid, profPlum);
weaponsArray.push(rope, knife, candlestick);



/* Defines randomSelector
Return undefined if the array is empty
Return undefined if the array is empty
Return the element of a single value array
Should return an element of the array
Return a random element of the array
 */

var getRandomCharacter;
var getRandomWeapon;
var getRandomRoom;


function randomSelector(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  
  return arr[randomIndex]
}

function pickMystery() {
  var arr = []

  arr.push(
  randomSelector(charactersArray),
  randomSelector(weaponsArray),
  randomSelector(roomsArray))

  return arr
};

var mysteryEnvelope = pickMystery();

function revealMystery(envelope) {
  console.log(mysteryEnvelope[0].firstName + " " + mysteryEnvelope[0].lastName + " killed Mr.Boddy using the " + mysteryEnvelope[1].name + " in the "  + mysteryEnvelope[2].name + "!!!");
};

revealMystery(mysteryEnvelope) ;

