var game= {
  suspects: [
    { name: "Jacob Green",
      color: "green",
      description: "He has a lot of connections and is always willing to help people out -- for a price."
    },
    { name: "Doctor Orchid",
        color: "white",
        description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning."
    },
    { name: "Victor Plum",
      color: "purple",
      description: "He is a billionaire video game designer who is embracing his new popularity."
    },
    { name: "Kasandra Scarlet",
      color: "red",
      description: "She is an A-list movie star whose past haunts her."
    },
    { name: "Eleanor Peacock",
      color: "blue",
      description: "She is from a wealthy family and uses her status and money to earn popularity."
    },
    { name: "Jack Mustard",
      color: "yellow",
      description: "He is a former football player who tries to get by on his former glory."
    }

  ],


  rooms: [
    { name: "Dining Room",
    },

    { name: "Conservatory"
    },

    { name: "Kitchen",
    },

    { name: "Study"
    },

    { name: "Library"
    },

    { name: "Billiard Room"
    },

    { name: "Lounge"
    },
    { name: "Ballroom"
    },
    { name: "Hall"
    },
    { name: "A spa"
    },
    { name: "Living room"
    },
    { name: "Observatory"
    },
    { name: "Theater"
    },
    { name: "Guest house"
    },
    { name: "A patio"
    }
  ],

  weapons: [
    { name: "Rope",
    },

    { name: "Knife"
    },

    { name: "Candlestick",
    },

    { name: "Dumbbell"
    },

    { name: "Poison"
    },

    { name: "Axe"
    },

    { name: "Bat"
    },
    { name: "Trophy"
    },
    { name: "Pistol"
    },
  ],
}


function randomSuspectCard(game) {

  var randomNumber = Math.floor((Math.random()*game.suspects.length) + 0);

  console.log(randomNumber);
  console.log("The supect is " + game.suspect[randomNumber]);

}


var game= {
  suspects: [
    { name: "Jacob Green",
      color: "green",
      description: "He has a lot of connections and is always willing to help people out -- for a price."
    },
    { name: "Doctor Orchid",
        color: "white",
        description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning."
    },
    { name: "Victor Plum",
      color: "purple",
      description: "He is a billionaire video game designer who is embracing his new popularity."
    },
    { name: "Kasandra Scarlet",
      color: "red",
      description: "She is an A-list movie star whose past haunts her."
    },
    { name: "Eleanor Peacock",
      color: "blue",
      description: "She is from a wealthy family and uses her status and money to earn popularity."
    },
    { name: "Jack Mustard",
      color: "yellow",
      description: "He is a former football player who tries to get by on his former glory."
    }

  ],


  rooms: [
    { name: "Dining Room",
    },

    { name: "Conservatory"
    },

    { name: "Kitchen",
    },

    { name: "Study"
    },

    { name: "Library"
    },

    { name: "Billiard Room"
    },

    { name: "Lounge"
    },
    { name: "Ballroom"
    },
    { name: "Hall"
    },
    { name: "A spa"
    },
    { name: "Living room"
    },
    { name: "Observatory"
    },
    { name: "Theater"
    },
    { name: "Guest house"
    },
    { name: "A patio"
    }
  ],

  weapons: [
    { name: "Rope",
    },

    { name: "Knife"
    },

    { name: "Candlestick",
    },

    { name: "Dumbbell"
    },

    { name: "Poison"
    },

    { name: "Axe"
    },

    { name: "Bat"
    },
    { name: "Trophy"
    },
    { name: "Pistol"
    },
  ],
}



function randomSuspectCard() {

  var randomNumber = Math.floor((Math.random() * game.suspects.length) + 0);

  return  game.suspects[randomNumber].name;

}



function randomRoomCard() {

  var randomNumber = Math.floor((Math.random() * game.rooms.length) + 0);

  return game.rooms[randomNumber].name;

}


function randomWeaponCard() {

  var randomNumber = Math.floor((Math.random() * game.weapons.length) + 0);

 return  game.weapons[randomNumber].name;

}


var suspect = randomSuspectCard();
var room = randomRoomCard();
var weapon = randomWeaponCard();

console.log(suspect + " killed the victim in the " + room + " with a " + weapon);
