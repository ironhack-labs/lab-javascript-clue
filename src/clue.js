// ITERATION 1

// Suspects Array

const suspectsArray = []



const suspectPerez = {
    firstName: 'Sandra',
    lastName: 'Perez',
    occupation: 'Teacher',
    age: 28,
    description: 'She is a very mysterious person who moved to Germany to teach Spanish',
    image: 'Dark hair and brown eyes with a round-shaped nose',
    color: 'purple',
}

const suspectFlowers = {
    firstName: 'Dhuna',
    lastName: 'Flowers',
    occupation: 'Carpenter',
    age: 32,
    description: 'She is a very shy person who lives on the outskirts of the city with her mother',
    image: 'Blode with rosy cheeks and green eyes',
    color: 'green',
}


const suspectWhite = {
    firstName: 'Charles',
    lastName: 'White',
    occupation: 'Bus driver',
    age: 42,
    description: 'He is a very outgoing person who in his free time studies gourmet cooking, every Sunday he walks to visit her mother on top of the nearby mountain where she lives',
    image: 'He has black hair and a pointed nose, ha have one eye blue and the other brown',
    color: 'yellow',
}


const suspectLopez = {
    firstName: 'Richard',
    lastName: 'Lopez',
    occupation: 'Plumber',
    age: 56,
    description: 'He is a very reserved person and he only keeps a few friendships, he refuges in their house on the outskirts of the city',
    image: 'He is a very tall man who is bald, his gaze is mysterious and his eyes apper to be gray',
    color: 'black',
}


const suspectMarquez = {
    firstName: 'Rachel',
    lastName: 'Marquez',
    occupation: 'Sales Assistant',
    age: 31,
    description: 'She is a very funny and loved by everyone, she is a sigle mother and she loves flower',
    image: 'She is brunette and petite, with red hair and almond-shaped brown eyes',
    color: 'blue',
}


const suspectRodriguez = {
    firstName: 'Andrew',
    lastName: 'Rodriguez',
    occupation: 'Retired',
    age: 67,
    description: 'He has been retired for 20 years because he lost a leg while repairing a car.',
    image: ' He has white hair, many wrinkles and deep brown eyes',
    color: 'red',

}


suspectsArray.push(suspectPerez, suspectFlowers, suspectWhite, suspectLopez, suspectMarquez, suspectRodriguez)


// Rooms Array

const roomsArray = [];
const room1 = {
    name: 'Living Room'
}

const room2 = {
    name: 'Kitchen'
}

const room3 = {
    name: 'Bedroom'
}

const room4 = {
    name: 'Bathroom'
}

const room5 = {
    name: 'Dining room'
}

const room6 = {
    name: 'Home office'
}

const room7 = {
    name: 'Laundry room'
}

const room8 = {
    name: 'Garage'
}

const room9 = {
    name: 'Basement'
}

const room10 = {
    name: 'Attic'
}

const room11 = {
    name: 'Playroom'
}

const room12 = {
    name: 'Study'
}

const room13 = {
    name: 'Guest room'
}

const room14 = {
    name: 'Walk-in closet'
}

const room15 = {
    name: 'Nursery'
}

roomsArray.push(room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15)





// Weapons Array

const weaponsArray = [];

const weapon1 = {
    name: 'Sword',
    weight: 12,

}
const weapon2 = {
    name: 'Dagger',
    weight: 10,
}

const weapon3 = {
    name: 'Axe',
    weight: 11,

}

const weapon4 = {
    name: 'Bow',
    weight: 4,

}

const weapon5 = {
    name: 'Crossbow',
    weight: 28,

}

const weapon6 = {
    name: 'Rifle',
    weight: 32,

}

const weapon7 = {
    name: 'Knife',
    weight: 2,

}

const weapon8 = {
    name: 'Handgun',
    weight: 18,

}

const weapon9 = {
    name: 'Spear',
    weight: 9,

}

weaponsArray.push(weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8, weapon9)


// ITERATION 2

function selectRandom(randomArray) {
    const randomIndex = Math.floor(Math.random() * randomArray.length)
    return randomArray[randomIndex]

}




function pickMystery() {
    const randomSuspect = selectRandom(suspectsArray)
    const randomWeapon = selectRandom(weaponsArray)
    const randomRoom = selectRandom(roomsArray)

    return {
        suspect: randomSuspect,
        weapon: randomWeapon,
        room: randomRoom,
    }


}



// ITERATION 3

function revealMystery(solutionOfMystery) {
    return `${solutionOfMystery.suspect.firstName} ${solutionOfMystery.suspect.lastName} killed Mr. Boddy using the ${solutionOfMystery.weapon.name} in the ${solutionOfMystery.room.name}!`
}



