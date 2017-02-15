var suspects = [
   {firstName: 'Jacob',
  lastName: 'Green',
  color: 'Green',
  descriptions: 'He has a lot of connections and is always willing to help people out -- for a price.'
  },

 {firstName: 'Doctor',
  lastName: 'Orchid',
  color: 'White',
  description: 'She is the adopted daugther of Mr. Boddy She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning',
  occupation: 'Biologist with a PhD in plant toxicology'
  },

  {firstName: 'Victor',
  lastName: 'Plum',
  color: 'Purple',
  description: 'A Billionaire who is embracing his new popularity.',
  occupation: 'Video Game Designer' },

  {firstName: 'Kassandra',
  lastName: 'Scarlet',
  color: 'Red',
  description: 'Her past haunts her.',
  occupation: 'A list Movie Start' },

 {firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'Blue',
  description: 'From a wealthy family and uses her status and money to win popularity',
  occupation: 'Lazy' },

 {firstName: 'Jack',
  lastName: 'Mustard',
  color: 'Yellow',
  description: 'Tries to get by on his former glory.',
  occupation: 'Former Football Player' }
]

var rooms = [ 'Dining room', 'Conservatory', 'Kitchen', 'Studio', 'Library', 'Billiard room', 'Lounge', 'Ballroom', 'Hall', 'Spa', 'Living room', 'Observatory', 'Theater', 'Guest house', 'Patio.' ];

var weapons = [
  {weapon:'Rope', weight: '2 lbs.', color: 'brown', causeOfDeath: 'Strangled'},
  { weapon:'Knife',weight: '1 lbs.', color: 'silver', causeOfDeath: 'Internal damage'},
  { weapon:'Candlestick',weight: '0.5 lbs.', color: 'white', causeOfDeath: 'Head trauma'},
  {weapon:'Dumbbell' ,weight: '10 lbs.', color: 'silver', causeOfDeath: 'Crushed skull'},
  { weapon:'Poison',weight: '3 lbs.', color: 'green', causeOfDeath: 'Asfixia'},
  {weapon:'Axe' ,weight: '0.8 lbs.', color: 'wood', causeOfDeath: 'Decapitation'},
  { weapon:'Bat',weight: '1.2 lbs.', color: 'Light brown', causeOfDeath: 'Smoothed'},
  { weapon:'Trophy',weight: '5 lbs.', color: 'Gold', causeOfDeath: 'Head trauma'},
  { weapon:'Pistol',weight: '1.3 lbs.', color: 'Black', causeOfDeath: 'Bled to death'}
]
var clue = [ suspects, rooms, weapons];
var test=[];

/*Returns a random number that will be used as array index
this will be the element or card or object in each stack  of cards */
function ramdomElementIndex(card){

  /*parameter card is array clue with 3 elements but to choose element i
   so clue[0] is the suspect, clue[1] is the room & clue[2] is the weapon*/

  var randomCardIndex = Math.floor(Math.random() * card.length);
  return randomCardIndex
}
/*Random selection of one element for each card stack*/
function caseFileConfidential(revealKiller){
  if(revealKiller==="y" || revealKiller==="yes"){
      for(var i=0;i<clue.length;i++){
        var index=(ramdomElementIndex(clue[i]))
        console.log(clue[i][index]);
        test.push(clue[i][index]);

    } policeReport()
  }else console.log("ok, but dont say sorry later")
}
function reveal(){
  var yon = prompt("Do you want to know the killer? Type y or n");
  caseFileConfidential(yon);
}
reveal();
function policeReport(){
  console.log("The killer is "+ test[0].firstName+" "+ test[0].lastName+"."+ " A "+ test[2].weapon+" was used to kill the victim in the "+  test[1]+". The victim's cause of death was "+test[2].causeOfDeath)
}




/*var randomSuspect = Math.floor(Math.random() * suspects.length);
var randomRoom = Math.floor(Math.random() * rooms.length);
var randomWeapons = Math.floor(Math.random() * weapons.length);*/
/*console.log(ramdomElementIndex(suspects));
console.log(ramdomElementIndex(rooms));
console.log(ramdomElementIndex(weapons));*/
/*function pickfromcards() {
  console.log(suspects[randomSuspect]);
  console.log(rooms[randomRoom]);
  console.log(weapons[randomWeapons]);
}*/
/*pickfromcards();*/
