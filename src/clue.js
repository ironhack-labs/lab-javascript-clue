// ITERATION 1

// Suspects Collection
const suspectsArray = [
      {
            firstName: 'Jacob',
            lastName: 'Green',
            occupation: 'Entrepreneur',
            age: 32,
            description: 'He is nice',
            image: 'picture',
            color: 'green'
      },
      {
            firstName: 'David',
            lastName: 'Red',
            occupation: 'developer',
            age: 28,
            description: 'He is awkward',
            image: 'picture',
            color: 'red'
      },
      {
            firstName: 'Mery',
            lastName: 'Blue',
            occupation: 'artist',
            age: 25,
            description: 'She is funny',
            image: 'picture',
            color: 'blue'
      },
      {
            firstName: 'Henry',
            lastName: 'Orange',
            occupation: 'UX/UI Designer',
            age: 39,
            description: 'He is sophisticated',
            image: 'picture',
            color: 'orange'
      },
      {
            firstName: 'Julia',
            lastName: 'Yellow',
            occupation: 'Data scientist',
            age: 30,
            description: 'She is a very logical person',
            image: 'picture',
            color: 'yellow'
      },
      {
            firstName: 'Peter',
            lastName: 'White',
            occupation: 'actor',
            age: 18,
            description: 'He is dumb',
            image: 'picture',
            color: 'white'
      }
];

// Rooms Collection
const roomsArray = [
      {
            name: 'Living-room'
      },
      {
            name: 'Bedroom'
      },
      {
            name: 'Kitchen'
      },
      {
            name: 'Toilet'
      },
      {
            name: 'Bathroom'
      },
      {
            name: 'Garage'
      },
      {
            name: 'Terrace'
      },
      {
            name: 'Garden'
      },
      {
            name: 'Dinning-room'
      },
      {
            name: 'Solarium'
      },
      {
            name: 'Swimming pool'
      },
      {
            name: 'Torture room'
      },
      {
            name: 'Hall'
      },
      {
            name: 'Basement'
      },
      {
            name: 'Library'
      }
];

// Weapons Collection
const weaponsArray = [
      {
            name: 'Gun',
            weight: 1.2
      },
      {
            name: 'Sword',
            weight: 2.5
      },
      {
            name: 'Axe',
            weight: 4
      },
      {
            name: 'Poison',
            weight: 0.2
      },
      {
            name: 'Pan',
            weight: 1.9
      },
      {
            name: 'Rope',
            weight: 1.2
      },
      {
            name: 'Magic wand',
            weight: 0.5
      },
      {
            name: 'Furious tigre',
            weight: 95
      },
      {
            name: 'Crossbow',
            weight: 5
      }
];


// ITERATION 2

const selectRandom = (cardStack) => cardStack[Math.ceil(Math.random() * cardStack.length) - 1]


const pickMystery = () => {
      return { suspect: selectRandom(suspectsArray), weapon: selectRandom(weaponsArray), room: selectRandom(roomsArray) }
}

const currentMystery = pickMystery()

// ITERATION 3

const revealMystery = (envelope) => {
      return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
}

console.log(revealMystery(currentMystery))