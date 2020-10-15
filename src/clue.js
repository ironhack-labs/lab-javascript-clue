// ITERATION 1

// Suspects Collection
var charactersArray = [
  {   
      first_name: "Jacob",
      last_name: "Green",
      color: "green",
      description: "He has a lot of connections",
      age: 45,
      image:
        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
      occupation: "Entrepreneur"
  },
    
  {
      first_name: "Doctor",
      last_name: "Orchid",
      color: "white",
      description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
      age: 26,
      image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
      occupation: "Scientist"
  },
    
  {
      first_name: "Victor",
      last_name: "Plum",
      color: "purple",
      description: "Billionaire video game designer",
      age: 22,
      image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
      occupation: "Designer"
  },
    
  {
      first_name: "Kasandra",
      last_name: "Scarlet",
      color: "red",
      description: "She is an A-list movie star with a dark past",
      age: 31,
      image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
      occupation: "Actor"
  },
    
  {
      first_name: "Eleanor",
      last_name: "Peacock",
      color: "blue",
      description:
        "She is from a wealthy family and uses her status and money to earn popularity",
      age: 36,
      image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
      occupation: "Socialité"
  },
    
  {
      first_name: "Jack",
      last_name: "Mustard",
      color: "yellow",
      description:
        "He is a former football player who tries to get by on his former glory",
      age: 62,
      image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
      occupation: "Retired Football player"
  }
  ];
  
  // Rooms Collection
  var roomsArray = [
    "Dining Room",
    "Conservatory",
    "Kitchen",
    "Study",
    "Library",
    "Billiard Room",
    "Lounge",
    "Ballroom",
    "Hall",
    "Spa",
    "Living Room",
    "Observatory",
    "Theater",
    "Guest House",
    "Patio"
  ];
  
  var weaponsArray = [
  
  { name: 'rope', 
    weight: 10
  },
    
  { name: 'knife',
    weight: 8
  },
    
  { name: 'candlestick',
    weight: 2
  },
    
  { name: 'dumbbell',
    weight: 30
  },
  { name: 'poison',
    weight: 2
  },
    
  { name: 'axe',
    weight: 15
  },
  
  { name: 'bat',
    weight: 13
  },
    
  { name: 'trophy',
    weight: 25
  },
    
  { name: 'pistol',
    weight: 20
  } 
  ];
  
  
  
  // ITERATION 2
  let suspectsArray = charactersArray;
  function selectRandom(array) {
      let index = Math.floor(Math.random() * array.length);
      return array[index];
    }
  
    function pickMystery() {
    let suspect = selectRandom(charactersArray);
    let room = selectRandom(roomsArray);
    let weapon = selectRandom(weaponsArray);
    
    return {suspect, room, weapon}
    }
    // console.log(pickMystery())
  
    // pickMystery()
  
  // ITERATION 3
  let mysteryEnvelope = pickMystery();
  let getFirstName = mysteryEnvelope.suspect.first_name;
  let getLastName = mysteryEnvelope.suspect.last_name;
  let getWeapon = mysteryEnvelope.weapon.name;
  let getRoom = mysteryEnvelope.room;
  
  // console.log(getFirstName)
  
  function revealMystery() {
      return `${getFirstName} ${getLastName} killed Mr. Boddy using the ${getWeapon} in the ${getRoom}!`
      }
  
  revealMystery()