// Characters
class Characters {
  constructor(first_name, last_name, color, description, age, image, occupation) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.color = color;
    this.description = description;
    this.age = age;
    this.image = image;
    this.occupation = occupation;
  }
}

const mrGreen = new Characters('Jacob', 'Green', 'green', 'He has a lot of connections', 45, 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', 'Entrepreneur');

const drOrchid = new Characters('Doctor', 'Orchid', 'white', 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', 26, 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', 'Scientist');

const profPlum = new Characters('Victor', 'Plum', 'purple', 'Billionare video game designer', 22, 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg', 'Designer');

const missScarlet = new Characters('Kasandra', 'Scarlet', 'red', 'She is an A-list movie star with a dark past', 31, 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg', 'Actor');

const mrsPeacock = new Characters('Eleanor', 'Peacock', 'blue', 'She is from a wealthy family and uses her status and money to earn popularity', 36, 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', 'Socialité');

const mrMustard = new Characters('Jack', 'Mustard', 'yellow', 'He is a former football player who tries to get by on his former glory', 62, 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg', 'Retired Football player');

// Characters Collection
var charactersArray = [];
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);

// Weapons
class Weapons {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
}

const rope = new Weapons('rope', 10);
const knife = new Weapons('knife', 8);
const candlestick = new Weapons('candlestick', 2);
const dumbbell = new Weapons('dumbbell', 30);
const poison = new Weapons('poison', 2);
const axe = new Weapons('axe', 15);
const bat = new Weapons('bat', 13);
const trophy = new Weapons('trophy', 25);
const pistol = new Weapons('pistol', 20);

// Weapons Collection
var weaponsArray = [];
weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);

// Rooms
class Rooms {
  constructor(name) {
    this.name = name;
  }
}

const dinningRoom = new Rooms('Dinning Room');
const conservatory = new Rooms('Conservatory');
const kitchen = new Rooms('Kitchen');
const study = new Rooms('Study');
const library = new Rooms('Library');
const billiardRoom = new Rooms('Billiard Room');
const lounge = new Rooms('Lounge');
const ballroom = new Rooms('Ballroom');
const hall = new Rooms('Hall');
const spa = new Rooms('Spa');
const livingRoom = new Rooms('Living Room');
const observatory = new Rooms('Observatory');
const theater = new Rooms('Theater');
const guestHouse = new Rooms('Guest House');
const patio = new Rooms('Patio');

// Rooms' Collection
var roomsArray = [];
roomsArray.push(dinningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio);

randomSelector = (arr) => {
  const randomArr = arr[Math.floor(Math.random() * arr.length)];
  return randomArr;
}

pickMistery = () => {
  const misteryEnvelope = [];

  misteryEnvelope.push(randomSelector(charactersArray), randomSelector(weaponsArray), randomSelector(roomsArray));
  return misteryEnvelope;
}

revealMistery = (misteryEnvelope) => {
  return `${misteryEnvelope[0].first_name} ${misteryEnvelope[0].last_name} killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${misteryEnvelope[2].name}!!!!`;
};