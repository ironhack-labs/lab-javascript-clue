// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: "John",
        lastName: "Doe",
        occupation: "Lawyer",
        age: 35,
        description: "Tall, dark hair, wears glasses",
        image: "https://example.com/john_doe.jpg",
        color: "blue"
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        occupation: "Doctor",
        age: 42,
        description: "Short, blonde hair, always carries a stethoscope",
        image: "https://example.com/jane_smith.jpg",
        color: "green"
      },
      {
        firstName: "David",
        lastName: "Johnson",
        occupation: "Chef",
        age: 28,
        description: "Medium height, bald, always wears a chef hat",
        image: "https://example.com/david_johnson.jpg",
        color: "red"
      },
      {
        firstName: "Emily",
        lastName: "Davis",
        occupation: "Software Engineer",
        age: 29,
        description: "Average height, blonde hair, always wears a hoodie",
        image: "https://example.com/emily_davis.jpg",
        color: "purple"
      },
      {
        firstName: "Michael",
        lastName: "Brown",
        occupation: "Businessman",
        age: 45,
        description: "Tall, dark hair, always wears a suit",
        image: "https://example.com/michael_brown.jpg",
        color: "gray"
      },
      {
        firstName: "Sarah",
        lastName: "Lee",
        occupation: "Journalist",
        age: 31,
        description: "Short, black hair, always carries a notepad",
        image: "https://example.com/sarah_lee.jpg",
        color: "orange"
      } 
    
];

// Rooms Array

const roomsArray = [  {
    name: "Study"
  },
  {
    name: "Library"
  },
  {
    name: "Billiard Room"
  },
  {
    name: "Conservatory"
  },
  {
    name: "Ballroom"
  },
  {
    name: "Hall"
  },
  {
    name: "Kitchen"
  },
  {
    name: "Dining Room"
  },
  {
    name: "Lounge"
  },
  {
    name: "Cellar"
  },
  {
    name: "Attic"
  },
  {
    name: "Bathroom"
  },
  {
    name: "Bedroom"
  },
  {
    name: "Closet"
  },
  {
    name: "Guest Room"
  }
];

// Weapons Array

const weaponsArray = [
    {
        name: "Revolver",
        weight: 2.5
      },
      {
        name: "Knife",
        weight: 0.3
      },
      {
        name: "Candlestick",
        weight: 0.8
      },
      {
        name: "Lead Pipe",
        weight: 1.5
      },
      {
        name: "Wrench",
        weight: 1.2
      },
      {
        name: "Rope",
        weight: 0.5
      },
      {
        name: "Poison",
        weight: 0.1
      },
      {
        name: "Dumbbell",
        weight: 4.0
      },
      {
        name: "Bat",
        weight: 1.0
      }
];


// ITERATION 2

    function selectRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }
    


  
      


// Pick a random mystery
function pickMystery() {
    return {
      suspect: selectRandom(suspectsArray),
      weapon: selectRandom(weaponsArray),
      room: selectRandom(roomsArray)
    };
  }



// ITERATION 3
function revealMystery(envelope) {
    const { suspect, weapon, room } = envelope;
    return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
  }

