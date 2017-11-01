 var characters = [
   {firstName: "Jacob", 
   lastName: "Green", 
   color: "Green", 
   occupation: "Entrepreneur", 
   age: "45", 
   description: "He has a lot of connections", 
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg"

    },
   {firstName: "Doctor", 
   lastName: "Orchid", 
   color: "White", 
   occupation: "Scientist", 
   age: "26", 
   description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy", 
   image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg"
    },
    {firstName: "Victor", 
   lastName: "Plum", 
   color: "Purple", 
   occupation: "Game designer", 
   age: "22", 
   description: "Billionare video game designer", 
   image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg"
    },{firstName: "Kasandra", 
   lastName: "Scarlet" , 
   color: "Red", 
   occupation: "Movie Star", 
   age: "31", 
   description: "She is an A-list movie star with a dark past",
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg"
   
    },{firstName: "Eleanor" , 
   lastName: "Peacock" , 
   color: "Blue" , 
   occupation: "Socialité", 
   age: " 31", 
   description: "She is from a wealthy family and uses her status and money to earn popularity", 
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg"
    },
    {firstName: "Jack" , 
   lastName: "Mustard" , 
   color: "Yellow", 
   occupation: "Football Player", 
   age: "62", 
   description: "He is a former football player who tries to get by on his former glory", 
   image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg"
    },
  ]
  
  var weapons = [
   {
     weapon: "Rope",
     weight: 10,
     color: " ",
     hurtIndex: 0
   },
   {
     weapon: "Knife",
     weight: 8,
     color: " ",
     hurtIndex: 0
   },
   {
     weapon: "Candlestick",
     weight: 2,
     color: " ",
     hurtIndex: 0
   },
   {
     weapon: "Dumbbell",
     weight: 30,
     color: " ",
     hurtIndex: 0
   },
   {
     weapon: "Poison",
     weight: 2,
     color: " ",
     hurtIndex: 0
   },
   {
     weapon: "Axe",
     weight: 15,
     color: " ",
     hurtIndex: 0
   },
   {
     weapon: "Bat",
     weight: 13,
     color: " ",
     hurtIndex: 0
   },
   {
     weapon: "Trophy",
     weight: 25,
     color: " ",
     hurtIndex: 0
   },
   {
     weapon: "Pistol",
     weight: 20,
     color: " ",
     hurtIndex: 0
   },
  ]
  
  
rooms = [
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
]


function random_selector(array) {
  var index = Math.floor(Math.random()*array.length);
  return array[index]; 
}

function pick_mistery() {
  var myMistery = [];
  myMistery.push(random_selector(characters), random_selector(weapons), random_selector(rooms));
  return (myMistery);
}

function reveal_mistery(mistery) {
  console.log("Mistery Solved! " + mistery[0].firstName + " " + mistery[0].lastName + " commited a murder using a " + mistery[1].weapon + " in the " + mistery[2] + ".");
  
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);

  
