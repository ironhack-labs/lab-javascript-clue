// ITERATION 1

// Suspects Array

const suspectsArray = [
  
  mrGreen= {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
  },

  drOrchid ={
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white"
  },
  profPlum = {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple"   
  },
  missScarlet= {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red"
  },
  mrsPeacock= {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue"
  },

  mrMustard= {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow"
  }
  

];

// Rooms Array

const roomsArray = [
  DiningRoom = {
      name: "Dining Room",
  },
  Conservatory = {
      name: "Conservatory",
  },   
  Kitchen = {
    name: "Kitchen",
  },
  Study = {
    name: "Study",
  },
  Library = {
    name: "Library",
  },
  BilliardRoom = {
    name: "Billiard Room",
  },
  Lounge = {
    name: "Lounge",
  },
  Ballroom = {
    name: "Ballroom",
  },
  Hall = {
    name: "Hall",
  },
  Spa= {
    name: "Spa",
  },
  LivingRoom = {
    name: "Living Room",
  },
  Observatory = {
    name: "Observatory",
  },
  Theater = {
    name: "Theater",
  },
  GuestHouse = {
    name: "Guest House"
  },
  Patio = {
    name: "Patio"
  }
  
];

// Weapons Array

const weaponsArray = [
  
  rope = {
    name: "rope",
    weight: 10
  },
  knife = {
    name: "knife",
    weight: 8
  },
  candlestick = {
    name: "candlestick",
    weight: 2,
  },
  dumbbell = {
    name: "dumbbell",
    weight: 30
  },
  poison= {
    name: "poison",
    weight: 2
  },
  axe= {
    name: "axe",
    weight: 15
  },
  bat = {
    name: "bat",
    weight: 13
  },
  trophy= {
    name: "trophy",
    weight: 25
  },
  pistol = {
    name: "pistol",
    weight: 20
  }
];


// ITERATION 2

function selectRandom(arr) {
   let choosen = Math.floor(Math.random() * arr.length-1)+1
   return arr[choosen]
}
console.log(selectRandom(suspectsArray))   


let mistery = {}
function pickMystery() {
  
  return {
    suspect : selectRandom(suspectsArray),
    weapon : selectRandom(weaponsArray),
    room : selectRandom(roomsArray)
  }
}



// ITERATION 3

function revealMystery(obj) {
  obj
  let firstnameReveal = obj.suspect.firstName
  let lastnameReveal =  obj.suspect.lastName
  let weaponReveal = obj.weapon.name
  let roomReveal = obj.room.name
  
  return `${firstnameReveal} ${lastnameReveal} killed Mr. Boddy using the ${weaponReveal} in the ${roomReveal}!`
}

revealMystery(pickMystery())
                          
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
