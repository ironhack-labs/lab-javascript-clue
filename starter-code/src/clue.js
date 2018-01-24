// Characters
var suspects = [
  {
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:       " https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"
  },


  {
  first_name:   "Doctor",
  lst_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:   "Scientist"
  },

  {
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"
  },
  {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"
  },

  {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialite"
  },

  {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"
  }
  ];
  // Weapons
  var weapons = [
  {
    name: "rope",
    weight: 10
  },
  {
    name: "knife ",
    weight: 10
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
  },
  ];


  var rooms =  [
    {
      name: "Dinning Room"
    },
    {
      name: "Conservatory"
    }, {
      name: " Kitchen"
    }, {
      name: "Study"
    }, {
      name: " Library"
    }, {
      name: "Billiard Room"
    }, {
      name: " Lounge"
    }, {
      name: "Ballroom"
    },
    {
    name: "hall"
  },
  {
    name: "spa"
  },
   {
    name: " Living room"
  },
  {
    name: "Observatory"
  },
  {
   name: "Theater"
  },

  {
    name: "Guest House"
  },
  {
   name: "patio"
  }
  ];

  function randomSelector(array) {
    cardSelection= Math.floor(Math.random() * array.length);
    return array[cardSelection];
    }

    function pickMistery(array1,array2,array3){
      return [randomSelector(array1),randomSelector(array2),randomSelector(array3)];
    }


  function revealMystery(weap,suspec,ro){
   var result= pickMistery(weap,suspec,ro);
   console.log(result);
  return result[1].first_name + " " + result[1].last_name + " Killed Mr. Boddy using the " +result[0].name + "in the " + result[2].name;
  }

  revealMystery(weapons,suspects,rooms);
