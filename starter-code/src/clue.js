// Characters
const mrGreen = {
    first_name:   'Jacob',
    last_name:    'Green',
    color:        'green',
    description:  'He has a lot of connections',
    age:          45,
    image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation:   'Entrepreneur'
}


const drOrchid = {
    first_name:   'Doctor',
    last_name:    'Orchid',
    color:        'white',
    description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age:          26,
    image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    ocupation:   'Scientist'
    
}
const profPlum = {
    first_name:   'Victor',
    last_name:    'Plum',
    color:        'purple',
    description:  'Billionare video game designer',
    age:          22,
    image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    occupation:   'Designer'
}


const missScarlet = {
    first_name:   'Kasandra',
    last_name:    'Scarlet',
    color:        'red',
    description:  'She is an A-list movie star with a dark past',
    age:          31,
    image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation:   'Actor'
}


const mrsPeacock = {
    first_name:   'Eleanor',
    last_name:    'Peacock',
    color:        'blue',
    description:  'She is from a wealthy family and uses her status and money to earn popularity',
    age:          36,
    image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation:   'Socialité'    
}

const mrMustard = {
    first_name:   'Jack',
    last_name:    'Mustard',
    color:        'yellow',
    description:  'He is a former football player who tries to get by on his former glory',
    age:          62,
    image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation:   'Retired Football player'
    
}

// Weapons
const rope = {
    name: 'rope',
    weight: 10
}

const knife = {
    name: 'knife',
    weight: 8
}

const candlestick = {
    name: 'candlestick',
    weight: 2
}

const dumbell = {
    name: 'dumbell',
    weight: 30
}

const poison = {
    name: 'poison',
    weight: 2
}

const axe = {
    name: 'axe',
    weight: 15
}

const bat = {
    name: 'bat',
    weight: 13
}

const trophy = {
    name: 'trophy',
    weight: 25
}

const pistol = {
    name: 'pistol',
    weight: 20
}


// Rooms

const dinningRoom = {
    name: 'Dinning Room'
}

const conservatory = {
    name: 'Conservatory'
}

const kitchen = {
    name: 'Kitchen'
}

const study = {
    name: 'Study'
}

const library = {
    name: 'Library'
}

const billiardRoom = {
    name: 'Billiard Room'
}

const lounge = {
    name: 'Lounge'
}

const ballroom = {
    name: 'Ballroom'
}

const hall ={
    name: 'Hall'
}

const spa = {
    name: 'Spa'
}

const livingRoom = {
    name: 'Living Room'
}

const observatory = {
    name: 'Observatory'
}

const theater = {
    name: 'Theater'
}

const guestHouse = {
    name: 'Guest House'
}

const patio = {
    name: 'Patio'
}


// Characters Collection


var charactersArray = [];
charactersArray.push(mrGreen);
charactersArray.push(drOrchid);
charactersArray.push(profPlum);
charactersArray.push(missScarlet);
charactersArray.push(mrMustard)

//console.log(charactersArray)


// Rooms' Collection
var weaponsArray = [];
weaponsArray.push(rope);
weaponsArray.push(knife);
weaponsArray.push(candlestick);
weaponsArray.push(dumbell);
weaponsArray.push(poison);
weaponsArray.push(axe);
weaponsArray.push(bat);
weaponsArray.push(trophy);
weaponsArray.push(pistol);


// Weapons Collection
var roomsArray = [];
roomsArray.push(dinningRoom);
roomsArray.push(conservatory);
roomsArray.push(kitchen);
roomsArray.push(study);
roomsArray.push(library);
roomsArray.push(billiardRoom);
roomsArray.push(lounge);
roomsArray.push(ballroom);
roomsArray.push(hall);
roomsArray.push(spa);
roomsArray.push(livingRoom);
roomsArray.push(observatory);
roomsArray.push(theater);
roomsArray.push(guestHouse);
roomsArray.push(patio);

function randomSelector(arr) {
  let rand = Math.floor(Math.random()*arr.length)
  let selection = arr[rand]
  return selection
}

function pickMystery() {
    let var1 = randomSelector(charactersArray)
    let var2 = randomSelector(weaponsArray)
    let var3 = randomSelector(roomsArray)
    return [var1, var2, var3]
  }
  
let mysteryEnvelope = pickMystery()

  
  
function revealMistery(arr) {
        return arr[0].first_name + ' ' + arr[0].last_name + ' killed Mr.Boddy using the ' + arr[1].name + ' in the ' + arr[2].name +'!!!!'
      }    
  
revealMistery(mysteryEnvelope)