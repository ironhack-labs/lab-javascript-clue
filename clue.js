// Iteration 1 - Creating the cards

// Array suspects with object elements that represent characters
var suspects = [
 { firstName:"Jacob", lastNanme:"Green", occupation:"unknown", age:"unknown", color:"green", description:"He has a lot of connections and is always willing to help people out -- for a price.", image:"unknown"},

 {firstName:"Orchid", lastNanme:"Boddy", occupation:"doctor", age:"unknown", color:"white", description:"privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning", image:"unknown"},

 {firstName:"Victor", lastNanme:"Plum", occupation:"video game design", age:"unknown", color:"purple", description:"billionaire video game designer who is embracing his new popularity.", image:"unknown"},

  {firstName:"Kasandra", lastNanme:"Scarlet", occupation:"actress", age:"unknown", color:"red", description:"an A-list movie star whose past haunts her.", image:"unknown"},

  {firstName:"Eleanor", lastNanme:"Peacock", occupation:"unknown", age:"unknown", color:"blue", description:"from a wealthy family and uses her status and money to earn popularity.", image:"unknown"},

  {firstName:"Jack", lastNanme:"Mustard", occupation:"former football player", age:"unknown", color:"yellow", description:"former football player who tries to get by on his former glory.", image:"unknown"}
]

// Array weapons with object elements that represent weapons
var weapons = [
  {weaponName:"Rope", weight:"", color:"", power:""},
  {weaponName:"Knife", weight:"", color:"", power:""},
  {weaponName:"Candlestick", weight:"", color:"", power:""},
  {weaponName:"Dumbbell", weight:"", color:"", power:""},
  {weaponName:"Poison", weight:"", color:"", power:""},
  {weaponName:"Axe", weight:"", color:"", power:""},
  {weaponName:"Bat", weight:"", color:"", power:""},
  {weaponName:"Trophy", weight:"", color:"", power:""},
  {weaponName:"Pistol", weight:"", color:"", power:""}
]

// Array rooms with string elements that represent rooms
var rooms = [
  "Dining room", "Conservatory", "Kitchen", "Study", "Library", "Billiard room",
  "Lounge", "Ball Room", "Hall", "A spa", "Living room", "Observatory", "Theater",
  "Guest house", "a patio"
]

//Iteration 2 - Creating and revealing the mystery

// Function to randomly select one element from a card stack.
function selectElementCardStack(element) {
  randomNumber = Math.random();
  randomNumber = randomNumber * element.length;
  randomNumber = Math.floor(randomNumber);
  return element[randomNumber];
}

// Function that calls the method selectElementCardStack once for each card stack,
// and create an array with the secret stack
function selectCardStack(suspects, weapons, rooms) {
  var caseFileConfidential = [];
  var randomSuspect = selectElementCardStack(suspects);
  var randomWeapon = selectElementCardStack(weapons);
  var randomRoom = selectElementCardStack(rooms);
  caseFileConfidential.push(randomSuspect);
  caseFileConfidential.push(randomWeapon);
  caseFileConfidential.push(randomRoom);
  return caseFileConfidential;
}

// virtualEnvelope store the card stack that randomly were created
var virtualEnvelope = selectCardStack(suspects, weapons, rooms)

// Main Clue Function : Function that prompt the user to guest the suspect.

function clue (){
   suspectName= virtualEnvelope[0].firstName + " " + virtualEnvelope[0].lastNanme
   userSuspect= prompt("Your suspect is " + virtualEnvelope[0].description + " , he/she killed a person with a " + virtualEnvelope[1].weaponName + " in " + virtualEnvelope[2] + ". What is the name of the killer?");


    if (userSuspect === suspectName){
       console.log("Yes!!!! You got it right")
    } else {
      var answer = prompt("Wronnnnnnnnnnggggggggg, Do you want the answer? (yes or not)")
        if (answer === "yes" || answer === "Yes"){
          console.log("The killer is " + suspectName)
        } else if ( answer ==="no" || answer === "No") {
          console.log("I'll tell you anyway, the killer is " + suspectName)
        } else {
          clue ()
        }
    }
  }


// main
clue()
