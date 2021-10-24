// ITERATION 1

// Suspects Array
class Suspect {
  constructor (firstName, lastName, occupation, age, description, image, color){
    this.firstName = firstName,
    this.lastName = lastName,
    this.occupation = occupation,
    this.age = age,
    this.description = description,
    this.image = image,
    this.color = color
  }
}
const mrGreen = new Suspect("Jacob", "Green", "Entrepreneur", 45, "He has a lot of connections", "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "green")
const drOrchid = new Suspect("Doctor", "Orchid", "Scientist", 26, "PhD in plant toxicology. Adopted daughter of Mr. Boddy", "http://www.radiotimes.com/uploads/images/Original/111967.jpg", "white")
const profPlum = new Suspect("Victor", "Plum", "Designer", 22, "Billionaire video game designer", "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg", "purple")
const missScarlet = new Suspect("Kasandra", "Scarlet", "Actor", 31, "She is an A-list movie star with a dark past", "https://www.radiotimes.com/uploads/images/Original/111967.jpg", "red")  
const mrsPeacock = new Suspect("Eleanor", "Peacock", "Socialité", 36, "She is from a wealthy family and uses her status and money to earn popularity", "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "blue")
const mrMustard = new Suspect("Jack", "Mustard", "Retired Football player", 62, " He is a former football player who tries to get by on his former glory", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg", "yellow")  

const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];


// Rooms Array
class Room {
  constructor (name){
    this.name = name
  }
}
const diningRoom = new Room("Dining Room")
const conservatory = new Room("Conservatory")
const kitchen = new Room("Kitchen")
const study = new Room("Study")  
const library = new Room("Library")
const billiardRoom = new Room("Billiard Room")  
const lounge = new Room("Lounge")  
const ballroom = new Room("Ballroom")  
const hall = new Room("Hall")  
const spa = new Room("Spa")  
const livingRoom = new Room("Living Room")  
const observatory = new Room("Observatory")  
const theater = new Room("Theater")  
const guestHouse = new Room("Guest House")  
const patio = new Room("Patio")  

const roomsArray = [diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];


// Weapons Array
class Weapon {
  constructor (name, weight){
    this.name = name,
    this.weight = weight
  }
}
const rope = new Weapon("rope", 10)
const knife = new Weapon("knife", 8)
const candlestick = new Weapon("candlestick", 2)
const dumbbell = new Weapon("dumbbell", 30)  
const poison = new Weapon("poison", 2)
const axe = new Weapon("axe", 15)  
const bat = new Weapon("bat", 13)  
const trophy = new Weapon("trophy", 25)
const pistol = new Weapon("pistol", 20)  

const weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];



// ITERATION 2

function selectRandom(array) {

  const randomElement = array[Math.floor(Math.random()*array.length)];

  return randomElement;

}

function pickMystery() {

  const envelope = {
    suspect : selectRandom(suspectsArray),
    room : selectRandom(roomsArray),
    weapon : selectRandom (weaponsArray)
  }

  return envelope;

}


// ITERATION 3

function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
