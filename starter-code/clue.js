//Iteracion 1

var clue = [
  suspects = [
    mrGreen = {firstname: "Jacob", lastname: "Green", color: "green", description: "He has a lot of connections", age: 45, image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", occupation: "Entrepreneur"},

    drOrchid = {firstname: "Doctor", lastname: "Orchid", color: "white", description: "PhD in plant toxicology. Adopted daughter of Mr.Boddy", age: 26, image: "http://radiotimes.com/uploads/images/Original/111967.jpg", occupation: "Scientist"},

    profPlum = {firstname: "Victor", lastname: "Plum", color: "purple", description: "Billionare video game designer", age: 22, image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", occupation: "Designer" },

    missScarlet = { firstname: "Kasandra", lastname: "Scarlet", color: "red", description: "She is an A-list movie star with a dark past", age: 31, image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", occupation: "Actor"},

    mrPeacock = {firstname: "Eleanor", lastname: "Peacock", color: "blue", description: "She is from a wealthy family and uses her status and money to earn popularity", age: 36, image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", occupation: "Socialité"},

    mrMustard = {firstname: "Jack", lastname: "Mustard", color: "yellow", description: "He is a former football player who tries to get by on his former glory", age: 62, imagen: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", occupation: "Retired Football player"}
  ],

    weapons = [
     {name: "Rope", Weight: 10},
     {name: "Knife", Weight: 8},
     {name: "Candlestick", Weight: 2},
     {name: "Dumbbell", Weight: 30},
     {name: "Poison", Weight: 2},
     {name: "Axe", Weight: 15},
     {name: "Bat", Weight: 13},
     {name: "Trophy", Weight: 25},
     {name: "Pistol", Weight: 20},
    ],


    rooms = ["Dinning Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"]

  ]


//Iteracion2-punto1
var randKiller = clue.suspects[Math.floor(Math.random() * suspects.length)];
console.log("The killer is " + randKiller);

var randWeapon = clue.weapons[Math.floor(Math.random() * weapons.length)];
console.log("who kill with a " + randWeapon);

var randRoom = clue.rooms[Math.floor(Math.random() * rooms.length)];
console.log("in the " + randRoom);
