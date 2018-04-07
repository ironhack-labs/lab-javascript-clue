/* eslint no-undef: "off" */
/* eslint jasmine/no-spec-dupes: "off" */

describe('Find a random element of the array - randomSelector', function () {
  it('Defines randomSelector', function () {
    expect(typeof randomSelector).toBe('function');
  });

  function randomSelector(cluedoCards){
    var randomCardindex = Math.floor(Math.random()*cluedoCards.length);
  var randomCard = cluedoCards[randomCardindex];
  return randomCard
  }

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

  function pickMistery(){
  var RandomCharacter = randomSelector(charactersArray);
  var RandomRoom = randomSelector(roomsArray);
  var RandomWeapon = randomSelector(weaponsArray);

  var mistery = [randomCharacter, randomWeapon, randomRoom];
  mistery = randomSelector[ mistery ];

  return mistery;
}

  it('Return an array', function () {
    expect(typeof pickMistery()).toEqual('object');
  });
  function pickMistery(){
    var randomCharacter = randomSelector(charactersArray);
    var randomRoom = randomSelector(roomsArray);
    var randomWeapon = randomSelector(weaponsArray);
  
    var mistery = [randomCharacter, randomWeapon, randomRoom];
    return mistery;
  }

  it('Return a non empty array', function () {
    expect(pickMistery().length).toBeGreaterThan(0);
  });
  function pickMistery(){
    var RandomRoom = randomSelector(roomsArray);
    var mistery = randomRoom;

    return mistery;
  }

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
  function revealMistery(){
    var misteryEnvelope = [];
    
    var randomCharacter = randomSelector(charactersArray);
    misteryEvelope.push(randomCharacter);
     var randomWeapon = randomSelector(weaponsArray);
    misteryEvelope.push(randomCharacter);
     var randomRoom = randomSelector(roomArray);
    misteryEvelope.push(randomCharacter);
    return misteryEnvelope;
    
  }

  it('Return an array', function () {
    expect(typeof revealMistery([{ first_name: 'aa', last_name: 'abc' }, { name: 'abd' }, { name: 'abb' }])).toEqual('string');
  });

  

  it('Return <FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!', function () {
    expect(revealMistery([{ first_name: 'Victor', last_name: 'Plum' }, { name: 'poison' }, { name: 'Billiard Room' }])).toEqual('Victor Plum killed Mr.Boddy using the poison in the Billiard Room!!!!');
  });
});
