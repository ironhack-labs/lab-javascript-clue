// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 55, 
        description: 'Lorem Ipsum',
        image: 'image',
        color: 'red'
    },
    {
        firstName: 'Malte',
        lastName: 'Weber',
        occupation: 'Entrepreneur',
        age: 34, 
        description: 'Lorem Ipsum',
        image: 'image',
        color: 'blue'
        
    },
    {
        firstName: 'Leonie',
        lastName: 'Mayer',
        occupation: 'Entrepreneur',
        age: 29, 
        description: 'Lorem Ipsum',
        image: 'image',
        color: 'yellow'
        
    },
    {
        firstName: 'Sören',
        lastName: 'Weber',
        occupation: 'Entrepreneur',
        age: 33, 
        description: 'Lorem Ipsum',
        image: 'image',
        color: 'green'
        
    },
    {
        firstName: 'Philipp',
        lastName: 'Paruschke',
        occupation: 'Entrepreneur',
        age: 22, 
        description: 'Lorem Ipsum',
        image: 'image',
        color: 'brown'
        
    },
    {
        firstName: 'Cora',
        lastName: 'Reuter',
        occupation: 'Entrepreneur',
        age: 26, 
        description: 'Lorem Ipsum',
        image: 'image',
        color: 'white'
        
    }
];

// Rooms Array

const roomsArray = [
    {
        name:'Kitchen'
    },
    {
        name:'Musicroom'
    },
    {
        name:'Wintergarden'
    },
    {
        name:'Kitchen'
    },
    {
        name:'BilliardRoom'
    },
    {
        name:'Library'
    },
    {
        name:'Study'
    },
    {
        name:'Hall'
    },
    {
        name:'Lounge'
    },
    {
        name:'Dinning Room'
    },
    {
        name:'Guest House'
    },
    {
        name:'Entry Hall'
    },
    {
        name:'Observatorium'
    },
    {
        name:'Living Room'
    },
    {
        name:'Wellness Room'
    },
];

// Weapons Array

const weaponsArray = [
    {
        name: 'revolver',
        weight:34
    },
    {
        name: 'dagger',
        weight:44
    },
    {
        name: 'lead pipe',
        weight:66
    },
    {
        name: 'rope',
        weight:23
    },
    {
        name: 'candlestick',
        weight:88
    },
    {
        name: 'wrench',
        weight:48
    },
    {
        name: 'Axe',
        weight:77
    },
    {
        name: 'Ak-47',
        weight:87
    } ,
    {
        name: 'kar98',
        weight:10
    }
];


// ITERATION 2

function selectRandom(Arrays) {
    let randomCard
    
    if(Arrays.length === 0){
        return undefined
    }else if (Arrays.length === 1)  {
        return Arrays[0]
    }else {
        // Math.random generates a float number between 0 and 1, multyplied with Array.length it gives a number between 0 and the length of the Array, with Math.Floor it gets converted to an integer
        randomCard = Arrays[Math.floor(Math.random()*Arrays.length)]
    }
   
    return randomCard

}

function pickMystery() {
    let mystery = {
        suspect: '',
        weapon: '',
        room: '' 
    }
    mystery.suspect = selectRandom(suspectsArray)
    mystery.weapon = selectRandom(weaponsArray)
    mystery.room = selectRandom(roomsArray)

    return mystery
}


// ITERATION 3

function revealMystery(mystery) {
    let string ='' 
    string = `${mystery.suspect.firstName} ${mystery.suspect.lastName} killed Mr. Boddy using the ${mystery.weapon.name} in the ${mystery.room.name}!`
    return string
}

