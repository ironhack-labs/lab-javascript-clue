const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45 ,
    description: 'He has a lot of connections',
    color: 'green',
  },
  {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26 ,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    color: 'white',
  },
  {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 22 ,
    description: 'Billionaire video game designer',
    color: 'purple',
  },
  {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31 ,
    description: 'She is an A-list movie star with a dark past',
    color: 'red',
  },
  {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36 ,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    color: 'blue',
  },
  {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62 ,
    description: 'He is a former football player who tries to get by on his former glory',
    color: 'yellow',
  }

]
const weaponsArray = [
  {
    wname: 'rope',
    weight: 10
  },
  {
    wname: 'knife',
    weigth: 8
  },
  {
    wname: 'candlestick',
    weight: 2
  },
  {
    wname: 'dumbbell',
    weigth: 30
  },
  {
    wname: 'poison',
    weight: 2
  },
  {
    wname: 'axe',
    weigth: 15
  },
  {
    wname: 'bat',
    weigth: 13
  },
  {
    wname: 'trophy',
    weigth: 25
  },
  {
    wname: 'pistol',
    weigth: 20
  },
]
const roomsArray = [
  {
    rname: 'Dining Room'
  },
  {
    rname: 'Conservatory'
  },
  {
    rname: 'Kitchen'
  },
  {
    rname: 'Study'
  },
  {
    rname: 'Library'
  },
  {
    rname: 'Billiard Room'
  },
  {
    rname: 'Lounge'
  },
  {
    rname: 'Ballroom'
  },
  {
    rname: 'Hall'
  },
  {
    rname: 'Spa'
  },
  {
    rname: 'Living Room'
  },
  {
    rname: 'Observatory'
  },
  {
    rname: 'Theater'
  },
  {
    rname: 'Guest House'
  },
  {
    rname: 'Patio'
  },
]

//console.log(roomsArray)
//console.log(weaponsArray)
//console.log(suspectsArray)

function selectRandom (array){
return array[(Math.floor(Math.random()*array.length))]
}


function pickMystery() {
  let mysteryArray = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    };
  return mysteryArray;
}

function revealMystery(envolope){
  console.log(`${envolope.suspect.firstName} ${envolope.suspect.lastName} killed Mr.Boddy using the ${envolope.weapon.wname} in the ${envolope.room.rname}!`)
}

revealMystery(pickMystery())