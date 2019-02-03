// Characters Collection
var charactersArray = [];

// Weapons Collection
var weaponsArray = [];

// Rooms' Collection
var roomsArray = [];

//Cards objects
var mrGreen = {
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
};

var drOrchid = {
    first_name: "Doctor",
    last_name: "Orchid",
    color:"white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation: "Scientist"
};

var profPlum = {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
};

var missScarlet = {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
};

var mrsPeacock = {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
};

var mrMustard = {
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"
};

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);

var rope = {
    weapon: "rope",
    weight: 10
};

var knife = {
    weapon: "knife",
    weight: 8
};

var candlestick = {
    weapon: "candlestick",
    weight: 2
};

var dumbbell = {
    weapon: "dumbbell",
    weight: 30
};

var poison = {
    weapon: "poison",
    weight: 2
};

var axe = {
    weapon: "axe",
    weight: 15
};

var bat = {
    weapon: "bat",
    weight: 13
};

var trophy = {
    weapon: "trophy",
    weight: 25
};

var pistol = {
    weapon: "pistol",
    weight: 20
};

weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);

var diningRoom = {
    name: "Dining Room"
};

var conservatory = {
    name: "Conservatory"
};

var kitchen = {
    name: "Kitchen"
};

var study = {
    name: "Study"
};

var library = {
    name: "Library"
};

var billiardRoom = {
    name: "Billiard Room"
};

var lounge = {
    name: "Lounge"
};

var ballroom = {
    name: "Ballroom"
};

var hall = {
    name: "Hall"
};

var spa = {
    name: "Spa"
};

var livingRoom = {
    name: "Living Room"
};

var observatory = {
    name: "Observatory"
};

var theater = {
    name: "Theater"
};

var guestHouse = {
    name: "Guest House"
};

var patio = {
    name: "Patio"
};

roomsArray.push(diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio);

var playClue = {
    mysteryEnvelope : [],
    randomSelector: function(myArray){
        let i = Math.floor(Math.random() * myArray.length);
        let chosenCard = myArray[i];
        this.mysteryEnvelope.push(chosenCard);
    },
    pickMystery: function(character, weapon, room){
      this.randomSelector(character);
      this.randomSelector(weapon);
      this.randomSelector(room);
    },
    revealMystery: function(envelope) {
      this.pickMystery(charactersArray, weaponsArray, roomsArray);
      let solution = envelope[0].first_name + " " + envelope[0].last_name + " killed Mr.Boddy using the " + envelope[1].weapon + " in the " + envelope[2].name + "!!!";
      console.log(solution);
    }
};

function playNewGame(){
playClue.revealMystery(playClue.mysteryEnvelope);
}

playNewGame();

//DOM MANIPULATION

function createMurdererImage() {
    var body = document.getElementsByTagName("body")[0];
    //add character
    var murdererImage = document.createElement("img");
    murdererImage.id = "murderer";
    murdererImage.setAttribute("src", playClue.mysteryEnvelope[0].image);
    body.appendChild(murdererImage);
    //add weapon
    var murderWeapon = document.createElement("h1");
    murderWeapon.innerHTML = playClue.mysteryEnvelope[1].weapon;
    body.appendChild(murderWeapon);
    //add room
    var crimeScene = document.createElement("h1");
    crimeScene.innerHTML = playClue.mysteryEnvelope[2].name;
    body.appendChild(crimeScene);
};

document.body.onload = startGame;

function startGame() {
    var body = document.getElementsByTagName("body")[0];
    var startButton = document.createElement("button");
    startButton.innerHTML = "Start the game!";
    startButton.id = "start button";
    body.appendChild(startButton);
    startButton.addEventListener("click", function() {
        createImagesFlexbox();
        createWeaponsFlexbox();
        createRoomsFlexbox();
    });
};

function createImagesFlexbox() {
    document.getElementById("start button").style.display = "none";
    var body = document.getElementsByTagName("body")[0];
    var listImages = document.createElement("div");
    listImages.style.width = "70vw";
    listImages.style.margin = "0 auto";
    body.appendChild(listImages);
    for (i = 0; i < charactersArray.length; i++) {
        var myImage = document.createElement("img");
        myImage.setAttribute("src", charactersArray[i].image);
        myImage.className = "murderer";
        myImage.style.width = "10%";
        myImage.style.height = "10%";
        myImage.style.margin = "5px";
        listImages.appendChild(myImage);
        myImage.addEventListener("click", function() {
            if(event.target.getAttribute("src") == playClue.mysteryEnvelope[0].image) {
                alert("Yayyy! You found the murderer!")
            } else {alert("That's not the murderer, try again!")}
        });
    };
    listImages.style.display = "flex";
    listImages.style.justifyContent = "center";
    listImages.style.alignItems = "center";
};

function createWeaponsFlexbox() {
    var body = document.getElementsByTagName("body")[0];
    var listWeapons = document.createElement("div");
    listWeapons.style.width = "70vw";
    listWeapons.style.margin = "0 auto";
    body.appendChild(listWeapons);
    for (i = 0; i < weaponsArray.length; i++) {
        var myWeapon = document.createElement("h1");
        myWeapon.className = "weapon";
        myWeapon.innerHTML = weaponsArray[i].weapon;
        myWeapon.style.margin = "10px";
        myWeapon.style.border = "1px solid black";
        listWeapons.appendChild(myWeapon);
        myWeapon.addEventListener("click", function() {
            if(event.target.innerHTML == playClue.mysteryEnvelope[1].weapon) {
                alert("Yayyy! You found the weapon!")
            } else {alert("That's not the weapon, try again!")}
        });
    };
    listWeapons.style.display = "flex";
    listWeapons.style.justifyContent = "center";
    listWeapons.style.alignItems = "center";
    listWeapons.style.flexWrap = "wrap";
    listWeapons.style.backgroundColor = "grey";
};

function createRoomsFlexbox() {
    var body = document.getElementsByTagName("body")[0];
    var listRooms = document.createElement("div");
    listRooms.style.width = "70vw";
    listRooms.style.margin = "0 auto";
    body.appendChild(listRooms);
    for (i = 0; i < roomsArray.length; i++) {
        var myRoom = document.createElement("h1");
        myRoom.className = "room";
        myRoom.innerHTML = roomsArray[i].name;
        myRoom.style.margin = "10px";
        myRoom.style.border = "1px solid black";
        listRooms.appendChild(myRoom);
        myRoom.addEventListener("click", function() {
            if(event.target.innerHTML == playClue.mysteryEnvelope[2].name) {
                alert("Yayyy! You found the weapon!")
            } else {alert("That's not the weapon, try again!")}
        });
    };
    listRooms.style.display = "flex";
    listRooms.style.justifyContent = "center";
    listRooms.style.alignItems = "center";
    listRooms.style.flexWrap = "wrap";
};
