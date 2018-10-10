var MrGreen = {
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
  };
  var DrOrchid = {
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: "26",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"
  };
  var ProfPlum = {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: "22",
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
  };
  var MissScarlet = {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past,",
    age: "31",
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg,",
    occupation: "Actor"
  };
  var MrsPeacock = {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: "36",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
  };
  var MrMustard = {
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: "62",
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player",
  };
  
  
  
  
  var Rope = { name: "rope", weight: 10 };
  var Knife = { name: "knife", weight: 8 };
  var Candlestick = { name: "Candlestick", weight: 2 };
  var Dumbbell = { name: "Dumbbell", weight: 30 };
  var Poison = { name: "Poison", weight: 2 };
  var Axe = { name: "axe", weight: 15 };
  var Bat = { name: "bat", weight: 13 };
  var Trophy = { name: "trophy", weight: 25 };
  var Pistol = { name: "pistol", weight: 20 };
  


// Characters Collection
var charactersArray = [];

charactersArray.push(MrGreen);
charactersArray.push(DrOrchid);
charactersArray.push(ProfPlum);
charactersArray.push(MissScarlet);
charactersArray.push(MrsPeacock);
charactersArray.push(MrMustard);


// Weapons Collection
var weaponsArray = [];

weaponsArray.push(Rope);
weaponsArray.push(Knife);
weaponsArray.push(Candlestick);
weaponsArray.push(Dumbbell);
weaponsArray.push(Poison);
weaponsArray.push(Axe);
weaponsArray.push(Bat);
weaponsArray.push(Trophy);
weaponsArray.push(Pistol);

// Rooms' Collection
  var roomsArray =
    ["DinningRoom",
      "Conservatory",
      "Kitchen",
      "Study",
      "Library",
      "BilliardRoom",
      "Lounge",
      "Ballroom",
      "Hall",
      "Spa",
      "LivingRoom",
      "Observatory",
      "Theater",
      "GuestHouse",
      "Patio"];

//Exercise

function randomSelector(arr) {

    var randomCard = Math.floor((Math.random() * arr.length));

    return arr[randomCard];
}

function pickMistery () {

    var character = randomSelector(charactersArray);
    var weapon = randomSelector(weaponsArray);
    var room = randomSelector(roomsArray);
    return [character, weapon, room];
}

var misteryEnvelope = pickMistery();

console.log(misteryEnvelope);

function revealMistery (arr) {

    // console.log(arr[0].first_name + " " + arr[0].last_name + " killed Mr. Boddy using the " + arr[1].name + " in the " + arr[2]);

    return arr[0].first_name + " " + arr[0].last_name + " killed Mr.Boddy using the " + arr[1].name + " in the " + arr[2] + "!!!!";
}

console.log(revealMistery(misteryEnvelope));