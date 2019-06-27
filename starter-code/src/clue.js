function Character(first_name, last_name, color, description, age, image, occupation) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.color = color;
  this.description = description;
  this.age = age;
  this.image = image;
  this.occupation = occupation;
}

function Weapon(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Room(name) {
  this.name = name;
}

// Characters Collection
var charactersArray = [];

charactersArray.push(new Character("Jacob", "Green", "green", "He has a lot of connections", 45
, "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "Entrepreneur"));

charactersArray.push(new Character("Doctor", "Orchid", "white", "PhD in plant toxicology. Adopted daughter of Mr. Boddy", 26
, "http://www.radiotimes.com/uploads/images/Original/111967.jpg", "Scientist"));

charactersArray.push(new Character("Victor", "Plum", "purple", "Billionare video game designer", 22
, "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", "Designer"));

charactersArray.push(new Character("Kasandra", "Scarlet", "red", "She is an A-list movie star with a dark past", 31
, "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", "Actor"));

charactersArray.push(new Character("Eleanor", "Peacock", "blue", "She is from a wealthy family and uses her status and money to earn popularity", 36
, "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "Socialité"));

charactersArray.push(new Character("Jack", "Mustard", "yellow", "He is a former football player who tries to get by on his former glory", 62
, "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", "Retired Football player"));


// Weapons Collection
var weaponsArray = [];

weaponsArray.push(new Weapon("rope", 10));
weaponsArray.push(new Weapon("knife", 8));
weaponsArray.push(new Weapon("candlestick", 2));
weaponsArray.push(new Weapon("dumbbell", 30));
weaponsArray.push(new Weapon("poison", 2));
weaponsArray.push(new Weapon("axe", 15));
weaponsArray.push(new Weapon("bat", 13));
weaponsArray.push(new Weapon("trophy", 25));
weaponsArray.push(new Weapon("pistol", 20));

// Rooms' Collection
var roomsArray = [];

roomsArray.push(new Room("Dinning Room"));
roomsArray.push(new Room("Conservatory"));
roomsArray.push(new Room("Kitchen"));
roomsArray.push(new Room("Study"));
roomsArray.push(new Room("Library"));
roomsArray.push(new Room("Billiard Room"));
roomsArray.push(new Room("Lounge"));
roomsArray.push(new Room("Ballroom"));
roomsArray.push(new Room("Hall"));
roomsArray.push(new Room("Spa"));
roomsArray.push(new Room("Living Room"));
roomsArray.push(new Room("Observatory"));
roomsArray.push(new Room("Theater"));
roomsArray.push(new Room("Guest House"));
roomsArray.push(new Room("Patio"));

function randomSelector(array) {
  return array[ Math.floor(Math.random() * array.length) ];
}

function pickMistery() {
  return [randomSelector(charactersArray), randomSelector(weaponsArray), randomSelector(roomsArray)];
}

let misteryEnvelope = pickMistery();

function revealMistery(mistery) {
  return `${mistery[0].first_name} ${mistery[0].last_name} killed Mr.Boddy using the ${mistery[1].name} in the ${mistery[2].name}!!!!`
}