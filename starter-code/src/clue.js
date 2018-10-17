// Characters
var mrGreen = {
    first_name: "Jacob",
    last_name:  "Green",
    color: "green", 
    description: "He has a lot of connections",
    age: 45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", 
    occupation:"Entrepreneur",};
  
  var drOrchid = {
  first_name:"Doctor", 
  last_name:"Orchid",
   color:"white",
   description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:26, 
    image:"       http://www.radiotimes.com/uploads/images/Original/111967.jpg",
     ocupation:"Scientist",
  };
  var profPlum ={ 
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer",};
  
  var missScarlet = {
   
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor",
  
  };
  var mrsPeacock = {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité",
  };
  var mrMustard = {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"
  };
  
  
  var weapon1 = { name: "rope"  , weight: 10};
  var weapon2 = {name : "knife", weight: 8};
  var weapon3 = { name: "candlestick", weight: 2};
  var weapon4 = { name: "dumbbell", weight: 30};
  var weapon5  = { name: "poison" ,weight: 2};
  var weapon6 = {name: "axe", weight: 15};
  var weapon7 = {name: "bat", weight: 13};
  var weapon8 = {name: "trophy", weight: 25};
  var weapon9  = {name: "pistol", weight: 20};
  
  
  var room1 =  {name: "Dinning Room"};
  var room2 =  {name: "Conservatory"};
  var room3  = {name: "Kitchen"};
  var room4 =  {name: "Study"};
  var room5 =  {name: "Library"};
  var room6 =  {name: "Billiard Room"};
  var room7  =  {name: "Lounge"};
  var room8  =  {name: "Ballroom"};
  var room9  =  {name: "Hall"};
  var room10  =  {name: "Spa"};
  var room11  =  {name: "Living Room"};
  var room12  =  {name: "Theater"};
  var room13  =  {name: "Observatory"};
  var room14  =  {name: "Guest House"};
  var room15  =  {name: "Patio"};
  //                                
  var charactersArray = [];
  charactersArray.push(drOrchid);
  charactersArray.push(mrGreen);
  charactersArray.push(profPlum);
  charactersArray.push(missScarlet);
  charactersArray.push(mrsPeacock);
  charactersArray.push(mrMustard);
  
  
  // Rooms' Collection
  var roomsArray = [];
  roomsArray.push(room1)
  roomsArray.push(room2)
  roomsArray.push(room3);
  roomsArray.push(room4);
  roomsArray.push(room5);
  roomsArray.push(room6);
  roomsArray.push(room7);
  roomsArray.push(room8);
  roomsArray.push(room9);
  roomsArray.push(room10);
  roomsArray.push(room11);
  roomsArray.push(room12);
  roomsArray.push(room13);
  roomsArray.push(room14);
  roomsArray.push(room15);
  
  // Weapons Collection
  var weaponsArray = [];
  weaponsArray.push(weapon1);
  weaponsArray.push(weapon2);
  weaponsArray.push(weapon3);
  weaponsArray.push(weapon4);
  weaponsArray.push(weapon5);
  weaponsArray.push(weapon6);
  weaponsArray.push(weapon7);
  weaponsArray.push(weapon8);
  weaponsArray.push(weapon9);
  
  
  
  function randomSelector (array) {
  return array[Math.floor(Math.random() * array.length)];
  }
  
  
  function pickMistery () { 
   var misteryEnvelope =[]
  
   misteryEnvelope.push(
    randomSelector(charactersArray),    
   randomSelector(weaponsArray),
   randomSelector(roomsArray),
   
   )
  return misteryEnvelope

  
  }
  
  var misteryEnvelope = pickMistery();
  function revealMistery (array) {
    return array[0].first_name + " " + array[0].last_name + " killed Mr.Boddy using the " + array[1].name + " in the " + array[2].name + "!!!"
  }
  console.log(revealMistery(misteryEnvelope)) 
  
