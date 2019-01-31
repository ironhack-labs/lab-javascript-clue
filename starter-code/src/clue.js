 var charactersArray = [
       {
         first_name: "Jacob",
         last_name: "Green",
         color: "green",
         description: "He has a lot of connections",
         age: 45,
         image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
         occupation: "Entrepreneur"
       
     },

     {
         first_name: "Doctor",
         last_name: "Orchid",
         color: "white",
         description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
         age: 26,
         image: " http://www.radiotimes.com/uploads/images/Original/111967.jpg",
         ocupation: "Scientist" 
      },

       {
         first_name: "Victor",
         last_name: "Plum",
         color: "purple",
         description: "Billionare video game designer",
         age: 22,
         image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
         occupation: "Designer"
      },

      {
         first_name: "Kasandra",
         last_name: "Scarlet",
         color: "red",
         description: "She is an A-list movie star with a dark past",
         age: 31,
         image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
         occupation: "Actor"
     },

      {
         first_name: "Eleanor",
         last_name: "Peacock",
         color: "blue",
         description: "She is from a wealthy family and uses her status and money to earn popularity",
         age: 36,
         image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
         occupation: "Socialité"
     },

      {
         first_name: "Jack",
         last_name: "Mustard",
         color: "yellow",
         description: "He is a former football player who tries to get by on his former glory",
         age: 62,
         image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
         occupation: "Retired Football player"
     }
   ]

  var weaponsArray = [
        {name: "rope", weight: 10},
        {name: "knife", weight: 8},
        {name: "candlestick", weight: 2},
        {name: "dumbbell", weight: 30},
        {name: "poison", weight: 2},
        {name: "axe", weight: 15}, 
        {name: "bat",  weight: 13}, 
        {name: "trophy", weight: 25}, 
        {name: "pistol", weight: 20}
     ]
     

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
     ]

//
// 1. randomSelector chooses one element from a stack
//
function randomSelector(input){
  var randomNum = Math.floor(Math.random()* input.length);
  return input[randomNum];
}

//
//2. Creating the mistery 
// 
var misteryEnvelope = [];
function pickMistery(){
    misteryEnvelope.push(randomSelector(charactersArray).first_name);
    misteryEnvelope.push(randomSelector(weaponsArray).name);
    misteryEnvelope.push(randomSelector(roomsArray));
  return misteryEnvelope;
}
pickMistery();


//
// 3. Reveal the mistery
//
function revealMistery(misteryEnvelope){
 console.log(misteryEnvelope[0]  + " killed Mr.Boddy using the " + misteryEnvelope[1] + " in the " + misteryEnvelope[2] +"!!");
} ;
revealMistery(misteryEnvelope);


