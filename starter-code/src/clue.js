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
var charactersArray = [ ]

var mrGreen =
    { first_name: 'Jacob', last_name: 'Green', color:'green', description:'He has a lot of connections', 
  age: 45, image:'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', occupation:'Entrepreneur'};

  charactersArray.push(mrGreen);

var drOrchid =
  { first_name: 'Doctor', last_name: 'Orchid', color:'white', description:'PhD in plant toxicology. Adopted daughter of Mr. Boddy', 
  age: 26, image:'http://www.radiotimes.com/uploads/images/Original/111967.jpg', occupation:'Scientist'};

  charactersArray.push(drOrchid);

var profPlum = 
  { first_name: 'Victor', last_name: 'Plum', color:'purple', description:'Billionare video game designer', 
  age: 22, image:'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg', occupation:'Designer'};

  charactersArray.push(profPlum);

var missScarlet =
  { first_name: 'Kasandra', last_name: 'Scarlet', color:'red', description:'She is an A-list movie star with a dark past', 
  age: 31, image:'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg', occupation:'Actor'};

  charactersArray.push(missScarlet);

var mrsPeacock =
  { first_name: 'Eleanor', last_name: 'Peacock', color:'white', description:'She is from a wealthy family and uses her status and money to earn popularity', 
  age: 36, image:'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', occupation:'Socialité'};

  charactersArray.push(mrsPeacock);

var mrMustard =
  { first_name: 'Jack', last_name: 'Mustard', color:'yellow', description:'He is a former football player who tries to get by on his former glory', 
  age: 62, image:'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg', occupation:'Retired Football player'};
  
  charactersArray.push(mrMustard);
;

var roomsArray = [ ]
;
var dining =
{name:'Dining Room'};

roomsArray.push(dining);

var conservatory =
{name:'Conservatory'};

roomsArray.push(conservatory);

var kitchen =
{name:'Kitchen'};

roomsArray.push(kitchen);

var study =
{name:'Study'};

roomsArray.push(study);

var library =
{name:'Library'};

roomsArray.push(library);

var billiard =
{name:'Billiard Room'};

roomsArray.push(billiard);

var lounge =
{name:'Lounge'};

roomsArray.push(lounge);

var ballroom =
{name:'Ballroom'};

roomsArray.push(ballroom);

var hall =
{name:'Hall'};

roomsArray.push(hall);

var spa =
{name:'Spa'};

roomsArray.push(spa);

var living =
{name:'Living Room'};

roomsArray.push(living);

var observatory =
{name: 'Observatory'};

roomsArray.push(observatory);

var theater =
{name: 'Theater'};

roomsArray.push(theater);

var guest =
{name: 'Guest House'};

roomsArray.push(guest);

var patio =
{name: 'Patio'};

roomsArray.push(patio);


// Weapons Collection
var weaponsArray = [];

var rope =
{ name: 'rope', weight: '10'};

weaponsArray.push(rope);

var knife =
{ name: 'knife', weight: '8'};

weaponsArray.push(knife);

var candlestick =
{ name: 'candlestick', weight: '2'};

weaponsArray.push(candlestick);

var dumbbell =
{ name: 'dumbbell', weight: '30'};

weaponsArray.push(dumbbell);

var poison =
{ name: 'poison', weight: '2'};

weaponsArray.push(poison);

var axe =
{ name: 'axe', weight: '15'};

weaponsArray.push(axe);

var bat =
{ name: 'bat', weight: '13'};

weaponsArray.push(bat);

var trophy =
{ name: 'trophy', weight: '25'};

weaponsArray.push(trophy);

var pistol =
{ name: 'pistol', weight: '20'};

weaponsArray.push(pistol);

function randomSelector(array){
  var randNum = Math.floor((Math.random())* array.length);
  return array[randNum];
  }


  
  // console.log(randomSelector(charactersArray));
  
  let misteryEnvelope;
  function pickMistery(){
    misteryEnvelope = [];
    misteryEnvelope.push(randomSelector(charactersArray));
    misteryEnvelope.push(randomSelector(weaponsArray));
    misteryEnvelope.push(randomSelector(roomsArray));
    
    return misteryEnvelope;
  }
  console.log('mistery: = = = = = ',misteryEnvelope);

  // console.log('#############################');


function revealMistery(misteryEnvelope){
  return `${misteryEnvelope[0].first_name} ${misteryEnvelope[0].last_name} killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${misteryEnvelope[2].name}!!!!`;
  
}
pickMistery();
revealMistery(misteryEnvelope)


// console.log(misteryEnvelope);