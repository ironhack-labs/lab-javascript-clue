// Characters

function Character (first_name,last_name, color, description, age, image, occupation){
  this.first_name = first_name;
  this.last_name = last_name;
  this.color = color;
  this.description = description;
  this.age = age;
  this.image = image;
  this.occupation = occupation;
}

var mrGreen = new Character('Jacob', 'Green', 'green', 'He has a lot of connections', 45, 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', 'Entrepreneur');
var drOrchid = new Character('Doctor', 'Orchid', 'white', 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', 26, 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', 'Scientist');
var profPlum = new Character('Victor' , 'Plum', 'purple', 'Billionare video game designer', 22, 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg', 'Designer');
var missScarlet = new Character('Kasandra', 'Scarlet', 'red', 'She is an A-list movie star with a dark past', 31, 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg', 'Actor');
var mrsPeacock = new Character('Eleanor', 'Peacock', 'blue', 'She is from a wealthy family and uses her status and money to earn popularity', 36, 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg' , 'Socialité');
var mrMustard = new Character('Jack', 'Mustard', 'yellow', 'He is a former football player who tries to get by on his former glory', 62, 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg', 'Retired Football player');


// Weapons

function Weapon (name,weight){
  this.name = name;
  this.weight = name;
}

var rope = new Weapon ('rope', 10);
var knife = new Weapon ('knife', 8);
var candlestick = new Weapon ('candelstick', 2);
var dumbbell = new Weapon ('dumbbell', 30);
var poison = new Weapon ('poison', 2);
var axe = new Weapon ('axe', 15);
var bat = new Weapon ('bat', 13);
var trophy = new Weapon ('trophy', 25);
var pistol = new Weapon ('pistol', 20);


// Rooms

function Room (name){
  this.name = name;
}

var dinningRoom = new Room('Dinning Room');
var conservatory = new Room('Conservatory');
var kitchen = new Room('Kitchen');
var library = new Room('Library');
var billiardRoom = new Room('Billiard');
var lounge = new Room('Lounge');
var ballroom = new Room('Ballroom');
var hall = new Room('Hall');
var spa = new Room('Spa');
var livingRoom = new Room('Living Room');
var observatory = new Room('Observatory');
var theater = new Room('Theater');
var guestHouse = new Room('Guest House');
var patio = new Room('Patio');

// Characters Collection
var charactersArray = [];
charactersArray.push(mrGreen,mrMustard,drOrchid, profPlum,missScarlet,mrsPeacock);

// Rooms' Collection
var roomsArray = [];
roomsArray.push(dinningRoom,conservatory,kitchen,library,billiardRoom,lounge,ballroom,hall,spa,livingRoom,observatory,theater,guestHouse,patio);


// Weapons Collection
var weaponsArray = [];
weaponsArray.push(rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol);

//method to get a Random selector
function randomSelector (array) {

  var selector;
  var minNum = 0;
  var maxNum = array.length;
  if (array.length > 0) {
    selector = Math.floor(Math.random()*(array.length - minNum))+ minNum;
    console.log(selector);
    return array[selector];
  }

}

//create a mystery method and stored it on a mistery envelope

function pickMistery () {

  var misteryEnvelope = [];
  var character = randomSelector(charactersArray);
  var weapon = randomSelector(weaponsArray);
  var room = randomSelector(roomsArray);
  misteryEnvelope.push(character, weapon, room);
  return misteryEnvelope;

}

//method reveal the mystery

function revealMistery (misteryEnvelope) {

  var killer = misteryEnvelope[0].first_name + ' ' + misteryEnvelope[0].last_name;
  var weapon = misteryEnvelope[1].name;
  var place = misteryEnvelope[2].name;

  return killer + ' killed Mr.Boddy using the ' + weapon + ' in the ' + place + '!!!!';
  
}

/*   *BONUS JS*
- create a function that filter an array by any field
- create a function that show the characters in alphabetic order*/

function filterByAnyField (array, value, field) {

  for(var i = 0; i < array.length; i++){
      if (array[i][field] === value){
        return array[i];
      }
  }

}
//I want to know the age of Eleanor
//console.log(filterByAnyField(charactersArray,'Eleanor','first_name').age);
//if you want the weight of a weapon
//console.log(filterByAnyField(weaponsArray, 'rope' ,'name').weight);


function sortArray (array) {
  var sortedArray = array.sort(function(a, b) {
  return a.first_name.localeCompare(b.first_name);
});
return sortedArray
}

//The localeCompare() method returns a number indicating whether a reference string
//comes before or after or is the same as the given string in sort order.