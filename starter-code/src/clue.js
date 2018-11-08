
// challenge 1 (SUM OF ARRAYS) in order to get the sum of array 
// we start by creating a function sumofNumbers and we use a foeloop to loop through the lenght of the arrys 
// ad addtion of the array is asigned to var x and return x gets the final value

function sumofArray(array) {
    var x = 0;
    
    for (var i=0; i < array.length; i++) {
     x = x + array[i];
     
    }
     return(x);
  }
  
  sumofArray([6, 12, 1, 18, 13, 16, 2, 1, 8, 10])

  // Challange 2 To find the Average we just do the same as above and return the value x/array.length

  function sumofArray(array) {
    var x = 0 
    
    for (let i = 0; i < array.length; i++) {
      x = x + array[i]
  
  
      
    }
  return(x/array.length)
    
  }
  sumofArray([2, 6, 9, 10, 7, 4, 1, 9]);  // 6

  // question why does it get a value of 0.25 if the return is placed after the x +array[i]?

// Chllange 3 

var arr = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot'
  ];
  
  var lgth = 0;
  var longest = "";
  
  for(var i=0; i < arr.length; i++){
      if(arr[i].length > longest.length){
        longest = arr[i];
          
      }      
  } 
   
  console.log(longest);

  // Challange 4

  var w = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
  ];
    
  let b =[] 
  for ( let i = 0; i < w.length; i++ ) {
    if (b.indexOf(w[i])=== -1) {
      b.push(w[i]);
    }
  }
  
  console.log(b)

  // Challange 5

  var words = [
    'machine',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'truth',
    'disobedience'
  ];
  
  function doesWordExist(checkWord, array){
     var check
     for (i = 0; i < words.length; i++){
         if (array[i] == checkWord) {
           return true;
         } else {
           checke = false;
         }
     }
     return check;
  }
  
  console.log("eating")

  // challange 6

  var words = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
  ];
  
  function numRepet(words ,array) {
    var numOccurance = 0
  
    for (let i = 0; i< arr.length; i++) {
      if (array[i] === words){numOccurance += 1;}
    }
    return numOccurance
  }
  
// Weapons Collection
var weaponsArray = [];

var mrGreen =  {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
};

var drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist"
};

var profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
};

var missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:   31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
    
};

var mrsPeacock = {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};

var mrMustard = {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:"Retired Football player"
};

var charactersArray = [mrMustard,mrsPeacock,missScarlet,profPlum,profPlum,drOrchid,mrGreen]

//var roomsArray = []

var rope = 
{ 
  name: "rope",   
  weight: 10
}

var  knife = 
{
  name :"knife",
  weight : 8
}

var candlestick = 
{
 name : "candlestick",
 weight : 8
}

var dumbbell = 
{
name : "dumbbell",
weight : 30
}

var poison = 
{
name : "poison",
weight : 2
}

var axe = 
{
name : "axe",
weight : 15
}

var bat = 
{
name: "bat",
weight : 13
}

var trophy = 
{
name : "trophy",
weight : 25
}

var pistol = 
{
name: "pistol",
weight : 20
}

var weaponsArray = [rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol];


var roomsArray = [
"Dinning Room",
"Conservatory",
"Kitchen",
"Study",
"Library",
"Billiard Room",
"Lounge",
"Ballroom",
"Hall",
"Spa",
"Living Room",
"Observatory",
"Theater",
"Guest House",
"Patio"
];


console.log (mrsPeacock.last_name + " attacked the " + drOrchid.first_name+ " with a "+ pistol.name + " and this happened in her " + roomsArray[5])



console.log ("but the "+drOrchid.first_name + " was lucky to fight back with a " + bat.name + " and escaped to the " + roomsArray[12])


//  randomSelector creating a random selector from an array of rooms


var roomsArray = [
  "Dinning Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio"
  ];

  

var randomSelector = roomsArray[Math.floor(Math.random()*roomsArray.length)];

// var  = Math.random(roomsArray) why does this return decimals insted of a string?
// and i do not understand the random picked cards so i used the roomsArray as an example.

console.log(randomSelector)

// lastly can we go over the pick mystery and reveal Mystery method 
// i think this will be important for picking cards for the memory game.

