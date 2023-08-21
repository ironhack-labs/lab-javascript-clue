const suspectsArray = [
    {
      firstName: 'Jacob',
      lastName: 'Green',
      occupation: 'Entrepreneur',
      age: 45,
      description: 'He has a lot of connections and is always willing to help people out -- for a price.',
      image: 'jacob_green.jpg',
      color: 'green'
    },
];

const weaponsArray = [
  {
    name: 'Rope',
    weight: 1.5
  },
];

const roomsArray = [
    {
      name: 'Kitchen'
    },
  ];


// ITERATION 2

function selectRandom(array) {
    const randomIndex = Math.floor(Math.random() *array.length);
    return array[randomIndex];
}

function pickMystery() {
    const mystery = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
};
return mystery;
}
const mysteryToSolve = pickMystery();
console.log('Mystery to solve:', mysteryToSolve);


// ITERATION 3

function revealMystery(envelope) {
const{suspect, weapon, room} = envelope;
const message = `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
return message;
}

// Example mystery envelope (replace this with the actual mystery envelope)
const MysteryEnvelope = {
suspect: {
  firstName: 'Jacob',
  lastName: 'Green'
},
weapon: {
  name: 'Rope'
},
room: {
  name: 'Kitchen'
}
};

// Call the revealMystery function to get the revealing message
const Message = revealMystery(mysteryEnvelope);{
console.log(Message);
const message = `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
  return message;
}
const mysteryEnvelope1 = {
    suspect: {
      firstName: 'Jacob',
      lastName: 'Green'
    },
    weapon: {
      name: 'Rope'
    },
    room: {
      name: 'Kitchen'
    }
  };
  const mysteryEnvelope = {
    suspect: {
      firstName: 'Jacob',
      lastName: 'Green'
    },
    weapon: {
      name: 'Rope'
    },
    room: {
      name: 'Kitchen'
    }
  };

  const revealingMessage = revealMystery(mysteryEnvelope);
  console.log(revealingMessage);
  
  
  
  
  
  
  
  
  
  
  
  






