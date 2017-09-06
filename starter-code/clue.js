var characters = [
    {name:"Mrgreen", color:"Green"},
    {name:"Mrorchid", color:"white"},
    {name:"MrVictorPlum", color:"Purple"},
    {name:"MissScarlet", color:"Red"},
    {name:"MissPeacock", color:"blue"},
    {name:"Mrmustard", color:"Yellow"},
     
];

var weapons = [
    {name:"Rope"},
    {name:"Knife"},
    {name:"Candlestick"},
    {name:"Dumbbell"},
    {name:"Poison"},
    {name:"Axe"},
    {name:"Bat"},
    {name:"Trophy"},
    {name:"Pistol"},

];  

var rooms = [
    {name:"Dining room"},
    {name:"Conservatory"},
    {name:"Kitchen"},
    {name:"Study"},
    {name:"Library"},
    {name:"Billiard room"},
    {name:"Lounge"},
    {name:"Ballroom"},
    {name:"Lounge"},
    {name:"Hall"},
    {name:"A spa"},
    {name:"Living"},
    {name:"Observatory"},
    {name:"Theater"},
    {name:"Guest house"},
    {name:"A patio"},
    

    
];

function random_selector(array) {
var randomIndex = parseInt(Math.random()*array.length);
  return array[randomIndex];
}


function pick_mistery() {
var mystery = {
  murderer: random_selector(characters),
  crime: random_selector(weapons),
  place:random_selector(rooms),
}
return mystery; 
}
console.log(pick_mistery());

function reveal_mistery(mistery) {
 
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
