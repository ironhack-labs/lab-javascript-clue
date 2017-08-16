
var characters = [
  {firstName: "Jacob",
    lastName: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "entrepreneur"},
  {firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "scientist"},
  {firstName: "Victor", lastName: "Plum", color: "purple", description: "Billionare video game designer", age: 22, image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", occupation: "designer"},
  {firstName: "Kassandra", lastName: "Scarlet", color: "r", description: "She is an A-list movie star with a dark past", age: 31, image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg,", occupation: "actor"},
  {firstName: "Eleanor", lastName: "Peacock", color: "blue", description: "She is from a wealthy family and uses her status and money to earn popularity", age: 36, image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", occupation: "socalite"},
  {firstName: "Jack", lastName: "Mustard", color: "yellow", description: "He is a former football player who tries to get by on his former glory", age: 62, image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", occupation: "retired football player"}
  ]

  var weapons = [
    rope= {weight: 10, name:"rope"},
    knife= {weight: 8, name:"knife"},
    candlestick=  {weight: 2, name:"candlestick"},
    dumbbell=  {weight: 30, name:"dumbbell"},
    poison=  {weight: 2, name:"poison"},
    axe=  {weight: 15, name:"axe"},
    bat=  {weight: 13, name:"bat"},
    trophy=  {weight: 25, name:"trophy"},
    pistol=  {weight: 20, name:"pistol"}
  ];

  var rooms = ["dining room", "conservatory", "kitchen", "study", "library", "billiard room", "lounge", "ballroom", "hall", "spa", "living room", "observatory", "theater", "guest house", "patio"]

  function random_selector(array) {
    return array[Math.floor(Math.random()*array.length)]
}


 /*var character = random_selector(characters);
 var weapon = random_selector(weapons);
 var room = random_selector(rooms);*/

 var envelope = []

 function pick_mystery() {
  envelope.push(random_selector(characters))
  envelope.push(random_selector(weapons))
  envelope.push(random_selector(rooms))
 }

 function reveal_mystery() {
   console.log("The victim: " ,envelope[0].firstName, envelope[0].lastName, ", killed with a", envelope[1].name, "in the", envelope[2])
 }

 pick_mystery();
 reveal_mystery();
