//Char
var mrGreen={name: "green"};
var drOrchid={ name:"white"};
var vPlum={ name:"purple"};
var kScarlet={ name:"red"};
var ePeacock={ name:"blue"};
var jMustard={ name:"yellow"};
var chars=[mrGreen,drOrchid,vPlum,kScarlet,ePeacock,jMustard];
//Weapons
var rope={name:"cuerda"};
var knife={name:"knife"};
var candlestick={name:"candlestick"};
var dumbbell={name:"dumbbell"};
var poison={name:"poison"};
var axe={name:"axe"};
var bat={name:"bat"};
var trophy={name:"trophy"};
var pistol={name:"pistol"};
var weapons=[rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol];
///Rooms
var diningRoom={
  name: "DiningRoom"
};
var conservatory={
  name: "conservatory"
};
var kitchen={
  name:"kitchen"
};
var library={
  name: "library"
};
var billardRoom={
  name: "billardRoom"
};
var lounge={
  name:"lounge"
};
var ballroom={
  name: "ballroom"
};
var hall={
  name: "hall"
};
var spa={
  name: "spa"
};
var livingRoom={
  name:"livingRoom"
};
var observatory={
  name:"observatory"
};
var theater={
  name:"theater"
};
var guestHouse={
  name:"guestHouse"
};
var patio={
  name:"patio"
};
var places=[diningRoom,conservatory,kitchen,library,billardRoom,lounge,ballroom,hall,spa,livingRoom,observatory,theater,guestHouse,patio];
//Iteracion 2
var cardStack={
  caracters: chars,
  armas: weapons,
  lugares: places
};
//var longRooms= places.length;
//var longChars= chars.length;
//var longWeapons=weapons.length;
function pickCard(cardType){
 return cardType[Math.floor((Math.random()*cardType.length))].name;

}

//console.log(pickCard(places, longRooms)+" "+pickCard(chars, longChars)+" "+pickCard(weapons,longWeapons));
//console.log(cardStack.caracters[0].color);

function selecMurder(stack){
console.log("The Murder Happened in "+pickCard(stack.lugares)+" The killer was "+pickCard(stack.caracters)+" And the weapon was "+pickCard(stack.armas));
//pickCard (stack.lugares, longRooms);
//pickCard (stack.caracters, longChars);
//pickCard (stack.armas, longWeapons);
}
selecMurder(cardStack);
