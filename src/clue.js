
// ITERATION 1

// Suspects Collection
const suspectsArray =[{
    firstName:"Jacob",
    lastName:"Green",
    occupation:"Entrepreneur",
    age: 45, 
    description:"He has a lot of connections",
    image:"https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", 
    color:"green"
  },                   
  {
    firstName:"Doctor",
    lastName:"Orchid",
    occupation:"Scientist",
    age:26,
    description:"PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image:"http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color:"white"
  },
  {
    firstName:"Victor",
    lastName:"Plum",
    occupation:"Designer",
    age:22,
    description:"Billionaire video game designer",
    image:"https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color:"purple"
  },
  {
    firstName:"Kasandra",
    lastName:"Scarlet",
    occupation:"Actor",
    age:31,
    description:"She is an A-list movie star with a dark past",
       image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
       color: "red" 
  },
  {
    firstName:"Eleanor",
    lastName:"Peacock",
    occupation:"Socialité",
    age: 36,
    description:"She is from a wealthy family and uses her status and money to earn popularity",
    image:"https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color:"blue" }];

// Rooms Collection

const roomsArray = ['Dining Room','Conservatory','Kitchen','Study','Library','Billiard Room',
'Lounge','Ballroom','Hall','Spa','Living Room','Observatory','Theater','Guest House','Patio'];

// Weapons Collection
const weaponsArray = [
{name:'rope', weight:10},
{name:'knife', weight:8},
{name:'candlestick', weight:2},
{name:'dumbbell', weight:30},
{name:'poison', weight:2},
{name:'axe', weight:15},
{name:'bat', weight:13},
{name:'trophy', weight:25},
{name:'pistol', weight:20},
{name:'rope', weight:10}];

// ITERATION 2

const cardArray = [suspectsArray,roomsArray,weaponsArray];

function selectRandom (array) {
    var min = 0;
    var max = array.length;
    var i = Math.floor(Math.random() * (max - min + 1)) + min
    return array[i]; 
  }

function pickMystery () {
    weapon=selectRandom(weaponsArray)
    room=selectRandom(roomsArray)
    firstName=selectRandom(suspectsArray)
    lastName=selectRandom(suspectsArray)
    let obj = {
        weapon : weapon.name,
        room : room,
        firstName : firstName.firstName ,
        lastName : lastName.lastName ,
    }
    return obj
}
let envelope=pickMystery();
// ITERATION 3
function revealMystery (envelope) {
    return console.log(envelope.firstName + ' ' +envelope.lastName + ' killed Mr. Boddy using the ' + envelope.weapon + ' in the ' + envelope.room +'!')
}

revealMystery(envelope);