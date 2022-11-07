// ITERATION 1
//Suspects 

  const mrGreen = {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image:
      "https://images.squarespace-cdn.com/content/v1/603f997133c7d27c0f6804ce/1614805897695-4K2NFW4H5RZKBNOMISE5/o1DO9E5h.png",
    color: "green ",
  };
  
  const drOrchid = {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "https://images.squarespace-cdn.com/content/v1/603f997133c7d27c0f6804ce/1615574101169-VOIQEUPC30L08U094S9E/OM0H7HHe.png?format=300w",
    color: "white",
  };
  
  const profPlum = {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image:
      "https://images.squarespace-cdn.com/content/v1/603f997133c7d27c0f6804ce/1614796027130-KGJIY669BCPD2WYJMHOW/7-QjfHpD.png?format=300w",
    color: "purple",
  };
  
  
  const missScarlet = {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://images.squarespace-cdn.com/content/v1/603f997133c7d27c0f6804ce/1618581156233-9JH3WVMTR3LTZTPB5ZUJ/Ra_Ioiha.png?format=500w",
    color: "red",
  };
  
  const mrsPeacock = {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://images.squarespace-cdn.com/content/v1/603f997133c7d27c0f6804ce/1617101304726-311W2FAU1OZK2NLZB2KH/gFWIgV4g.png?format=500w",
    color: "blue",
  };
  
  const mrMustard = {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description:
      "He is a former football player who tries to get by on his former glory",
    image:
      "https://images.squarespace-cdn.com/content/v1/603f997133c7d27c0f6804ce/1614805001697-R0I2WY9IUA6EPEIONSRB/FrpCOOXo.png?format=750w",
    color: "yellow",
  };
  
  
  // ### Weapons
  
  const rope = {
    name: 'rope',
    weight: 10,
  };
  
  const knife = {
    name: 'knife',
    weight: 8,
  };
  
  const candlestick = {
    name: 'candlestick',
    weight: 2,
  };
  
  const dumbbell = {
    name: 'dumbbell',
    weight: 30,
  };
  
  const poison = {
    name: 'poison',
    weight: 2,
  };
  
  const axe = {
    name: 'axe',
    weight: 15,
  };
  
  const bat = {
    name: 'bat',
    weight: 13,
  };
  
  const trophy = {
    name: 'trophy',
    weight: 25,
  };
  
  const pistol = {
    name: 'pistol',
    weight: 20,
  };
  
  // ### Rooms
  
  const diningRoom = {
    name: "Dining Room",
  };
  const conservatory = {
    name: "Conservatory",
  };
  const kitchen = {
    name: "Kitchen",
  };
  const study = {
    name: "Study",
  };
  const library = {
    name: "Library",
  };
  const billiardRoom = {
    name: "Billiard Room",
  };
  const lounge = {
    name: "Lounge",
  };
  const ballroom = {
    name: "Ballroom",
  };
  const hall = {
    name: "Hall",
  };
  const spa = {
    name: "Spa",
  };
  const livingRoom = {
    name: "Living Room",
  };
  const observatory = {
    name: "Observatory",
  };
  const theater = {
    name: "Theater",
  };
  const guestHouse = {
    name: "Guest House",
  };
  const patio = {
    name: "Patio",
  };
// Suspects Array

const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms Array

const roomsArray = [diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];

// Weapons Array

const weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];


// ITERATION 2


function selectRandom(arr){ 
  return arr[Math.floor(Math.random() * arr.length)]
}


function pickMystery() {
    let mystery = {
      suspect : selectRandom(suspectsArray),
      weapon : selectRandom(weaponsArray),
      room : selectRandom(roomsArray),
    }
    return mystery
}

let assassin = pickMystery()

// ITERATION 3

function revealMystery(mystery){
  return `${mystery.suspect.firstName} ${mystery.suspect.lastName} killed Mr. Boddy using the ${mystery.weapon.name} in the ${mystery.room.name}!`
}


// BONUS FROM PREWORK WEBINAR

document.querySelector("button").onclick = guess;

function guess(){
  let guessedSuspect = document.querySelector('#suspect').value
  let guessedWeapon = document.querySelector('#weapon').value
  let guessedRoom = document.querySelector('#room').value
  if(guessedSuspect === "" || guessedWeapon === "" || guessedRoom === "" ){
    alert("You have to solve all riddles") 
  }
  else if(guessedSuspect === assassin.suspect.firstName && guessedWeapon === assassin.weapon.name && guessedRoom === assassin.room.name ){
    alert("You guessed right! You win!")
    document.body.innerHTML = `<h1>You win!</h1><h2><span>${assassin.suspect.firstName} ${assassin.suspect.lastName}</span> killed Mr. Boddy in the <span>${assassin.room.name}</span> with the <span>${assassin.weapon.name}</span></h2><img src=${assassin.suspect.image} class="mid"/>`
  }
  else {
    alert(`You're wrong :(`)
    document.body.innerHTML = `<h1><span>You're wrong</span></h1><h2><span>${assassin.suspect.firstName} ${assassin.suspect.lastName}</span> killed Mr. Boddy in the <span>${assassin.room.name}</span> with the <span>${assassin.weapon.name}</span></h2><img src=${assassin.suspect.image} class="mid"/>`
  }
}
