class Character {
  constructor (first_name, last_name, color, description, age, image, occupation) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.color = color;
    this.description = description;
    this.age = age;
    this.image = image;
    this.occupation = occupation;
  }
}

class Weapon {
  constructor (name, weight) {
    this.name = name;
    this.weight = weight;
  }
}

let mrGreen = new Character('Jacob', 'Green', 'green', 'He has a lot of connections', 45, 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', 'Entrepreneur');
let drOrchid = new Character('Doctor', 'Orchid', 'white', 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', 26, 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', 'Scientist');
let profPlum = new Character('Victor', 'Plum', 'purple', 'Billionare video game designer', 22, 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg', 'Designer');
let missScarlet = new Character('Kasandra', 'Scarlet', 'red', 'She is an A-list movie star with a dark past', 31, 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg', 'Actor');
let mrsPeacock = new Character('Eleanor', 'Peacock', 'blue', 'She is from a wealthy family and uses her status and money to earn popularity', 36, 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', 'Socialité');
let mrMustard = new Character('Jack', 'Mustard', 'yellow', 'He is a former football player who tries to get by on his former glory', 62, 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg', 'Retired Football player');

let w1 = new Weapon ('rope', 10);
let w2 = new Weapon ('knife', 8);
let w3 = new Weapon ('candlestick', 2);
let w4 = new Weapon ('dumbbell', 30);
let w5 = new Weapon ('poison', 2);
let w6 = new Weapon ('axe', 15);
let w7 = new Weapon ('bat', 13);
let w8 = new Weapon ('trophy', 25);
let w9 = new Weapon ('pistol', 20);

let r1 = {name: 'Dinning Room',};
let r2 = {name: 'Conservatory',};
let r3 = {name: 'Kitchen',};
let r4 = {name: 'Study',};
let r5 = {name: 'Library',};
let r6 = {name: 'Billiard Room',};
let r7 = {name: 'Lounge',};
let r8 = {name: 'Ballroom',};
let r9 = {name: 'Hall',};
let r10 = {name: 'Spa',};
let r11= {name: 'Living Room',};
let r12 = {name: 'Observatory',};
let r13 = {name: 'Theater',};
let r14 = {name: 'Guest House',};
let r15 =  {name: 'Patio',};


// Characters Collection
var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms' Collection
var roomsArray = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15];

// Weapons Collection
var weaponsArray = [w1, w2, w3, w4, w5, w6, w7, w8, w9];

const randomSelector = cardStack => {
  if (cardStack.length === 0) {
    return;
  }

  return cardStack[Math.floor(Math.random() * (cardStack.length))];

}

const pickMistery = () => {
  
  return [randomSelector(charactersArray), randomSelector(weaponsArray), randomSelector(roomsArray)];
}

const revealMistery = misteryEnvelope => {
  return `${misteryEnvelope[0].first_name} ${misteryEnvelope[0].last_name} killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${misteryEnvelope[2].name}!!!!`
}

let misteryEnvelope = pickMistery(charactersArray, weaponsArray, roomsArray);
console.log(revealMistery(misteryEnvelope));