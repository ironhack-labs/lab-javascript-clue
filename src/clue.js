//suspects

// Iteracion 1

let suspectsArray = [ 
    
    {
     name: "Jacob Green",
     occupation: "Entrepreneur",
     age: 45,
     description: "He has a lot of connections",
     image:
     "https://carboncostume.com/wordpress/wp-content/uploads/2017/10/mrgreen3.jpg",
     color: "green ",
   },
 
    {
     name: "Doctor Orchid",
     occupation: "Scientist",
     age: 26,
     description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
     image: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1124,w_2000,x_0,y_50/v1560965041/shape/mentalfloss/586055-hasbro.jpg?itok=x4QQWTxa",
     color: "white",
   },
 
 {
     name: "Victor Plum",
     occupation: "Designer",
     age: 22,
     description: "Billionaire video game designer",
     image:
     "https://vignette.wikia.nocookie.net/cluedo/images/a/a4/2016C6.jpg/revision/latest?cb=20200927103539",
     color: "purple",
   },
 
 
   {
     name: "Kasandra Scarlet",
     occupation: "Actor",
     age: 31,
     description: "She is an A-list movie star with a dark past",
     image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
     color: "red",
   },
 
   {
     name: "Eleanor Peacock",
     occupation: "Socialité",
     age: 36,
     description:
     "She is from a wealthy family and uses her status and money to earn popularity",
     image: "https://vignette.wikia.nocookie.net/cluedo/images/b/b0/2016C5.jpg/revision/latest?cb=20200927103538",
     color: "blue",
   },
 
   {
     name: "Jack Mustard",
     occupation: "Retired Football player",
     age: 62,
     description:
     "He is a former football player who tries to get by on his former glory",
     image:
     "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
     color: "yellow",
   }
    
   ]; 
 
 
 // weapons
 
  let weaponsArray = [
    
    {
     name: 'rope',
     weight: 10,
   },
 
  {
     name: 'knife',
     weight: 8,
   },
 
    {
     name: 'candlestick',
     weight: 2,
   },
 
   {
     name: 'dumbbell',
     weight: 30,
   },
 
   {
     name: 'poison',
     weight: 2,
   },
 
   {
     name: 'axe',
     weight: 15,
   },
 
   {
     name: 'bat',
     weight: 13,
   },
 
   {
     name: 'trophy',
     weight: 25,
   },
 
   {
     name: 'pistol',
     weight: 20,
   }
    
  ];
 
 
 
 // rooms
 
   let roomsArray = [
     
     {
     name: "Dining Room",
   },
 {
     name: "Conservatory",
   },
 {
     name: "Kitchen",
   },
  {
     name: "Study",
   },
   {
     name: "Library",
   },
   {
     name: "Billiard Room",
   },
    {
     name: "Lounge",
   },
  {
     name: "Ballroom",
   },
 {
     name: "Hall",
   },
  {
     name: "Spa",
   },
   {
     name: "Living Room",
   },
  {
     name: "Observatory",
   },
  {
     name: "Theater",
   },
  {
     name: "Guest House",
   },
  {
     name: "Patio",
   }

   ];

 // Iteracion 2

 function selectRandom(array) {
   return array.[Math.floor( Math.random() * array.length)];
 }

 function pickMystery() {
   let randonSuspects = selectRandom(suspectsArray);
   let randonWeapons = selectRandom(weaponsArray);
   let randonRooms = selectRandom(roomsArray);
   return   {
         suspect: randonSuspects,
         weapon: randonWeapons,
         room: randonRooms
       }
 }
 
 // Iteracion 3
 
 function revealMystery(envelope) {
   let message = ` ${envelope.suspect.name} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}`;
   return message;
 }
 
   console.log(revealMystery(pickMystery()));
 
 