var cards = {
  characters:
    [{firstName: "Jacob", lastName: "Green", color: "green"},
    {firstName: "Doctor", lastName: "Orchid", color: "white"},
    {firstName: "Victor", lastName: "Plum", color: "purple"},
    {firstName: "Cassandra", lastName: "Scarlet", color: "red"},
    {firstName: "Eleanor", lastName: "Peacock", color: "blue"},
    {firstName: "Jack", lastName: "Mustard", color: "yellow"}
  ],
  weapons:
  ["rope",
  "knife",
  "candlestick",
  "dumbbell",
  "poison",
  "axe",
  "bat",
  "trophy",
  "pistol"
  ],
  rooms:
  ["dining room",
  "conservatory",
  "kitchen",
  "study",
  "library",
  "billiard room",
  "lounge",
  "ballroom",
  "hall",
  "spa",
  "living room",
  "observatory",
  "theater",
  "guest house",
  "patio"
  ]
};

//(math.random())*cards.characters.length

function findRandIndex(){
  var randIndex = [];

  randIndex.push( Math.floor(Math.random()*cards.characters.length));
  randIndex.push( Math.floor(Math.random()*cards.weapons.length));
  randIndex.push( Math.floor(Math.random()*cards.rooms.length));

  return randIndex;
}

function drawnCards(randIndex) {
  var drawnCards = [];
  drawnCards.push(cards.characters[randIndex[0]]);
  drawnCards.push(cards.weapons[randIndex[1]]);
  drawnCards.push(cards.rooms[randIndex[2]]);

  return drawnCards;
}

var caseFileConfidential = drawnCards(findRandIndex());

function reveal(caseFileConfidential) {

console.log(caseFileConfidential[0].firstName + " " + caseFileConfidential[0].lastName + " committed murder with the " + caseFileConfidential[1] + " in the " + caseFileConfidential[2] + ".");
}

reveal(caseFileConfidential);
