
var characters = [
  { first_name: 'Jacob', last_name: 'Green', color: 'green', description: 'He has a lot of connections', age: 45, image: url("https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg"), occupation: 'Entrepreneur' },
  { first_name: 'Doctor', last_name: 'Orchid', color: 'white', description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy.', age: '26', image: url('http://www.radiotimes.com/uploads/images/Original/111967.jpg'), ocupation: 'Scientist' },
  { first_name: 'Victor', last_name: 'Plum', color: 'purple', description: 'Billionare video game designer', age: 22, image: url('https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg'), occupation: 'Designer' },
  { first_name: 'Kasandra', last_name: 'Scarlet', color: 'red', description: 'She is an A-list movie star with a dark past', age: 31, image: url('https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg'), occupation: 'Actor'},
  { first_name: 'Eleanor', last_name: 'Peacock', color: 'blue', description: 'She is from a wealthy family and uses her status and money to earn popularity', age: 36, image: url('https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg'), occupation: 'Socialité' },
  { first_name: 'Jack', last_name: 'Mustard', color: 'yellow', description: 'He is a former football player who tries to get by on his former glory', age: 62, image: url('https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg'), occupation: 'Retired Football player' },
];

thePusher(characters, charactersArray)



// Rooms Collection
var roomsArray = []

var rooms = [
    {name: 'Dinning Room'},
    {name: 'Conservatory'},
    {name: 'Kitchen'},
    {name: 'Study'},
    {name: 'Library'},
    {name: 'Billiard Room'},
    {name: 'Lounge'},
    {name: 'Ballroom'},
    {name: 'Hall'},
    {name: 'Spa'},
    {name: 'Living Room'},
    {name: 'Observatory'},
    {name: 'Theater'},
    {name: 'Guest House'},
    {name: 'Patio'},
  ];

  thePusher(rooms, roomsArray)
 
 
 // Weapons Collection
var weaponsArray = []

var weapons = [
  {name: 'rope', weight: '10'},
  {name: 'knife', weight: '8'},
  {name: 'cadelstick', weight: '2'},
  {name: 'dumbbell', weight: '30'},
  {name: 'poison', weight: '2'},
  {name: 'axe', weight: '15'},
  {name: 'bat', weight: '13'},
  {name: 'trophy', weight: '25'},
  {name: 'pistol', weight: '20'}
  ];

  thePusher(weapons, weaponsArray)




var mysteryEnvelope = []

function randomSelector(randomArray) {
  return randomArray[Math.floor(Math.random() * randomArray.length)]
}

function pickMystery(charactersArray, roomsArray, weaponsArray) {
  var mysteryArray = [];
  mysteryEnvelope.push(randsomSelector(charactersArray));
  mysteryEnvelope.push(randomSelector(roomsArray));
  mysteryEnvelope.push(randomSelector(weaponsArray));

  return mysteryEnvelope;
}
  
function revealMystery(finalCall) {
  
  return finalCall[0].first_name + ' ' + finalCall[0].last_name + 'killed Mr. Boddy using the ' + finalCall[1].name + ' in the ' + finalCall[2].name + ' !!!'

}