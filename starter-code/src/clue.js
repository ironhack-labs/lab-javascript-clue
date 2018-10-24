function randomNum(min, max) {
    return Math.floor( Math.random () * (max - min) + min);
  }
  
  var mrGreen = {
      first_name:   "Jacob",
      last_name:    "Green",
      color:        "green",
      description:  "He has a lot of connections",
      age:          45,
      image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
      occupation:   "Entrepreneur",
  }
  
  var drOrchid = {   
      first_name:   "Doctor",
      last_name:    "Orchid",
      color:        "white",
      description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
      age:          26,
      image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
      ocupation:   "Scientist",
  }
  
  var profPlum = {
      first_name:   "Victor",
      last_name:    "Plum",
      color:        "purple",
      description:  "Billionare video game designer",
      age:          22,
      image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
      occupation:   "Designer",
  }
  
  var missScarlet = {
      first_name:   "Kasandra",
      last_name:    "Scarlet",
      color:        "red",
      description:  "She is an A-list movie star with a dark past",
      age:          31,
      image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
      occupation:   "Actor",
  }
  var mrsPeacock = {
      first_name:   "Eleanor",
      last_name:    "Peacock",
      color:        "blue",
      description:  "She is from a wealthy family and uses her status and money to earn popularity",
      age:          36,
      image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
      occupation:   "Socialité",
  }
  
  var mrMustard = {
      first_name:   "Jack",
      last_name:    "Mustard",
      color:        "yellow",
      description:  "He is a former football player who tries to get by on his former glory",
      age:          62,
      image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
      occupation:   "Retired Football player",
  }
  
  // Weapons
  
  var rope = {
      name: "rope",
      weight: 10,
  }
  var knife = {
      name: "knife",
      weight: 8,
  }
  var candlestick = {
      name: "candlestick",
      weight: 2,
  }
  var dumbbell = {
      name: "dumbbell",
      weight: 30,
  }
  var poison = {
      name: "poison",
      weight: 2,
  }
  var axe = {
      name: "axe",
      weight: 15,
  }
  var bat = {
      name: "bat",
      weight: 13,
  }
  var trophy = {
      name: "trophy",
      weight: 25,
  }
  var pistol = {
      name: "pistol",
      weight: 20,
  }
  
  // Rooms
  var room1  = {name: "Dinning Room"}
  var room2  = {name: "Conservatory"}
  var room3  = {name: "Kitchen"}
  var room4  = {name: "Study"}
  var room5  = {name: "Library"}
  var room6  = {name: "Billiard Room"}
  var room7  = {name: "Lounge"}
  var room8  = {name: "Ballroom"}
  var room9  = {name: "Hall"}
  var room10 = { name: "Spa"}
  var room11 = { name: "Living Room"}
  var room12 = { name: "Observatory"}
  var room13 = { name: "Theater"}
  var room14 = { name: "Guest House"}
  var room15 = { name: "Patio"}
  
  // Characters Collection
  var charactersArray = [];
  
  // Rooms' Collection
  var roomsArray = [];
  
  // Weapons Collection
  var weaponsArray = [];
  
  charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);
  
  weaponsArray.push(rope, knife,candlestick, dumbbell, poison, axe, bat, trophy, pistol);
  
  roomsArray.push(room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14)
  
  function randomSelector(arr) {
      if (arr.length === 0) {
          return undefined;
      } else {
          return arr[randomNum(0, arr.length)];
      }
  }

  function pickMistery() {
    return [randomSelector(charactersArray), randomSelector(weaponsArray),randomSelector(roomsArray)];
  }

  var misteryEnvelope = pickMistery();

  function revealMistery(arr) {
      return  `${arr[0].first_name} ${arr[0].last_name} killed Mr.Boddy using the ${arr[1].name} in the ${arr[2].name}!!!!`  
    }

