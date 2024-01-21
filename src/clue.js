// ITERATION 1

// Suspects Array

const suspectsArray = [{
            firstName: "Malú",
            lastName: "Moya",
            occupation: "Web Developer",
            age: 30,
            description: "Loves to chace her cat",
            image: "🌞",
            color: "blue"
    },
    {
            firstName: "Tofu",
            lastName: "Bravo",
            occupation: "Nap Master",
            age: 5,
            description: "Loves to chace her owner",
            image: "🐱",
            color: "green"
    },
    {
            firstName: "Gabriel",
            lastName: "Moya",
            occupation: "Scrum Master",
            age: 31,
            description: "Loves to crack a joke",
            image: "🦖",
            color: "red"
    },
    {
            firstName: "Beatriz",
            lastName: "Bravo",
            occupation: "Life coach",
            age: 56,
            description: "Loves to feed birds",
            image: "🐦",
            color: "Pink"
    },
    {
            firstName: "Juan",
            lastName: "Bravo",
            occupation: "Web Developer",
            age: 54,
            description: "Loves to play video games",
            image: "🐻‍❄️",
            color: "white"
    },
    {
            firstName: "Mauricio",
            lastName: "Bravo",
            occupation: "CEO",
            age: 61,
            description: "Loves traveling",
            image: "🌞",
            color: "black"
    }
    
];

// Rooms Array

const weaponsArray = [
        {
            name: "Sword",
            weight: 8,
        },
        {
            name: "Rock",
            weight: 1.5,
        },
        {
            name: "Gun",
            weight: 4,
        },    
        {
            name: "Rope",
            weight: 3,
        },
        {
            name: "Poison",
            weight: 0.5,
        },
        {
            name: "Dagger",
            weight: 2,
        },
        {
            name: "Pillow",
            weight: 2.5,
        },
        {
            name: "Arrow",
            weight: 1,
        },
        {
            name: "Car",
            weight: 250,
        },
        
    ];

// Weapons Array

const roomsArray = [
    {
        name: "Entrance",
    },
    {
        name: "Kitchen",
    },
    {
        name: "Living Room",
    },
    {
        name: "Cocktail Bar",
    },     
    {
        name: "Drawing Room",
    },
    {
        name: "Guest Bathroom",
    },     
    {
        name: "Garage",
    },
    {
        name: "Backyard",
    },     
    {
        name: "Children's Bedroom",
    },
    {
        name: "Main Bedroom",
    },     
    {
        name: "Guest Bedroom",
    },
    {
        name: "Family Bathroom",
    }, 
    {
        name: "Balcony",
    },     
    {
        name: "Atic",
    },
    {
        name: "Rooftop",
    }, 
    
];


// ITERATION 2

function selectRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const selectedElement = array[randomIndex];
    return selectedElement;
}


selectRandom(weaponsArray);

function pickMystery() {

    const randomRoom = selectRandom(roomsArray);
    const randomWeapon = selectRandom(weaponsArray);
    const randomSuspect = selectRandom(suspectsArray);

    const envelope = {
        room: randomRoom,
        weapon: randomWeapon,
        suspect: randomSuspect
    };

    console.log (envelope);

    return envelope;
}

pickMystery();


// ITERATION 3

function revealMystery(envelope) {
    const { firstName, lastName } = envelope.suspect;
    const { name: weapon } = envelope.weapon;
    const { name: room } = envelope.room;
  
    return `${firstName} ${lastName} killed Mr. Boddy using the ${weapon} in the ${room}!`;
  }
  
revealMystery(envelope);
console.log(revealMystery);

