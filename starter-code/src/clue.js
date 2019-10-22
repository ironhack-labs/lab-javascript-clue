
// Characters Collection
const charactersArray = [];


// Rooms Collection
const roomsArray = [];

// Weapons Collection
const weaponsArray = [];

//Characters

const mrGreen = {
    first_name: "Jacob ",
    last_name: "Green ",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
  };

  const drOrchid = {
  first_name:   "Doctor ",
  last_name:    "Orchid ",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation:    "Scientist"
  };


  const profPlum = {
  first_name:   "Victor ",
  last_name:    "Plum ",
  color:        "purple",
  description:  "Billionaire video game designer",
  age:          22,
  image:        "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
  occupation:   "Designer"
  };

  const missScarlet = {
  first_name:   "Kasandra ",
  last_name:    "Scarlet ",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation:   "Actor"
  };
  
  const mrsPeacock = {
  first_name:   "Eleanor ",
  last_name:    "Peacock ",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"
  };

  const mrMustard = {
  first_name:   "Jack ",
  last_name:    "Mustard ",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
  occupation:   "Retired Football player"
  };

  charactersArray.push( mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);

  //WEAPONS
  
  const rope = {
    name: "rope",
    weight: 10
  };

  const candlestick = {
    name: "candlestick",
    weight: 2
  };
  
  const dumbbell = {
    name: "dumbbell",
    weight: 30
  };
  
  const poison = {
    name: "poison",
    weight: 2
  };
  
  const axe = {
    name: "axe",
    weight: 15
  };
  
  const bat = {
    name: "bat",
    weight: 13
  };

  const trophy = {
    name: "trophy",
    weight: 25
  };

  const pistol = {
    name: "pistol",
    weight: 20
  };
  
  weaponsArray.push(rope, candlestick, dumbbell, poison, axe, bat, trophy, pistol);
 
//ROOMS

const diningRoom = {
name: "Dining Room"
}

const conservatoryRoom = {
name: "Conservatory"
}

const kitchenRoom = {
name: "Kitchen"
}

const studyRoom = {
name: "Study"
}

const libraryRoom = { 
name: "Library"
}

const billiardRoom = {
name: "Billiard Room"
}

const loungeRoom = {
name: "Lounge"
}

const ballRoom = {
name: "Ballroom"
}

const hallRoom = {
name: "Hall"
}

const spaRoom = {
name: "Spa"
}

const livingRoom = {
name: "Living Room"
}

const observatoryRoom = {
name: "Observatory"
}

const theaterRoom = {
name: "Theater"
}

const guestRoom = {
name: "Guest House"
}

const patioRoom =  {
name: "Patio"
}

roomsArray.push(diningRoom, conservatoryRoom, kitchenRoom, studyRoom, libraryRoom, billiardRoom, loungeRoom, ballRoom, hallRoom, spaRoom, livingRoom, observatoryRoom, theaterRoom, guestRoom, patioRoom)
    
/*console.log(charactersArray);
console.log(roomsArray);
console.log(weaponsArray);
*/

function randomSelector (arrayType) {
    var randomElement = arrayType[Math.floor(Math.random() * arrayType.length)];
        return randomElement;
}

var mysteryEnvelope = new Object()

function pickMystery () {
    
    mysteryEnvelope.chosenCharacter = randomSelector(charactersArray); 
    mysteryEnvelope.chosenRoom = randomSelector(roomsArray);
    mysteryEnvelope.chosenWeapon = randomSelector(weaponsArray);

    return mysteryEnvelope;
}

pickMystery();


function revealMystery(mystery) {
    return mystery.chosenCharacter.first_name + mystery.chosenCharacter.last_name + "killed Mr. Boddy using the " + mystery.chosenWeapon.name + " in the " + mysteryEnvelope.chosenRoom.name;
  }

  revealMystery(mysteryEnvelope);