function character(firstName, lastName, color, descript, age, image, occupation) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.color = color;
  this.descript = descript;
  this.age = age;
  this.image = image; 
  this.occupation = occupation;
}

var mrGreen = new character("Jacob", "Green", "green", "He has a lot of connections", 45, 
  "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "Entrepreneur");
var drOrchid = new character("Doctor", "Orchid", "white", "PhD in plant toxicology. Adopted daughter of Mr. Boddy", 26, "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  "Scientist")
var profPlum = new character("Victor", "Plum", "purple", "Billionare video game designer", 22,
  "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", "designer")
var mrsScarlet = new character("Kasandra", "Scarlet", "red", "She is an A-list movie star with a dark past", 31, "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", "actor");
var mrsPeacock = new character("Eleanor", "Peacock", "blue", "She is from a wealthy family and uses her status and money to earn popularity", 36, 
  "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "Socialité");
var mrMustard = new character("Jack", "Mustard", "yellow", "He is a former football player who tries to get by on his former glory", 62, 
  "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", "Retired Football player");

function weapons(name, weight){
  this.name = name;
  this.weight = weight;
}

var rope = new weapons("rope", 10); 
var knife = new weapons("knife", 8); 
var candlestick = new weapons("candlestick", 2); 
var dumbbell = new weapons("dumbbell", 30); 
var axe = new weapons("axe", 15); 
var bat = new weapons("bat", 13); 
var trophy = new weapons("trophy", 25); 
var pistol = new weapons("pistol", 20); 
var poison = new weapons("poison", 2);

var characters = [mrGreen, drOrchid, profPlum, mrsScarlet, mrsPeacock, mrMustard]
var weapon_list = [rope, knife, candlestick, dumbbell, axe, bat, trophy, pistol, poison]
var rooms = ["Dinning Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall",
"Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"]

var card_pack = [characters, weapon_list, rooms]


function random_selector(array) {
  return array[Math.floor(Math.random() * (array.length - 1))];
}

function pick_mistery() {
  return [random_selector(characters), random_selector(weapon_list), random_selector(rooms)];
}

function reveal_mistery(mistery) {
  console.log("The murderer was " + mistery[0].firstName + " " + mistery[0].lastName + " with the " + mistery[1].name + " in the " + mistery[2])
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
