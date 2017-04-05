var characters=[
  {name:"Jacob " ,lastNames:"Green " ,color:"green " ,occupations:" " ,age:" " ,descriptions:"He has a lot of connections and is always willing to help people out -- for a price." ,},
  {name:" " ,lastNames:"Orchid " ,color:"White " ,occupations:"Doctor " ,age:"" ,descriptions:" She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning " ,},
  {name:"Victor " ,lastNames:"Plum" ,color:"Purple " ,occupations:"video game designer " ,age:"" ,descriptions:"e is a billionaire video game designer who is embracing his new popularity. " ,},
  {name:"Kasandra " ,lastNames:"Scarlet " ,color:"Red " ,occupations:"A-list movie star " ,age:"" ,descriptions:"whose past haunts her " ,},
  {name:"Eleanor " ,lastNames:"Peacock " ,color:"Blue " ,occupations:" " ,age:"" ,descriptions:"She is from a wealthy family and uses her status and money to earn popularity. " ,},
  {name:"Jack " ,lastNames:"Mustard " ,color:"yellow " ,occupations:"football player " ,age:"" ,descriptions:"tries to get by on his former glory. " ,},
];
var weapons=[
  {name:"Rope"},
  {name:"knife"},
  {name:"Candlestick"},
  {name:"Dumbbell"},
  {name:"Poison"},
  {name:"Axe"},
  {name:"Bat"},
  {name:"Trophy"},
  {name:"Pistol"},
];
var houseRooms=[
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

function getAcard(mace){
  return mace[Math.floor(Math.random() * mace.length)];
}
getAcard(houseRooms);
//console.log(getAcard(houseRooms));

function getEachMace(){
  return [getAcard(characters),getAcard(weapons),getAcard(houseRooms)];
}
//console.log(getEachMace());

var confidential= getEachMace();

console.log(confidential);

//esto lo hacemos para poder poner un estado en las armas por ejemplo, romperla.

var weaponElected="";
weaponElected=prompt("choose the weapon to broke");


function weaponAtribute(weaponElected,key,value)  {
  weapons.forEach(function(weapon){
    if(weapon.name == weaponElected){
      weapon[key]=value;
    }
  });
}
//weapons[1].status="down";

weaponAtribute(weaponElected,'status','down');
console.log(weapons);
