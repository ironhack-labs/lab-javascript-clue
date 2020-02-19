

const suspectsArray = [
    {
      firstName: "Jacob",
      lastName: "Green",
      color: "green",
      description: "He has a lot of connections",
      age: 45,
      image:
        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
      occupation: "Entrepreneur"
    },
  
    {
      firstName: "Doctor",
      lastName: "Orchid",
      color: "white",
      description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
      age: 26,
      image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
      occupation: "Scientist"
    },
  
    {
      firstName: "Victor",
      lastName: "Plum",
      color: "purple",
      description: "Billionare video game designer",
      age: 22,
      image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
      occupation: "Designer"
    },
  
    {
      firstName: "Kasandra",
      lastName: "Scarlet",
      color: "red",
      description: "She is an A-list movie star with a dark past",
      age: 31,
      image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
      occupation: "Actor"
    },
  
    {
      firstName: "Eleanor",
      lastName: "Peacock",
      color: "blue",
      description:
        "She is from a wealthy family and uses her status and money to earn popularity",
      age: 36,
      image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
      occupation: "Socialité"
    },
  
    {
      firstName: "Jack",
      lastName: "Mustard",
      color: "yellow",
      description:
        "He is a former football player who tries to get by on his former glory",
      age: 62,
      image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
      occupation: "Retired Football player"
    }
  ];
  
  // Rooms Collection
  const roomsArray = [
    "Dinning Room",
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
  
  // Weapons Collection
  const weaponsArray = [
    {
      name: "rope",
      weight: 10
    },
  
    {
      name: "knife",
      weight: 8
    },
  
    {
      name: "candlestick",
      weight: 2
    },
  
    {
      name: "dumbbell",
      weight: 30
    },
  
    {
      name: "poison",
      weight: 2
    },
  
    {
      name: "axe",
      weight: 15
    },
  
    {
      name: "bat",
      weight: 13
    },
  
    {
      name: "trophy",
      weight: 25
    },
  
    {
      name: "pistol",
      weight: 20
    }
  ];
  
// ITERATION 1
  
  let sus=[];
  function selectRandom(array) {
    if (array.length === 0){return undefined;};
      let calc= Math.random()*array.length;
      let resultado = Math.floor(calc);
      return array[resultado];
  }
  
  selectRandom(sus)
  
 // ITERATION 2 

  function pickMystery(){
      let envelope;
    envelope = {
      suspect: selectRandom(suspectsArray),
      weapon: selectRandom(weaponsArray),
      room: selectRandom(roomsArray)
    };
    return envelope;
  }
// ITERATION 3
function revealMystery(envelope){
  return envelope.suspect.firstName +" "+ envelope.suspect.lastName+" killed Mr. Boddy using the "+envelope.weapon.name+" in the "+envelope.room.name+"!"
}

revealMystery(pickMystery());