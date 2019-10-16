let mrGreen = {
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
  };
  let drOrchid = {
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"
  };
  let profPlum = {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionaire video game designer",
    age: 22,
    image:
      "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    occupation: "Designer"
  };
  let missScarlet = {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Actor"
  };
  let mrsPeacock = {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
  };
  let mrMustard = {
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description:
      "He is a former football player who tries to get by on his former glory",
    age: 62,
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    occupation: "Retired Football player"
  };
  // Weapons
  let ropeWeapon = {
    name: "rope",
    weight: 10
  };
  let knifeWeapon = {
    name: "knife",
    weight: 8
  };
  let candlestickWeapon = {
    name: "candlestick",
    weight: 2
  };
  let dumbbellWeapon = {
    name: "dumbbell",
    weight: 30
  };
  let poisonWeapon = {
    name: "poison",
    weight: 2
  };
  let axeWeapon = {
    name: "axe",
    weight: 15
  };
  let batWeapon = {
    name: "bat",
    weight: 13
  };
  let trophyWeapon = {
    name: "trophy",
    weight: 25
  };
  let pistolWeapon = {
    name: "pistol",
    weight: 20
  };
  // Rooms
  let dining = {
    name: "Dining Room"
  };
  let conservRoom = {
    name: "Conservatory"
  };
  let kitchenRoom = {
    name: "Kitchen"
  };
  let studyRoom = {
    name: "Study"
  };
  let libraryRoom = {
    name: "Library"
  };
  let billiard = {
    name: "Billiard Room"
  };
  let loungeRoom = {
    name: "Lounge"
  };
  let ball = {
    name: "Ballroom"
  };
  let hallRoom = {
    name: "Hall"
  };
  let spaRoom = {
    name: "Spa"
  };
  let living = {
    name: "Living Room"
  };
  let observatoryRoom = {
    name: "Observatory"
  };
  let theaterRoom = {
    name: "Theater"
  };
  let theGuestHouse = {
    name: "Guest House"
  };
  let thePatio = {
    name: "Patio"
  };
  // Characters Collection
  const charactersArray = [
    mrGreen,
    drOrchid,
    profPlum,
    missScarlet,
    mrsPeacock,
    mrMustard
  ];
  // Rooms Collection
  const roomsArray = [
    dining,
    conservRoom,
    kitchenRoom,
    studyRoom,
    libraryRoom,
    billiard,
    loungeRoom,
    ball,
    hallRoom,
    spaRoom,
    living,
    observatoryRoom,
    theaterRoom,
    theGuestHouse,
    thePatio
  ];
  // Weapons Collection
  const weaponsArray = [
    ropeWeapon,
    knifeWeapon,
    candlestickWeapon,
    dumbbellWeapon,
    poisonWeapon,
    axeWeapon,
    batWeapon,
    trophyWeapon,
    pistolWeapon
  ];
  function randomSelector(randomArray) {
    return randomArray[Math.floor(Math.random() * randomArray.length)];
  }
  function pickMystery() {
    let mysteryEnvelope = {};
    mysteryEnvelope.suspect = randomSelector(charactersArray);
    mysteryEnvelope.weapon = randomSelector(weaponsArray);
    mysteryEnvelope.room = randomSelector(roomsArray);
    return mysteryEnvelope;
  }
  function revealMystery(mysteryEnvelope) {
    let mystery =
      mysteryEnvelope.suspect.first_name +
      " " +
      mysteryEnvelope.suspect.last_name +
      " killed Mr. Boddy using the " +
      mysteryEnvelope.weapon.name +
      " in the " +
      mysteryEnvelope.room.name +
      "!!!!";
    return mystery;
  }

  
  
  
  