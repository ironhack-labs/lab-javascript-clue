
// Characters Collection
var charactersArray = [];



// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];


//data structure

var mrGreen = {

first_name:   'Jacob',
last_name:    'Green',
color:        'green',
description:  'He has a lot of connections',
age:          45,
image:       'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
occupation:   'Entrepreneur'
}

var drOrchid = {

first_name:   'Doctor',
last_name:    'Orchid',
color:        'white',
description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
age:          26,
image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
ocupation:   'Scientist'

}

var profPlum = {

first_name:   'Victor',
last_name:    'Plum',
color:        'purple',
description:  'Billionare video game designer',
age:          22,
image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
occupation:   'Designer'

}

var missScarlet = {

first_name:   'Kasandra',
last_name:    'Scarlet',
color:        'red',
description:  'She is an A-list movie star with a dark past',
age:          31,
image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
occupation:   'Actor'
}

var mrsPeacock = {

first_name:   'Eleanor',
last_name:    'Peacock',
color:        'blue',
description:  'She is from a wealthy family and uses her status and money to earn popularity',
age:          36,
image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
occupation:   'Socialité'
}

var mrMustard = {

first_name:   'Jack',
last_name:    'Mustard',
color:        'yellow',
description:  'He is a former football player who tries to get by on his former glory',
age:          62,
image:       ' https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
occupation:   'Retired Football player',
}

// Weapons


var rope = {
    name: 'rope',
    weight: 10
}
var knife = {
    name: 'knife',
    weight: 8
}
var candlestick = {
    name: 'candlestick',
    weight: 2
}
var dumbbell = {
    name: 'dumbbell',
    weight: 30
}
var poison = {
    name:'poison',
    weight: 2
}
var axe = {
    name:'axe',
    weight: 15
}
var bat = {
    name:'bat',
    weight: 13
}
var trophy = {
    name:'trophy',
    weight: 25
}
var pistol = {
    name:'pistol',
    weight: 20
}


var dinningRoom = {
    name: 'dinning room'
}
var conservatory = {
    name: 'conservatory'
}
var kitchen = {
    name: 'kitchen'
}
var study = {
    name: 'study'
}
var library = {
    name: 'library'
}
var billiardRoom = {
    name: 'billiardRoom'
}
var louge = {
    name: 'louge'
}
var ballroom = {
    name: 'ballroom'
}

var hall = {
    name: 'hall'

}

var spa = {
    name: 'spa'
}

var livingRoom = {
    name: 'living room'
}

var observatory = {
    name: 'observatory'
}

var theater = {
    name: 'theaher'
}

var guestHouse = {
    name: 'guest house'
}

var patio = {
    name: 'patio'
}


// Characters Collection(
 charactersArray.push(mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard);



// Rooms' Collection
 weaponsArray.push(rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol);

// Weapons Collection
 roomsArray.push(dinningRoom,conservatory,kitchen,study,library,billiardRoom,louge,ballroom,hall,spa,livingRoom,observatory,theater,guestHouse,patio);


 function randomSelector(array){
     
      var ramd = Math.floor((Math.random()* array.length-1)+1);


      return array[ramd];
 }

 function pickMistery(array) {
    var misteryEnvelope = [
       
    ]

  misteryEnvelope.push(randomSelector(charactersArray));

  misteryEnvelope.push( randomSelector(weaponsArray));

  misteryEnvelope.push( randomSelector(roomsArray));

  if(misteryEnvelope.length===0){
      return;
  }

  return misteryEnvelope;

 }

 

 

 function revealMistery (pickMisteryELement){
    var name, lastName, weapon, room;

    mistery = pickMistery(pickMisteryELement);
    console.log(mistery);
    console.log(mistery[0].first_name);
    name = mistery[0].first_name;
    lastName = mistery[0].last_name;
    weapon = mistery[1].name;
    room = mistery[2].name;

    return `${name} ${lastName} killed Mr.Boddy using the ${weapon} in the ${room}!!!!`;

 }



