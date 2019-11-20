/* Iteration 1: Create the cards
Clue has three different card types: suspects, rooms, and weapons. We'll be given the same amount of information for any given card with the same card type.

As such, let's create an array for every card type, that is going contain the objects representing each card. These arrays should be named suspectsArray, weaponsArray, roomsArray.

All of the information you need about suspects, rooms, and weapons can be found on the DATA.md file.

Suggestion: Copy this data into the clue.js file and model it into objects nested inside your cards arrays. This is a great chance for you to experiment with IDE shortcuts, multiple-line selection, find and replace, and other great features that VSCode provides you with.

Game suspects
All of six possible suspects in Clue have a first name, last name, occupation, age, description, image and color.

To complete this iteration, you should have an array that looks something like the following:

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur'
    // ...
  }
  // ...
];
Available weapons
There are a total of nine weapons. Each of them has a different name and weight.

Mansion rooms
The game board represents the blueprints of the mansion and features fifteen different rooms. Each room will only have a name.
*/

class SuspectsArray{
    constructor(fname,lname,occup,ag,desc,ima,col){
     this.firstName = fname;
     this.lastName = lname;
     this.occupation = occup;
     this.age = ag;
     this.description = desc;
     this.image = ima;
     this.color = col;
    }
 }
     
 const susp1 = new SuspectsArray("Jacob","Green","Entrepreneur",45,"He has a lot of connections","https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg","green"); 
 
 const susp2 = new SuspectsArray("Doctor","Orchid","Scientist",26,"PhD in plant toxicology. Adopted daughter of Mr. Boddy"," http://www.radiotimes.com/uploads/images/Original/111967.jpg","white");
 
 const susp3 = new SuspectsArray("Victor","Plum","Designer",22,"Billionaire video game designer","https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg","purple");
 
 const susp4 = new SuspectsArray("Kasandra","Scarlet","Actor",31,"She is an A-list movie star with a dark past"," https://www.radiotimes.com/uploads/images/Original/111967.jpg","red");
 
 const susp5 = new SuspectsArray("Eleanor","Peacock","Socialité",36,"She is from a wealthy family and uses her status and money to earn popularity","https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg","blue");
 
 const susp6 = new SuspectsArray("Jack","Mustard","Retired Football player",62,"He is a former football player who tries to get by on his former glory"," https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg","yellow");
 
 var suspects = [susp1,susp2,susp3,susp4,susp5,susp6];
 
 
 class WeaponsArray{
   constructor(na,wei){
     this.name = na;
     this.weight = wei;
   }
 }
 
 const wep1 = new WeaponsArray("rope",10);
 const wep2 = new WeaponsArray("knife",8); 
 const wep3 = new WeaponsArray("candlestick",2);
 const wep4 = new WeaponsArray("dumbbell",30);
 const wep5 = new WeaponsArray("poison",2);
 const wep6 = new WeaponsArray("axe",15);
 const wep7 = new WeaponsArray("bat",13);
 const wep8 = new WeaponsArray("trophy",25);
 const wep9 = new WeaponsArray("pistol",20);
 
 var weapons = [wep1,wep2,wep3,wep4,wep5,wep6,wep7,wep8,wep9]; 
   
 class RoomsArray{
   constructor(nam){
     this.name = nam;
   }
 }
 
 const room1 = new RoomsArray("Dining Room");
 const room2 = new RoomsArray("Conservatory");
 const room3 = new RoomsArray("Kitchen");
 const room4 = new RoomsArray("Study");
 const room5 = new RoomsArray("Library");
 const room6 = new RoomsArray("Billiard Room");
 const room7 = new RoomsArray("Lounge");
 const room8 = new RoomsArray("Ballroom");
 const room9 = new RoomsArray("Hall");
 const room10 = new RoomsArray("Spa");
 const room11 = new RoomsArray("Living Room");
 const room12 = new RoomsArray("Observatory");
 const room13 = new RoomsArray("Theater");
 const room14 = new RoomsArray("Guest House");
 const room15 = new RoomsArray("Patio");
 
 var rooms = [room1,room2,room3,room4,room5,room6,room7,room8,room9,room10,room11,room12,room13,room14,room15,];
 
 
 /* Iteration 2: Create the mystery
 At the beginning of the game, players shuffle each of the card stacks to create a combination of suspect, weapon and room. This will be the mystery to solve.
 
 Random selector
 Declare a function named selectRandom to randomly select one element from a card stack. The function should expect an array as an argument, and should return a random element from the array.
 
 Create the mystery
 Declare a function named pickMystery that takes no arguments and returns an object with three properties, suspect, weapon and room, each holding as a value a card of that specific type. You can get a random card of each type by calling selectRandom on each card stack. 
 */
 
 function selectRandom(suspects){
   var element = Math.floor(Math.random() * (suspects.length));
   return suspects[element];
 }
 
 var cardstack = selectRandom(suspects);
 
 function pickMystery(){
   randomCard = [cardstack, selectRandom(weapons),selectRandom(rooms)];
   return randomCard;
 }
 
 pickMystery();
 
 
 /* Iteration 3: Reveal the mystery
 At last, we're ready to unveil the mystery.
 
 Declare a function named revealMystery that receives an envelope object (such as the one returned by pickMystery) as the single argument, and returns a reveal message in the following format:
 
 <FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!
 */
 
 
 
 var mysteryEnvelope = pickMystery();
     function revealMystery(mysteryEnvelope) {
         var mystery = mysteryEnvelope[0].firstName + " " + mysteryEnvelope[0].lastName + " killed Mr.Boddy using the " + mysteryEnvelope[1].name + " in the " + mysteryEnvelope[2].name + "!!!!";
         
         return mystery;
     }
 
 console.log(revealMystery(mysteryEnvelope));