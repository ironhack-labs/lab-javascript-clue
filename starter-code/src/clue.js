// ITERATION 1

// Suspects Collection

const suspectsArray = [
    {
      firstName: 'Jacob',
      lastName: 'Green',
      occupation: 'Entrepreneur',
      age: '50',
      description: 'Old',
      image: '123',
      color: 'blue'
    },
    {
        firstName: 'Johnny',
        lastName: 'Bravo',
        occupation: 'Liftbro',
        age: '27',
        description: 'Likes cake',
        image: '123',
        color: 'green'
      },
      {
        firstName: 'Charles',
        lastName: 'Darwin',
        occupation: 'Scientist',
        age: '102',
        description: 'Evolution',
        image: '123',
        color: 'white'
      },
      {
        firstName: 'Bill',
        lastName: 'Clinton',
        occupation: 'President',
        age: '67',
        description: 'Ruler',
        image: '123',
        color: 'red'
      },
      {
        firstName: 'Michael',
        lastName: 'Jackson',
        occupation: 'Singer',
        age: '74',
        description: 'Dead',
        image: '123',
        color: 'black'
      },
      {
        firstName: 'Mark',
        lastName: 'Wahlberg',
        occupation: 'Actor',
        age: '47',
        description: 'Badass',
        image: '123',
        color: 'purple'
      }
    // ...
  ];


// Rooms Collection
const roomsArray = [
    {
      roomName: 'Room 1',
    },
    {
      roomName: 'Room 2',
    },
    {
      roomName: 'Room 3',
    }, 
    {
      roomName: 'Room 4',
    },
    {
      roomName: 'Room 5',
    },
    {
      roomName: 'Room 6',
    },  
    {
      roomName: 'Room 7',
    },
    {
      roomName: 'Room 8',
    },
    {
      roomName: 'Room 9',
    },  
    {
      roomName: 'Room 10',
    },
    {
      roomName: 'Room 11',
    },
    {
      roomName: 'Room 12',
    },  
    {
      roomName: 'Room 13',
    },
    {
      roomName: 'Room 14',
    },
    {
      roomName: 'Room 15',
    },                   
];

// Weapons Collection
const weaponsArray = [
      {
      weaponName: 'Pepper spray',
      weaponWeight: '2',
    },
      {
      weaponName: 'Chainsaw',
      weaponWeight: '50',
    },
      {
      weaponName: 'Rusty Spoon',
      weaponWeight: '1',
    },
      {
      weaponName: 'Banana',
      weaponWeight: '1',
    },
      {
      weaponName: 'Rocket launcher',
      weaponWeight: '70',
    }, 
      {
      weaponName: 'Trumps toupee',
      weaponWeight: '5',
    },
      {
      weaponName: 'Headphone cord',
      weaponWeight: '1',
    },
      {
      weaponName: 'Shark with lasers',
      weaponWeight: '140',
    },
      {
      weaponName: 'Needle',
      weaponWeight: '1',
    }     
];

// ITERATION 2

function selectRandom(clueArray) {
  let randNum = Math.floor(Math.random() * clueArray.length);
  let randElem = clueArray[randNum]
return randElem
}

function pickMystery () {
return [selectRandom(suspectsArray), selectRandom(weaponsArray), selectRandom(roomsArray)];
}

// ITERATION 3

function revealMystery (scoobyDoo){
    let mysteryName = pickMystery()
    let revealMessage = mysteryName[0].firstName + " " + mysteryName[0].lastName + " killed Mr.Boddy using the " + pickMystery()[1].weaponName + " in the " + pickMystery()[2].roomName
  return revealMessage
}

revealMystery()






