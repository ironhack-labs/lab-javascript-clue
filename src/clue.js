// ITERATION 1

// Suspects Array

const suspectsArray = [
  { firstName: 'victor',
    lastName: 'Green',
    occupation: '',
    age: 21,
    description: '',
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.',
    color: '',
  },{
    firstName: 'jacob',
    lastName: 'Orchid',
    occupation: '',
    age: 22,
    description: '',
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.',
    color: '',
  },{
    firstName: 'peter',
    lastName: 'lam',
    occupation: '',
    age: 23,
    description: '',
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.',
    color: '',

  },{
    firstName: 'maria',
    lastName: 'len',
    occupation: '',
    age: 24,
    description: '',
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.',
    color: '',
  },{
    firstName: 'lourdes',
    lastName: 'way',
    occupation: '',
    age: 25,
    description: '',
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.',
    color: '',
  },{
    firstName: 'joseph',
    lastName: 'pref',
    occupation: '',
    age: 26,
    description: '',
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.',
    color: '',
  }
];

// Rooms Array

const roomsArray = [
  {
    name: '',
  },{
    name: '',
  },{
    name: '',
  },{
    name: '',
  },{
    name: '',
  },{
    name: '',
  },{
    name: '',
  },{
    name: '',
  },{
    name: '',
  },{
    name: '',
  },{
    name: '',
  },{
    name: '',
  },{
    name: '',
  },{
    name: '',
  },{
    name: '',
  },
];

// Weapons Array

const weaponsArray = [
  { 
    name: 'rope',
    weight: 21

  },{
    name: 'knife',
    weight: 21

  },{
    name: 'candlestick',
    weight: 21

  },{
    name: 'dumbbell',
    weight: 21

  },{
    name: 'poison',
    weight: 21

  },{
    name: 'axe',
    weight: 21

  },{
    name: 'bat',
    weight: 21

  },{
    name: 'trophy',
    weight: 21

  },{
    name:'pistol',
    weight: 21
  }
];


// ITERATION 2

function selectRandom(one, two, four) {
  
  if(selectRandom.length === 0) {
    return undefined
  }
  
}

function pickMystery() {
  const three = [
    {
      suspect: 'as',
    },{
      weapons: 'worse'

    },{
      room: 1

    }

     

]
}



// ITERATION 3

function revealMystery() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
