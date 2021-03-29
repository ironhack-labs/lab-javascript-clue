// ITERATION 1

// Suspects Collection
class Suspect{
    constructor(firstName, lastName, occupation, age, description, image, color){
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;
        this.age = age;
        this.description = description;
        this.image = image;
        this.color = color;
    }     
}

const mrGreen = new Suspect ('Jacob', 'Green','Entrepreneur', 45, 'He has a lot of connections', ' https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', 'green');
const drOrchid = new Suspect ('Doctor', 'Orchid','Scientist', 26, 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', 'white');
const profPlum = new Suspect ('Victor', 'Plum','Designer', 22, 'Billionaire video game designer', 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg', 'purple');
const missScarlet = new Suspect ('Kasandra', 'Scarlet','Actor', 31, 'She is an A-list movie star with a dark past', 'https://www.radiotimes.com/uploads/images/Original/111967.jpg', 'red');
const mrsPeacock = new Suspect ('Eleanor', 'Peacock','Socialité', 36, 'She is from a wealthy family and uses her status and money to earn popularity', 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', 'blue');
const mrMustard = new Suspect ('Jack', 'Mustard','Retired Football player', 62, 'He is a former football player who tries to get by on his former glory', 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg', 'yellow');


const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];


// Rooms Collection

class Room{
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
}

const rope = new Room  ('rope', 10);
const knife = new Room ('knife',8)
const candlestick = new Room ('candlestick',2)
const dumbbell = new Room ('dumbbell',30)
const poison = new Room ('poison',2)
const axe = new Room ('axe',15)
const bat = new Room ('bat',13)
const trophy = new Room ('trophy',25)
const pistol = new Room ('pistol',20)


const weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

// Weapons Collection
class Weapon{
    constructor(name){
        this.name = name;
    }
}

const diningroom = new Weapon ('Dining Room');
const conservatory = new Weapon ('Conservatory');
const kitchen = new Weapon ('Kitchen');
const study = new Weapon ('Study');
const library = new Weapon ('Library');
const billiardRoom = new Weapon ('Billiard Room');
const lounge = new Weapon ('Lounge');
const ballroom = new Weapon ('Ballroom');
const hall = new Weapon ('Hall');
const spa = new Weapon ('Spa');
const livingRoom = new Weapon ('Living Room');
const observatory = new Weapon ('Observatory');
const theater = new Weapon ('Theater');
const guestHouse = new Weapon ('Guest House');
const patio = new Weapon ('Patio');

const roomsArray = [diningroom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];

// ITERATION 2

const selectRandom = (arr)=>{
    let randomNumb =  Math.floor((Math.random()*arr.length))
    return arr[randomNumb];
}

const pickMystery = () =>{
    class Mystery{
      constructor(suspect, weapon, room){
        this.suspect = suspect;
        this.weapon = weapon;
        this.room = room;
      }
    }
    //const mystery = new Mystery(selectRandom(suspectsArray)...etc)
    let suspect = selectRandom(suspectsArray);
    let weapon = selectRandom(weaponsArray);
    let room = selectRandom(roomsArray);
    const myMystery = new Mystery (suspect,weapon,room);
    return myMystery
} 
  

// ITERATION 3

function revealMystery(obj){
    let suspect = obj.suspect;
    let weapon = obj.weapon;
    let room = obj.room;
    
    return (`${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`)
  } 

