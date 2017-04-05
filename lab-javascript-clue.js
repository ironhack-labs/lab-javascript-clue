var suspects = [
{firstnames:"Jacob", Lastname: "Green", Color:"green", occupations: "He has a lot of connections and is always willing to help people out -- for a price.", age:"30",description:"He is pretty"},
{firstnames:"Doctor", Lastname: "Orchid", Color:"white", occupations: "a biologist with a PhD in plant toxicology.", age:"39",description:" She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning"},
{firstnames:"Victor", Lastname: "Plum", Color:"purple", occupations: " He is a billionaire video game designer", age:"29",description:" who is embracing his new popularity."},
{firstnames:"Kasandra", Lastname: "Scarlet", Color:"red", occupations: " She is an A-list movie star", age:"20",description:"whose past haunts her"},
{firstnames:"Eleanor", Lastname: "Peacock", Color:"blue", occupations: "  She is from a wealthy family and ", age:"26",description:"She is from a wealthy family"},
{firstnames:"Jack", Lastname: "Mustard", Color:"yellow", occupations: " He is a former football player ", age:"19",description:"who tries to get by on his former glory."}
];
var rooms = [
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
"A patio",
];
var weapons= [
"Rope",
"Knife",
"Candlestick",
"Dumbbell",
"Poison",
"Axe",
"Bat",
"Trophy",
"Pistol"
];

var randkiller = Math.floor(Math.random() * suspects.length);
console.log(suspects[randkiller]);
var randweapon = Math.floor(Math.random() * weapons.length);
console.log(weapons[randweapon]);
var randroom = Math.floor(Math.random() * rooms.length);
console.log(rooms[randroom]);
