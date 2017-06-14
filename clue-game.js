//Iteration 1

//Creating subject cards stack
function createSuspect (subject, firstName,lastName,occupations,age,color,descriptions) {
  var subject={};
  subject.firstName=firstName;
  subject.lastName=lastName;
  subject.occupations=occupations;
  subject.age=age;
  subject.color=color;
  subject.descriptions=descriptions;
return subject;

};


mrGreen = createSuspect("mrGreen","Jacob","Green","helper",42,"green","He has a lot of connections and is always willing to help people out -- for a price.");
mrOrchid = createSuspect("mrOrchid","Doctor","Orchid","biologist",42,"white","She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning");
mrPlum = createSuspect("mrPlum","Victor","Plum","video game designer",42,"purple","He is a billionaire video game designer who is embracing his new popularity.");
msScarlet= createSuspect("msScarlet","Kasandra","Scarlet","actress",36,"red","She is an A-list movie star whose past haunts her.");
msPeacock= createSuspect("msPeacock","Eleanor","Peacock","rrpp",40,"blue","She is from a wealthy family and uses her status and money to earn popularity.");
mrMustard= createSuspect("mrMustard","Jack","Mustard","football player",25,"yellow","He is a former football player who tries to get by on his former glory.");

var suspectsCards= [
  mrMustard,
  msScarlet,
  msPeacock,
  mrPlum,
  mrGreen,
  mrOrchid
  
];
  
//Creating weapons cards stack

var Rope = {
  name : "Rope",
  weight : 0,
  color : "",
  damage: 0
}

var Knife = {
  name : "Knife",
  weight : 0,
  color : "",
  damage: 0
}

var Candlestick = {
  name : "Candlestick",
  weight : 0,
  color : "",
  damage: 0
}

var Dumbbell = {
  name : "Dumbbell",
  weight : 0,
  color : "",
  damage: 0
}

var Poison ={
  name : "Poison",
  weight : 0,
  color : "",
  damage : 0
}

var Axe = {
  name : "Axe",
  weight : 0,
  color : "",
  damage: 0
}

var Bat = {
  name : "Rope",
  weight : 0,
  color : "",
  damage : 0
}

var Trophy ={
  name : "Rope",
  weight : 0,
  color : "",
  damage : 0
}

var Pistol={
  name : "Rope",
  weight : 0,
  color : "",
  damage :0
}

var weaponsCards =[Rope,Knife, Candlestick, Dumbbell, Poison, Axe, Bat, Trophy, Pistol]


//Creating rooms cards stack


var roomsCards = ["Dining room", "Conservatory", "Kitchen", "Study", "Library", "Billiard room", "Lounge", "Ballroom", "Hall", "A spa", "Living room", "Observatory", "Theater", "Guest house", "A patio"]



//Iteration 2


//1
function selectCard(array) {
  myIndex=Math.random()*array.length;
  myIndex=Math.floor(myIndex);
  return array[myIndex];
}

//2 and 3
function getMystery(suspectsCards,weaponsCards,roomsCards) { 
  var mistery = {};
  mistery.suspect=selectCard(suspectsCards);
  mistery.weapons=selectCard(weaponsCards);
  mistery.room=selectCard(roomsCards);
  return mistery;
}


//4
function solveMistery(mistery){
   var reveal= "The killer is" + " " + mistery.suspect.firstName +" "+ mistery.suspect.lastName + "," + " our friend " + mistery.suspect.firstName + " " + "used a " + mistery.weapons.name + " and the murder happened in " + mistery.room ;
   return reveal
}



mistery=getMystery(suspectsCards,weaponsCards,roomsCards);
console.log(solveMistery(mistery));



