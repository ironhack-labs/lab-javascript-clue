// ITERATION 1

// Suspects Collection

   var mrZueb = {
        firstName: 'Jacob',
        lastName: 'Zueb',
        occupation: 'Music producer',
        age:34,
        description:'Charismatic',
        color:'black',
        
      };
     var mrRoldano= {
        firstName: 'Luguian',
        lastName: 'Roldano',
        occupation: 'Swimmer',
        age:33,
        description:'Strong mentality',
        color:'yellow',
        
      };
      var mrGreen ={
        firstName: 'Olivier',
        lastName: 'Green',
        occupation: 'Designer',
        age:34,
        description:'Love for Detail',
        color:'purple',
        
      };
      var mrBross = {
        firstName: 'Julian',
        lastName: 'Bross',
        occupation: 'Actor',
        age:19,
        description:'Coolest man alive',
        color:'orange',
        
      };
      var mrsOreal = {
        firstName: 'Jasmine',
        lastName: 'Oreal',
        occupation: 'Dancer',
        age:34,
        description:'Like a divine',
        color:'brown',
        
      };
      var mrOcean = {
        firstName: 'Suliman',
        lastName: 'Ocean',
        occupation: 'Diamond searcher',
        age:34,
        description:'Tenacious',
        color:'red',
        
      }

var  charactersArray= [mrZueb, mrRoldano, mrGreen, mrBross, mrsOreal, mrOcean]

// Rooms Collection
const roomsArray = [
    'Kitchen',
    'Bathroom',
    "Library",
    "Dinning Room",
    "Bedroom",
    "Study Area",
    "Smoking Area",
    "Hall",
    "Guest House",
    "Spa",
    "Game room",
    "Theater",
    "Guest House",
    "Family room"
];

// Weapons Collection

var scissors = { name: "scissors", weight: 1 };
var bat = { name: "bat", weight: 3 };
var revolver = { name: "revolver", weight: 2 };
var rifle = { name: "rifle", weight: 3 };
var torpedo = { name: "torpedo", weight: 12 };
var sword = { name: "sword", weight: 9 };
var poison = { name: "poison", weight: 1 };
var cricket = { name: "cricket bat", weight: 25 };
var ashtray = { name: "ashtray", weight: 7};

const weaponsArray = [scissors,bat,revolver,rifle,torpedo,sword,poison, cricket, ];

// ITERATION 2
function selectRandom(array){

return array[Math.floor(Math.random() * suspectsArray.length)]

}
function pickMystery(){
    var  misteryEnvelope = [
    selectRandom(charactersArray),
    selectRandom(weaponsArray),
    selectRandom(roomsArray)
    ]
    return misteryEnvelope;
}
// ITERATION 3
function revealMystery(array){
   
return misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name + " killed Mr.Boddy using the " + misteryEnvelope[1].name + " in the " + misteryEnvelope[2] + "!!!!";


}