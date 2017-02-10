var mrGreen = {
  [first name: "Jacob", Last name: "Green", color: "green"]
};

Var doctorOrchid ={
  [first name: "Doctor", last name:"Orchid", color: "white"]
}
var mrPlum = {
  First name: "victor", last name: "plum", color: "purple"]
}
var Kasandra = {
  first name: "Kasandra", last name: "Scarlet", color: "red"]
}
var Eleanor = {
  [first name: "Eleanor", last name: "Peacock", color:"blue"]
}
var jack = {
  [first name: "jack", last name: "Mustard", color: "yellow"]
}

var weapons = {"Rope",
"Knife",
"Candlestick",
"Dumbbell",
"Poison",
"Axe",
"Bat",
"Trophy",
"Pistol"}

var rooms =[
"Dining room",
"Conservatory",
"Kitchen",
"Study",
"Library",
"Billiard room",
"Lounge",
"Ballroom",
"Hall",
"A spa",
"Living room",
"Observatory",
"Theater",
"Guest house",
"A patio"]

var randomnumber = Math.random();
randomnumber = randomnumber * rooms.length;
randomnumber = Math.floor(randomnumber);

console.log(rooms[randomnumber]);


return rooms [randomnumber];
