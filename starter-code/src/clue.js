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

// Characters Collection
var mrGreen = {first_name: 'Jacob', last_name: "Green", color: "green", description: "He has a lot of connections", age: 45, image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", occupation: "Entrepreneur"};
var drOrchid = {first_name: "Doctor", last_name: "Orchid", color:"white", description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy", age: 26, image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg", occupation: "Scientist"};
var profPlum = {first_name: "Victor", last_name: "Plum", color:"purple", description:"Billionare video game designer", age: 22, image:"https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", occupation:"Designer"};
var missScarlet= {first_name:"Kasandra", last_name:"Scarlet", color:"red", description:"She is an A-list movie star with a dark past", age: 31, image:"https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", occupation:"Actor"};
var mrsPeacock= {first_name:"Eleanor", last_name:"Peacock", color:"blue", description:"She is from a wealthy family and uses her status and money to earn popularity", age: 36, image:"https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", occupation:"Socialité"};
var mrMustard = {first_name:"Jack", last_name:"Mustard", color:"yellow", description:"He is a former football player who tries to get by on his former glory", age:62, image:"https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", occupation:"retired football player"};


// Rooms' Collection

var dinningRoom = {name:"Dining Room"};
var conservatory = {name:"Conservatory"};
var kitchen= {name:"Kitchen"};
var study = {name:"Study"};
var library = {name:"Library"};
var billiardRoom= {name:"Billiard Room"};
var lounge = {name:"Lounge"};
var ballroom = {name:"Ballroom"};
var hall = {name:"Hall"};
var spa = {name:"Spa"};
var livingRoom= {name:"Living Room"};
var observatory= {name:"Observatory"};
var theater = {name:"Theater"};
var guestHouse= {name:"Guest House"};
var patio= {name:"Patio"};



// Weapons Collection


var rope = {name:"Rope", weight:10};
var knife = {name:"Knife", weight:8};
var candlestick = {name:"Candlestick", weight:2};
var dumbbell = {name:"Dumbbell", weight:30};
var poison = {name:"Poison", weight:2};
var axe = {name:"Axe", weight:15};
var bat = {name:"Bat", weight:13};
var trophy = {name:"Trophy", weight:25};
var pistol = {name:"Pistol", weight:20};


//////////////////////////////////////// pushing

var charactersArray = [];
 charactersArray.push(mrGreen);
 charactersArray.push(drOrchid);
 charactersArray.push(profPlum);
 charactersArray.push(missScarlet);
 charactersArray.push(mrsPeacock);
 charactersArray.push(mrMustard);


var weaponsArray = [];
  weaponsArray.push(rope);
  weaponsArray.push(knife);
  weaponsArray.push(candlestick);
  weaponsArray.push(dumbbell);
  weaponsArray.push(poison);
  weaponsArray.push(axe);
  weaponsArray.push(bat);
  weaponsArray.push(pistol);

var roomsArray = [];
  roomsArray.push(dinningRoom);
  roomsArray.push(conservatory);
  roomsArray.push(kitchen);
  roomsArray.push(study);
  roomsArray.push(library);
  roomsArray.push(billiardRoom);
  roomsArray.push(lounge);
  roomsArray.push(ballroom);
  roomsArray.push(hall);
  roomsArray.push(spa);
  roomsArray.push(livingRoom);
  roomsArray.push(observatory);
  roomsArray.push(theater);
  roomsArray.push(guestHouse);
  roomsArray.push(patio);

function randomSelector(array){
  if (array.length === 0){
    return undefined;
  } let randomCard = array[Math.floor(Math.random()* array.length)];
  // if (array.length === 1){
    // return array[0];
    
  return randomCard;
}  


function pickMistery(){
  var misteryEnvelope = [];
  
  let randomCharacter = randomSelector(charactersArray);
  let randomWeapon = randomSelector(weaponsArray);
  let randomRoom = randomSelector(roomsArray);

  misteryEnvelope.push(randomCharacter);
  misteryEnvelope.push(randomWeapon);
  misteryEnvelope.push(randomRoom);

  return misteryEnvelope;


}

function revealMistery(misteryEnvelope){

  console.log(misteryEnvelope);
  let revealedName = '' ;
  revealedName = (misteryEnvelope[0].first_name);

  let revealedLastName = '';
  revealedLastName = (misteryEnvelope[0].last_name);

  let revealedWeapon = '';
  revealedWeapon = (misteryEnvelope[1].name);

  let revealedRoom = '';
  revealedRoom = (misteryEnvelope[2].name);

  return revealedName + ' ' + revealedLastName + ' killed Mr.Boddy using the ' + revealedWeapon + ' in the ' +revealedRoom + '!!!!';

  

}