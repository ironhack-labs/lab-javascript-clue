// ITERATION 1

// Suspects Array

const suspectsArray = [
    {firstName: 'Bob', lastName: 'Bob', occupation: '', age: 0, description: '', image: '', color: ''},
    {firstName: 'Melisa', lastName: 'Asilem', occupation: '', age: 0, description: '', image: '', color: ''},
    {firstName: 'Bo', lastName: 'Ob', occupation: '', age: 0, description: '', image: '', color: ''},
    {firstName: 'Jonas', lastName: 'Sanoj', occupation: '', age: 0, description: '', image: '', color: ''},
    {firstName: 'Robin', lastName: 'Nibor', occupation: '', age: 0, description: '', image: '', color: ''},
    {firstName: 'Ben', lastName: 'Neb', occupation: '', age: 0, description: '', image: '', color: ''},
  ];
  
  // Rooms Array
  
  const roomsArray = [
    {name: 'Outside',},
    {name: 'Inside',},
    {name: 'upper',},
    {name: 'lower',},
    {name: 'basement',},
    {name: 'first bedroom',},
    {name: 'second bedroom',},
    {name: 'bathroom',},
    {name: 'lower bathroom',},
    {name: 'living room',},
    {name: 'kitchen',},
    {name: 'drawer',},
    {name: 'closet',},
    {name: 'window',},
    {name: 'refrigerator',}
  ];
  
  // Weapons Array
  
  const weaponsArray = [
    {name: 'Stone', weight: 0},
    {name: 'holy grail', weight: 0},
    {name: 'bible', weight: 0},
    {name: 'knife', weight: 0},
    {name: 'sword', weight: 0},
    {name: 'mace', weight: 0},
    {name: 'staff', weight: 0},
    {name: 'stick', weight: 0},
    {name: 'can', weight: 0}
  ];
  
  
  // ITERATION 2
  
  function selectRandom(room) {
    const random = room[Math.floor(Math.random() * room.length)]
    return random;
  }
  const randomRoom = selectRandom(roomsArray)

  function selectRandomWeapon(weapon) {
    const random = weapon[Math.floor(Math.random() * weapon.length)]
    return random;
  }
  const randomWeapon = selectRandomWeapon(weaponsArray);

  function selectRandomSuspect(suspect) {
    const random = suspect[Math.floor(Math.random() * suspect.length)]
    return random;
  }
  const randomSuspect = selectRandomSuspect(suspectsArray)

  function pickMystery() {
    randomObject = {
      suspect: randomSuspect,
      weapon: randomWeapon,
      room: randomRoom,
    }
    return randomObject;
  }

  // ITERATION 3
  function revealMystery(placeHolder) {
    const string = `${placeHolder.suspect.firstName} ${placeHolder.suspect.lastName} killed Mr. Boddy using the ${placeHolder.weapon.name} in the ${placeHolder.room.name}!`;
    return string;
  }
