// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
      firstName: 'Jacob',
      lastName: 'Green',
      occupation: 'Entrepreneur',
      age: 30,
      description: 'Jacob Green is an entrepreneur',
      image: '',
      color: 'white'
    },
    {
      firstName: 'Steven',
      lastName: 'Richard',
      occupation: 'Doctor',
      age: 32,
      description: 'Doctor Orchid is a Doctor',
      image: '',
      color: 'red'
    },
    {
        firstName: 'James',
        lastName: 'Dean',
        occupation: 'Engineer',
        age: 30,
        description: 'James Dean is an Engineer',
        image: '',
        color: 'Blue'
      },
      {
        firstName: 'James',
        lastName: 'Smith',
        occupation: 'Writer',
        age: 40,
        description: 'James Smith is a Writer',
        image: '',
        color: 'Purple'
      },
      {
        firstName: 'Sam',
        lastName: 'Adam',
        occupation: 'Builder',
        age: 40,
        description: 'Sam Adam is a Builder',
        image: '',
        color: 'Yellow'
      },
      {
        firstName: 'Sarah',
        lastName: 'Kurt',
        occupation: 'Nurse',
        age: 22,
        description: 'Sarah Kurt is a Nurse',
        image: '',
        color: 'Brown'
      },
  ];
  
  const weaponsArray = [
    {
      name: 'Pistol',
      weight: 3
    },
    {
      name: 'Dagger',
      weight: 2
    },
    {
      name: 'Stick',
      weight: 1
    },
    {
        name: 'Handgun',
        weight: 4
      },
      {
        name: 'Shotgun',
        weight: 5
      },
      {
        name: 'Knife',
        weight: 6
      },
      {
        name: 'Hammer',
        weight: 7
      },
      {
        name: 'Rifle',
        weight: 8
      },
      {
        name: 'Bow',
        weight: 9
      },
  ];
  
  const roomsArray = [
    {
      name: 'Bathroom'
    },
    {
      name: 'LivingRoom'
    },
    {
      name: 'Kitchen'
    },
   
  ];


// ITERATION 2

function selectRandom(array) {
    // Generate a random index
    const indexRandom = Math.floor(Math.random() * array.length);
    // Return the element at the random index
    return array[indexRandom];
  }
  
  function pickMystery() {
    return {
      suspect: selectRandom(suspectsArray),
      weapon: selectRandom(weaponsArray),
      room: selectRandom(roomsArray)
    };
  }


// ITERATION 3

function revealMystery(envelope) {
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
  }

