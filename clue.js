/*var suspect1 = {
  firstName: "Jacob",
  lastName: "Green"
};
var suspect2 = {
  firstName: "Doctor",
  lastName:"Orchid"
};
var suspect3 = {
  firstName: "Victor",
  lastName: "Plum"
};
var suspect4 = {
  firstName: "Kasandra",
  lastName: "Scarlet"
};
var suspect5 = {
  firstName: "Eleanor",
  lastName: "Peacock"
};
var suspect6 = {
  firstName: "Jack",
  lastName: "Mustard"
};
*/

var card = [
  [
    {suspect:'Jacob Green', color: 'green', occupation: 'barista', age:'29', description:'helpful', },
    {suspect:'Doctor Orchid', color: 'white', occupation: 'Biologist', age:'49', description:'mysterious',},
    {suspect:'Victor Plum', color: 'purple', occupation: 'Gamer', age:'23', description:'billionaire',},
    {suspect:'Kasandra Scarlet', color: 'red', occupation: 'actress', age:'27', description:'haunted',},
    {suspect:'Ealeanor Peacock', color: 'blue', occupation: 'heiress', age:'33', description:'spoiled',},
    {suspect:'Jack Mustard', color: 'yellow', occupation: 'athlete', age:'32', description:'charismatic',},
  ],
  [
    {weapon:'Rope', weight: '2lbs.', color:'brown'},
    {weapon: 'Knife', weight: '1lb', color:'silver'},
    {weapon: 'Candlestick', weight: '5lbs', color:'silver'},
    {weapon: 'Dumbbell', weight: '25lbs', color:'black'},
    {weapon: 'Poison', weight: '0lbs', color:'invisible'},
    {weapon: 'Axe', weight: '10lbs', color:'silver'},
    {weapon: 'Bat', weight: '4lbs' ,color:'brown'},
    {weapon: 'Trophy', weight: '20lbs', color:'gold'},
    {weapon: 'Pistol', weight: '3lbs', color:'black'},
  ],
  [
    {room: 'Dining room'},
    {room: 'Conservatory'},
    {room: 'Kitchen'},
    {room: 'Study'},
    {room: 'Library'},
    {room: 'Billiard Room'},
    {room: 'Lounge'},
    {room: 'Ball Room'},
    {room: 'Hall'},
    {room: 'Spa'},
    {room: 'Living Room'},
    {room: 'Onservatory'},
    {room: 'Theater'},
    {room: 'Guest House'},
    {room: 'Patio'},
  ]
];
var myArray = [card[0],[1],[2]];
var rand = myArray[Math.floor(Math.random() * myArray.length)];
console.log(myArray)
/*
for (var i = 0; i < card.length; i+=1) {
  console.log('\ncard #' + (i + 1));

for (var j = 0; j < card[i].length; j+=1) {
   student = card [i][j];
 console.log(student.suspect);
 /*console.log('Age: ' + student.age)*/
//}}
