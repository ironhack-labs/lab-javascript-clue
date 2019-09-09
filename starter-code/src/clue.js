// Characters

const mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
    }
    
    const drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpeg",
    occupation:    "Scientist"
    }
    
    const profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionaire video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
    }
    
    const missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor",
    }
    
    const mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "vhttps://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité",
    }
    
    const mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"
    }
    
    // Weapons
    
    const weapon01 = { name: "rope", weight: 10 };
    const weapon02 = { name: "knife", weight: 8 };
    const weapon03 = { name: "candlestick", weight: 2 };
    const weapon04 = { name: "dumbbell", weight: 30 };
    const weapon05 = { name: "poison", weight: 2 };
    const weapon06 = { name: "axe", weight: 15 };
    const weapon07 = { name: "bat", weight: 13 };
    const weapon08 = { name: "trophy", weight: 25 };
    const weapon09 = { name: "pistolv", weight: 20 };
    
    // Rooms
    const room01 = { name: "Dining Room" };
    const room02 = { name: "Conservatory" };
    const room03 = { name: "Kitchen" };
    const room04 = { name: "Study" };
    const room05 = { name: "Library" };
    const room06 = { name: "Billiard Room" };
    const room07 = { name: "Lounge" };
    const room08 = { name: "Ballroom" };
    const room09 = { name: "Hall" };
    const room010 = { name: "Spa" };
    const room011 = { name: "Living Room" };
    const room012 = { name: "Observatory" };
    const room013 = { name: "Theater" };
    const room014 = { name: "Guest House" };
    const room015 = { name: "Patio" };
    
    
    
    
    // Characters Collection
    const charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];
    
    // Rooms Collection
    const roomsArray = [room01, room02, room03, room04, room05, room06, room07, room08, room09, room010, room011, room012, room013, room014, room015];
    
    // Weapons Collection
    const weaponsArray = [weapon01, weapon02, weapon03, weapon04, weapon05, weapon06, weapon07, weapon08, weapon09];
    
    
    //Esta función hará que el array que vaya dentro de esta función (charactersArray, roomsArray o weaponsArray), te devuelva un elemnto de forma random
    
    function randomSelector(arr){
          return arr[Math.floor(Math.random() * arr.length)];
    };


    // Este función hace que devuelva para suspect, weapon y room, un valor distinto cada vez que se invoca.

  function pickMystery(){
        return{
            suspect: randomSelector(charactersArray),
            weapon: randomSelector(weaponsArray),
            room: randomSelector(roomsArray),
    }
  };

  pickMystery();

  // Esta función pinta un string con los elementos que pide, porcedente de los objetos del array.

  function  revealMystery(mE){
        return (`${mE.suspect.first_name} ${mE.suspect.last_name} killed Mr. Boddy using the ${mE.weapon.name} in the ${mE.room.name}!!!!`)
  };

  revealMystery(mE);