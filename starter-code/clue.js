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

var suspects = [

    {
      firstName: "Jacob",
      lastName: "Green",
      color: "Green",
      descripcion: "He has a lot o conections",
      age: 45,
      image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
      ocupation: "entrepreneur"},

    {
      firstName: "Doctor",
      lastName: "Orchid",
      color: "White",
      descripcion: "PhD in plant toxicology. Adopted daughter of Mr.Boddy",
      age: 26,
      image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
      occupation: "Scientist"},
    {
      firstName: "Victor",
      lastName: "Plum",
      color: "purple",
      description: "Billionare video game designer",
      age: 22,
      image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
      occupation: "Designer"},
    {
      firstName: "Kasandra",
      lastName: "Scarlet",
      color: "red",
      description: "She is an A-list movie star with a dark past",
      age: 31,
      image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
      occupation: "Actor"},
    {
      firstName: "Eleanor",
      lastName: "Peacock",
      color: "blue",
      description: "She is from a wealthy family and uses her status and money to earn popularity",
      age: 36,
      image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
      occupation: "Socialité"},

   {
      firstName: "Jack",
      lastName: "Mustard",
      color: "yellow",
      description: "He is a former football player who tries to get by on his former glory",
      age: 62,
      image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
      occupation: "Retired Football player"},
]
      console.log(suspects.firstName)

  var rooms= ["Dinning Room","Conservatory","Kitchen","Study","Library","Billiard Room","Lounge","Ballroom","Hall","Spa","Living Room","Observatory","Theater","Guest House","Patio"];


  var weapons= [
    {firstName:"Rope", Weight: 10},
    {firstName:"Knife", Weight: 8},
    {firstName:"Candlestick", Weight: 2},
    {firstName:"Dumbbell", Weight: 30},
    {firstName:"Poison", Weight: 2},
    {firstName:"Axe", Weight: 15},
    {firstName:"Bat", Weight: 13},
    {firstName: "Trophy", Weight: 25},
    {firstName:"Pistol", Weight: 20},
    ];

    function random_selector(array) {
   var size = array.length;
   var numeroRandom = Math.round(Math.random()*(size - 1));
   return array[numeroRandom];
  		  }

 	 function pick_mistery(array){
   var killer = random_selector(suspects);
   var weapons2 = random_selector(weapons);
   var rooms2 = random_selector(rooms);

   var result = [killer.firstName, weapons2.firstName, rooms2]
   return result
  		  }

pick_mistery();
