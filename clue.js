var suspectsIndex = Math.floor(Math.random() * 5 + 1);
var roomsIndex = Math.floor(Math.random() * 14 + 1);
var weaponsIndex = Math.floor(Math.random() * 8 + 1);
var cards = {
    suspects: [
                {firstName:"Jacob", lastName: "Green", color: "green", description:"He has a lot of connections and is always willing to help people out -- for a price."},
                {firstName:"Doctor", lastName: "Orchid", color: "white", description:"She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning"},
                {firstName:"Victor", lastName: "Plum", color: "purple", description:"He is a billionaire video game designer who is embracing his new popularity."},
                {firstName:"Kasandra", lastName: "Scarlet", color: "red", description:"She is an A-list movie star whose past haunts her."},
                {firstName:"Eleanor", lastName: "Peacock", color: "blue", description:"She is from a wealthy family and uses her status and money to earn popularity."},
                {firstName:"Jack", lastName: "Mustard", color: "yellow", description:"He is a former football player who tries to get by on his former glory."},
            ],

      rooms: ["Dining room", "Conservatory", "Kitchen", "Study", "Library", "Billiard room", "Lounge", "Ballroom", "Hall", "A spa", "Living room","Observatory", "Theater", "Guest house", "A patio"],

      weapons: [
                    {name:"rope", color:"lightBrown", damage:5},
                    {name:"knife", color:"silver", damage:12},
                    {name:"candlestick", color:"copper", damage:8},
                    {name:"dumbbell", color:"grey", damage:9},
                    {name:"poison", color:"purple", damage:16},
                    {name:"axe", color:"rusty", damage:14},
                    {name:"bat", color:"brown", damage:11},
                    {name:"trophy", color:"gold", damage:8},
                    {name:"pistol", color:"black", damage:20},
                ],
}
function cardPick(){
  for (var i = 0; i< 1; i++){
    console.log(cards.suspects[suspectsIndex]);
    console.log(cards.rooms[roomsIndex]);
    console.log(cards.weapons[weaponsIndex]);
  }
}

var envelope = {
  CaseFileConfidential: cards.suspects[suspectsIndex].lastName + " in the " + cards.rooms[roomsIndex] + " with " + cards.weapons[weaponsIndex].name + " for " + cards.weapons[weaponsIndex].damage + " damage. "
}
console.log(envelope.CaseFileConfidential);
