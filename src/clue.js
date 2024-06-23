// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: '35',
        description: 'Jacob is a 35-year-old entrepreneur',
        image: 'https://example.com/jacob-green.jpg',
        color: 'green'
    },
    {
        firstName: 'Emily',
        lastName: 'Smith',
        occupation: 'Doctor',
        age: '40',
        description: 'Emily is a 40-year-old doctor',
        image: 'https://example.com/emily-smith.jpg',
        color: 'blue'
    },
    {
        firstName: 'Michael',
        lastName: 'Johnson',
        occupation: 'Engineer',
        age: '30',
        description: 'Michael is a 30-year-old engineer',
        image: 'https://example.com/michael-johnson.jpg',
        color: 'red'
    },
    {
        firstName: 'Sarah',
        lastName: 'Williams',
        occupation: 'Teacher',
        age: '45',
        description: 'Sarah is a 45-year-old teacher',
        image: 'https://example.com/sarah-williams.jpg',
        color: 'yellow'
    },
    {
        firstName: 'Daniel',
        lastName: 'Brown',
        occupation: 'Lawyer',
        age: '50',
        description: 'Daniel is a 50-year-old lawyer',
        image: 'https://example.com/daniel-brown.jpg',
        color: 'orange'
    },
    {
        firstName: 'David',
        lastName: 'Davis',
        occupation: 'Artist',
        age: '38',
        description: 'David is a 38-year-old artist',
        image: 'https://example.com/david-davis.jpg',
        color: 'purple'
    }

];

// Rooms Array

const roomsArray = [
    {
        name: 'Living Room',
        description: 'A cozy and comfortable living room',
    },
    {
        name: 'Kitchen',
        description: 'A warm and inviting kitchen',
    },
    {
        name: 'Bedroom',
        description: 'A spacious and stylish bedroom',

    },
    {
        name: 'Bathroom',
        description: 'A clean and modern bathroom',

    },
    {
        name: 'Garden',
        description: 'A peaceful and green garden',
    },
    {
        name: 'Office',
        description: 'A quiet and comfortable office',
    },
    {
        name: 'Basement',
        description: 'A dark and dusty basement',
    },
    {
        name: 'Hallway',
        description: 'A dimly lit and dusty hallway',
    },
    {
        name: 'Staircase',
        description: 'A narrow and dusty staircase',
    },
    {
        name: 'Garage',
        description: 'A dark and dusty garage',
    },
    {
        name: 'Patio',
        description: 'A clean and modern patio',
    },
    {
        name: 'Balcony',
        description: 'A clean and modern balcony',
    },
    {
        name: 'Attic',
        description: 'A dark and dusty attic',
    },
    {
        name: 'Storage Room',
        description: 'A dark and dusty storage room',
    },
    {
        name: 'Laundry Room',
        description: 'A clean and modern laundry room',
    }
];

// Weapons Array

const weaponsArray = [
    {
        name: 'Knife',
        description: 'A sharp and deadly knife',
    },
    {
        name: 'Baseball Bat',
        description: 'A sturdy and versatile baseball bat',
    },
    {
        name: 'Crowbar',
        description: 'A powerful and deadly crowbar',
    },
    {
        name: 'Sledgehammer',
        description: 'A heavy and powerful sledgehammer',
    },
    {
        name: 'Machete',
        description: 'A sharp and deadly machete',
    },
    {
        name: 'Pistol',
        description: 'A powerful and deadly pistol',
    },
    {
        name: 'Shotgun',
        description: 'A powerful and deadly shotgun',
    },
    {
        name: 'Rifle',
        description: 'A powerful and deadly rifle',
    },
    {
        name: 'Machine Gun',
        description: 'A powerful and deadly machine gun',
    }
];


// ITERATION 2

function selectRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function pickMystery() {
    const suspect = selectRandom(suspectsArray);
    const weapon = selectRandom(weaponsArray);
    const room = selectRandom(roomsArray);

    return { suspect, weapon, room };
}


// ITERATION 3

function revealMystery(envelope) {
    const { suspect, weapon, room } = envelope;
    return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
}

