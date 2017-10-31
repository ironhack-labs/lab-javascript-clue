var characters = 
  [
    {
      nickName: "Mr Green",
      firstName: "Jacob",
      lastName:  "Green",
      color: "green",
      description: "He has a lot of connections",
      age: "45",
      image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
      occupation: "Entrepreneur"
    },
    {
      nickName: "Dr Orchid",
      firstName: "Doctor",
      lastName: "Orchid",
      color: "white",
      description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
      age: "26",
      image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
      occupation: "Scientist"
    },
    {
      nickName: "Prof Plum",
      firstName: "Victor",
      lastName: "Plum",
      color: "purple",
      description: "Billionare video game designer",
      age: "22",
      image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
      occupation: "Designer"
    },
    {
      nickName: "Miss Scarlet",
      firstName: "Kasandra",
      lastName: "Scarlet",
      color: "red",
      description: "She is an A-list movie star with a dark past",
      age: "31",
      image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
      occupation: "Actor"
    },

    {
      nickName: "Mrs Peacock",
      firstName: "Eleanor",
      lastName: "Peacock",
      color: "blue",
      description: "She is from a wealthy family and uses her status and money to earn popularity",
      age: "36",
      image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
      occupation: "Socialité"
    },
    {
      nickName: "Mr Mustard",
      firstName: "Jack",
      lastName: "Mustard",
      color: "yellow",
      description: "He is a former football player who tries to get by on his former glory",
      age: "62",
      image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
      occupation: "Retired Football player",
    }
  ];
var weapons = 
  [
    { weapon: "Rope", Weight: "10" },
    { weapon: "Knife", Weight: "8" },
    { weapon: "Candlestick", Weight: "2" },
    { weapon: "Dumbbell", Weight: "30" },
    { weapon: "Poison", Weight: "2" },
    { weapon: "Axe", Weight: "15" },
    { weapon: "Bat", Weight: "13" },
    { weapon: "Trophy", Weight: "25" },
    { weapon: "Pistol", Weight: "20" }
  ];

var rooms = 
  [
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


function random_selector(array) {
  var index = Math.floor((Math.random()*array.length));
  return array[index];
}

function pick_mistery() {
  var mistery = [];
  mistery.push(random_selector(characters));
  mistery.push(random_selector(weapons));
  mistery.push(random_selector(rooms));
  return mistery;
}

function reveal_mistery(mistery) {
  console.log("El asesiono es " + mistery[0].nickName + ", ha usado el arma " + mistery[1].weapon + " y lo ha matado en " + mistery[2]);
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
