/*

---- Characters ----

  Mr Green
  first name: Jacob
  last name:  Green
  color: green
  description: He has a lot of connections
  age: 45
  image: https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
  occupation: Entrepreneur

  Dr Orchid
  first name: Doctor
  last name: Orchid
  color: white
  description: PhD in plant toxicology. Adopted daughter of Mr. Boddy
  age: 26
  image: http://www.radiotimes.com/uploads/images/Original/111967.jpg
  occupation: Scientist

  Prof Plum
  first name: Victor
  last name: Plum
  color: purple
  description: Billionare video game designer
  age: 22
  image: https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
  occupation: Designer

  Miss Scarlet
  first name: Kasandra
  last name: Scarlet
  color: red
  description: She is an A-list movie star with a dark past,
  age: 31,
  image: https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg,
  occupation: Actor

 Mrs Peacock
  first name: Eleanor
  last name: Peacock
  color: blue
  description: She is from a wealthy family and uses her status and money to earn popularity
  age: 36
  image: https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
  occupation: Socialité

 Mr Mustard
  first name: Jack
  last name: Mustard
  color: yellow
  description: He is a former football player who tries to get by on his former glory
  age: 62
  image: https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
  occupation: Retired Football player

---- Weapons ----

Rope - Weight: 10
Knife - Weight: 8
Candlestick - Weight: 2
Dumbbell - Weight: 30
Poison - Weight: 2
Axe - Weight: 15
Bat - Weight: 13
Trophy - Weight: 25
Pistol - Weight: 20


---- Rooms ----
Dinning Room
Conservatory
Kitchen
Study
Library
Billiard Room
Lounge
Ballroom
Hall
Spa
Living Room
Observatory
Theater
Guest House
Patio

*/

function random_selector(array) {

}

function pick_mistery() {

}

function reveal_mistery(mistery) {

}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);





var  person = ["Mr Green","Dr Orchid","Prof Plum","Miss Scarlet","Mrs Peacock"," Mr Mustard"
];

var descriptionOfPerson = [
  " description: He has a lot of connections"
,"description: PhD in plant toxicology. Adopted daughter of Mr. Boddy"
,"description: Billionare video game designer",
"description: She is an A-list movie star with a dark past,",
"description: She is from a wealthy family and uses her status and money to earn popularity",
"description: He is a former football player who tries to get by on his former glory"
];

var color = [
  "green","white","purple","red","blue","yellow"
  ];






var allPersonCards= []



var personCard = {}












var mrgreen = {
  name:"Jacob Green",
  desc:" He has a lot of connections",
  color:"green"

}




var drorchid = {
  name:"Doctor Orchid",
  desc:" PhD in plant toxicology. Adopted daughter of Mr. Boddy ",
  color:"white"

}

var profplum = {
  name:"Viktro Plum",
  desc:" Billionare video game designer",
  color:"purple"
}

var missscarlet = {
  name:"Kasandra Scarlet",
  desc:" She is an A-list movie star with a dark past,",
  color:"red"
}

var mrspeacock = {
  name:"Elenor Peacock",
  desc:" She is from a wealthy family and uses her status and money to earn popularity",
  color:"blue"
}

var mrmustard = {
  name:"Jack Mustard",
  desc:" He is a former football player who tries to get by on his former glory",
  color:"yellow"
}

var personCard = [mrgreen,drorchid,profplum,missscarlet,mrspeacock,mrmustard]
console.log(personCard)


var rooms = ["Dinning Room",
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



var rope ={Weight: 10} 
var knife={Weight: 8}
var candlestick ={Weight: 8}
var dumbbell={Weight: 30}
var poison={Weight: 2}
var axe={Weight: 15}
var bat={Weight: 13}
var trophy={Weight: 25}
var pistol={Weight: 20}

var weapons= [rope,knife,candlesticks,dumbbell,poison,axe,bat,trophy,pistol]



Math.random()
Math.random()
Math.random()






 /* personCard.name=person;

  personCard.desc=descriptionOfPerson;

  personCard.color=colorOfPerson;






var i = 0




var criteria = [person,descriptionOfPerson,colorOfPerson];

criteria[i].forEach( function (element)  {

  personCard.name=person[i];
  personCard.desc=descriptionOfPerson[i];
  personCard.color=colorOfPerson[i];

 allPersonCards[i] = personCard;

  //{allPersonCards.push( personCard )}




  i++;

  console.log(personCard);

} );

console.log(personCard)
console.log(allPersonCards)



//personCard.name=person[i]







//personCard.criteria[i] = ""

*/
