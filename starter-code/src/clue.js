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

const mrGreen = new Character('Jacob', 'Green', 'green', 'He has a lot of connections', 45, 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', 'Entrepreneur');
const drOrchid = new Character('Doctor', 'Orchid', 'white', 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', 26, 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', 'Scientist');
const profPlum = new Character('Victor', 'Plum', 'purple', 'Billionare video game designer', 22, 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg', 'Designer');
const missScarlet = new Character('Kasandra', 'Scarlet', 'red', 'She is an A-list movie star with a dark past', 31, 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg', 'Actor');
const mrsPeacock = new Character('Eleanor', 'Peacock', 'blue', 'She is from a wealthy family and uses her status and money to earn popularity', 36, 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', 'Socialité');
const mrMustard = new Character('Jack', 'Mustard', 'yellow', 'He is a former football player who tries to get by on his former glory', 62, 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg', 'Retired Football player');

const w1 = new Weapon ('rope', 10);
const w2 = new Weapon ('knife', 8);
const w3 = new Weapon ('candlestick', 2);
const w4 = new Weapon ('dumbbell', 30);
const w5 = new Weapon ('poison', 2);
const w6 = new Weapon ('axe', 15);
const w7 = new Weapon ('bat', 13);
const w8 = new Weapon ('trophy', 25);
const w9 = new Weapon ('pistol', 20);

const r1 = {name: 'Dinning Room',};
const r2 = {name: 'Conservatory',};
const r3 = {name: 'Kitchen',};
const r4 = {name: 'Study',};
const r5 = {name: 'Library',};
const r6 = {name: 'Billiard Room',};
const r7 = {name: 'Lounge',};
const r8 = {name: 'Ballroom',};
const r9 = {name: 'Hall',};
const r10 = {name: 'Spa',};
const r11= {name: 'Living Room',};
const r12 = {name: 'Observatory',};
const r13 = {name: 'Theater',};
const r14 = {name: 'Guest House',};
const r15 =  {name: 'Patio',};


// Characters Collection
const charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms' Collection
const roomsArray = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15];

// Weapons Collection
const weaponsArray = [w1, w2, w3, w4, w5, w6, w7, w8, w9];

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
revealMistery(misteryEnvelope);