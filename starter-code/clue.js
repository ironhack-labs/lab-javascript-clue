
var game = {

  characters: [
              {alias: "Mr Green",
              firstName:"Jacob",
              lastName:  "Green",
              color: "green",
              description: "He has a lot of connections",
              age: 45,
              image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
              occupation: "Entrepreneur"},

              {alias: "Dr Orchid",
              firstName: "Doctor",
              lastName: "Orchid",
              color: "white",
              description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
              age: 26,
              image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
              occupation: "Scientist"},

              {alias: "Prof Plum",
              firstName: "Victor",
              lastName: "Plum",
              color: "purple",
              description: "Billionare video game designer",
              age: 22,
              image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
              occupation: "Designer"},

              {alias: "Miss Scarlet",
              firstName: "Kasandra",
              lastName: "Scarlet",
              color: "red",
              description: "She is an A-list movie star with a dark past",
              age: 31,
              image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
              occupation: "Actor"},

              {alias: "Mrs Peacock",
              firstName: "Eleanor",
              lastName: "Peacock",
              color: "blue",
              description: "She is from a wealthy family and uses her status and money to earn popularity",
              age: 36,
              image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
              occupation: "Socialité"},

              {alias: "Mr Mustard",
              firstName: "Jack",
              lastName: "Mustard",
              color: "yellow",
              description: "He is a former football player who tries to get by on his former glory",
              age: 62,
              image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
              occupation: "Retired Football player"}
],

weapons: [

{   rope: {weight: 10},
    knife: {weight: 8},
    candlestick: {weight: 2},
    dumbbell:  {weight: 30},
    poison:  {weight: 2},
    axe : {weight: 15},
    bat:  {weight: 13},
    trophy:  {weight: 25},
    pistol:  {weight: 20}
  }
],

Rooms: [
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
      ]
}

// Generate a random number

var randomNumberBetween0and2 = Math.floor(Math.random() * 3);

//function randomWholeNumber ()


function random_selector(array) {

}

function pick_mistery() {

}

function reveal_mistery(mistery) {

}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);

console.log(game);
