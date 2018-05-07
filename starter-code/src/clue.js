// Characters:

var mrGreen={};
mrGreen.firstName= 'Jacob';
mrGreen.lastName= 'Green'; 
mrGreen.color= 'green'; 
mrGreen.description= 'He has a lot of connections';
mrGreen.age= 45; 
mrGreen.image= 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg';
mrGreen.occupation= 'Entreprenneur';

var drOrchid={};
drOrchid.firstName='Doctor'; 
drOrchid.lastName= 'Orchid';
drOrchid.color= 'white';
drOrchid.description='PhD in plant toxicology. Adopted daughter of Mr. Boddy';
drOrchid.age= 26;
drOrchid.image='http://www.radiotimes.com/uploads/images/Original/111967.jpg'
drOrchid.occupation= 'Scientist'

var profPlum={};
profPlum.firstName='Victor';
profPlum.lastName='Plum';
profPlum.color='purple';
profPlum.description='Billionare video game designer'
profPlum.age=22;
profPlum.image='https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg'
profPlum.occupation='Designer'

var missScarlet={};
missScarlet.firstName='Kasandra';
missScarlet.lastName='Scarlet'
missScarlet.color='red';
missScarlet.description='She is an A-list movie star with a dark past'
missScarlet.age=31;
missScarlet.image='https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg';
missScarlet.occupation='Actor';

var mrsPeacock={};
mrsPeacock.firstName='Eleanor';
mrsPeacock.lastName='Peacock';
mrsPeacock.color='blue';
mrsPeacock.description='She is from a wealthy family and uses her status and money to earn popularity'
mrsPeacock.age=36;
mrsPeacock.image='https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg';
mrsPeacock.occupation='Socialité'

var mrMustard={};
mrMustard.firstName='Jack';
mrMustard.lastName='Mustard';
mrMustard.color='yellow';
mrMustard.description='He is a former football player who tries to get by on his former glory';
mrMustard.image='https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg';
mrMustard.occupation='Retired Football player'

// Characters Collection
var charactersArray = [];

charactersArray.push(mrGreen, mrMustard, mrsPeacock, drOrchid, profPlum, missScarlet)

//Weapons:
var rope={};
rope.name='rope';
rope.weight= 10;

var knife={};
knife.name='knife';
knife.weight=8;

var candlestick={};
candlestick.name= 'candlestick';
candlestick.weight= 2;

var dumbbell={};
dumbbell.name='dumbbell';
dumbbell.weight=30;

var poison={};
poison.name= 'poison';
poison.weight= 2;

var axe={};
axe.name= 'axe';
axe.weight= 15;

var bat={};
bat.name='bat';
bat.weight=13;

var trophy={};
trophy.name= 'trophy';
trophy.weight= 25;

var pistol={};
pistol.name='pistol';
pistol.weight= 20;

// Weapons Collection
var weaponsArray = [pistol,trophy, bat, axe, poison, dumbbell, candlestick, knife, rope];


// Rooms

var dinningRoom={};
dinningRoom.name='Dinning Room';

var conservatory={};
conservatory.name='Conservatory';

var kitchen={};
kitchen.name='Kitchen';

var study={};
study.name='Study';

var library={};
library.name='Library';

var billiardRoom={};
billiardRoom.name='Billiard Room';

var lounge={};
lounge.name= 'Lounge';

var ballroom={};
ballroom.name='Ballroom';

var hall={};
hall.name= 'Hall';

var spa={};
spa.name= 'Spa';

var livingRoom={};
livingRoom.name= 'Living Room';

var observatory={};
observatory.name= 'Observatory';

var theater={}
theater.name= 'Theater';

var guestHouse={};
guestHouse.name='Guest House';

var patio={};
patio.name= 'Patio';


// Rooms' Collection
var roomsArray = [];
roomsArray.push(patio, guestHouse,theater, observatory, library, livingRoom, spa, hall, ballroom, lounge, billiardRoom, study, kitchen, conservatory,dinningRoom)

//iteration 2: Creating the mistery:
/*
Exercise says: 'create method'. Tried:

Array.prototype.randomSelector= function(){
  return this[Math.floor(Math.random()*this.length)]
}

It works, but does not pass test on Jasmine, so:*/

function randomSelector (array){//will generate a random number between 0 and array.length-1, then use that number as idex of array in argument
  return array[Math.floor(Math.random()*array.length)]
}
// create a function that returns an array applying randomSelector to the three arrays:
function pickMistery(){
  return Array.of (randomSelector(charactersArray), randomSelector(weaponsArray),randomSelector(roomsArray));
  }
  
  /*
  console.log(pickMistery()) returns an array of three elements
  console.log(pickMistery().length) equals 3;
  console.log(pickMistery()[0]) returns a character
  console.log(pickMistery()[1]) returns a weapon
  console.log(pickMistery()[2])returns a room
  */
  var misteryEnvelope = pickMistery()//equals var to single execution of pickMistery
  
  function revealMistery(){
    return misteryEnvelope[0].firstName+ ' ' + misteryEnvelope[0].lastName +' killed Mr.Boddy using the ' +misteryEnvelope[1].name+' in the '+misteryEnvelope[2].name+'!!!!'
  
  }
  
  console.log(misteryEnvelope)
  revealMistery()
  
  /*console.log(misteryEnvelope) 
  console.log(revealMistery())They both equal the same values. should pass all tests on Jasmine, but doesn't
*/