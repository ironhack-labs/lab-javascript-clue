/* eslint no-undef: "off" */
/* eslint jasmine/no-spec-dupes: "off" */

describe('Find a random element of the array - randomSelector', function () {
  it('Defines randomSelector', function () {
    expect(typeof randomSelector).toBe('function');
  });

  it('Return undefined if the array is empty', function () {
    expect(randomSelector([])).toBe(undefined);
  });

  it('Return undefined if the array is empty', function () {
    expect(randomSelector([])).toBe(undefined);
  });

  it('Return the element of a single value array', function () {
    expect(randomSelector(['ab'])).toBe('ab');
  });

  it('Should return an element of the array', function () {
    var array = ['ab', 'zz', 'zx', 'zy'];

    expect(array.indexOf(randomSelector(array))).toBeGreaterThan(-1);
  });

  it('Return a random element of the array', function () {
    var spy = spyOn(Math, 'random').and.returnValue(0.5);

    expect(randomSelector(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])).toEqual('aab');
    spy.and.returnValue(0.1);

    expect(randomSelector(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])).toEqual('a');
    spy.and.returnValue(0.9);

    expect(randomSelector(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])).toEqual('kas');
  });
});
 

describe('Pick a random mistery - pickMistery', function () {
  it('Defines pickMistery', function () {
    expect(typeof pickMistery).toBe('function');
  });

  it('Return an array', function () {
    expect(typeof pickMistery()).toEqual('object');
  });

  it('Return a non empty array', function () {
    expect(pickMistery().length).toBeGreaterThan(0);
  });

  it('Return an array with 3 elements', function () {
    expect(pickMistery().length).toEqual(3);
  });

  it('Return a killer on the first index of the array', function () {
    expect(charactersArray.indexOf(pickMistery()[0])).toBeGreaterThan(-1);
  });

  it('Return a weapon on the second index of the array', function () {
    expect(weaponsArray.indexOf(pickMistery()[1])).toBeGreaterThan(-1);
  });

  it('Return a room in the third index of the array', function () {
    expect(roomsArray.indexOf(pickMistery()[2])).toBeGreaterThan(-1);
  });
});


describe('Reveal the mistery - revealMistery', function () {
  it('Defines revealMistery', function () {
    expect(typeof revealMistery).toBe('function');
  });

  it('Return an array', function () {
    expect(typeof revealMistery([{ first_name: 'aa', last_name: 'abc' }, { name: 'abd' }, { name: 'abb' }])).toEqual('string');
  });

  it('Return <FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!', function () {
    expect(revealMistery([{ first_name: 'Victor', last_name: 'Plum' }, { name: 'poison' }, { name: 'Billiard Room' }])).toEqual('Victor Plum killed Mr.Boddy using the poison in the Billiard Room!!!!');
  });
});
// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];


var mrGreen={
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"
  }
  
var drOrchid={
  frst_name:   "Doctor",
  lst_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:   "Scientist"
  }
  
  var profPlum={
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"
  }
  
  var missScarlet={
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"
  }
  
  var mrsPeacock={
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"
  }
  
  var mrMustard={
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"
  }
  
 
  
  var rope={ 
  name: "rope",
  weight: 10}
  
  var knife={ 
  name: "knife",
  weight: 8}
  
  var candlestick={ 
  name: "candlestick",
  weight: 2}
  
  var dumbbell={ 
  name: "dumbbell",
  weight: 30}
  
  var poison={ 
  name: "poison",
  weight: 2}
  
  var axe    ={ 
  name: "axe",
  weight: 15}
  
  var bat   = { 
  name: "bat",
  weight: 13}
  
  var trophy= { 
  name: "trophy",
  weight: 25}
  
  var pistol= { 
  name: "pistol",
  weight: 20}

  

  var dinningRoom={
  name: "Dinning Room"
  }
  
  var Conservatory={
  name: "Conservatory"
  }
  
  var Kitchen={
  name: "Kitchen"
  }
  
  var Study={
  name: "Study"
  }
  
  var Library={
  name: "Library"
  }
  
  var billiardRoom={
  name: "Billiard Room"
  }
  
  var Lounge={
  name: "Lounge"
  }
  
  var Ballroom={
  name: "Ballroom"
  }
  
  var Hall={
  name: "Hall"
  }
  
  var Spa={
  name: "Spa"
  }
  
  var livingRoom={
  name: "Living Room"
  }
  
  var Observatory={
  name: "Observatory"
  }
  
  var Theater={
  name: "Theater"
  }
  
  var guestHouse={
  name: "Guest House"
  }
  
  var Patio={
  name: "Patio"
  }
  
  weaponsArray.push(rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol)

  
  charactersArray.push(mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard)
  
  roomsArray.push(dinningRoom,Conservatory,Kitchen,Study,Library,billiardRoom,Lounge,Ballroom,Hall,Spa,livingRoom,Observatory,Theater,guestHouse,Patio)

  function randomSelector(array){
    var valor = array[Math.floor(Math.random()*array.length)];
    return valor
  }
  
  function pickMistery(){
    var person = randomSelector(charactersArray)
    var weapon = randomSelector(weaponsArray)
    var room = randomSelector(roomsArray)
    var misteryEnvelope = [person, weapon, room]
    return misteryEnvelope
  }
  pickMistery()

  function revealmistery(){
    return misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name + " "
  }
