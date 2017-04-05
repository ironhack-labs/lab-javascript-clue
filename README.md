![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | Clue - Mixing objects and arrays

Do you remember this classic detective game?

Clue was a very popular game in the 90's. The plot starts with Mr. Boddy being killed by one of his guests. He was the very rich owner of Tudor Close, who takes the stock character of a generic victim. After his death, Clue players have to to discover who murdered him, with what implement, and where the crime scene took place in his mansion.

Hasbro, the toy maker company and owner of Clue, [recently changed](http://www.independent.co.uk/arts-entertainment/cluedo-first-new-character-dr-orchid-mrs-white-dead-1949-hasbro-a7118351.html) some of the characters bio. Use the bio to gather information from the characters.

![Clue Picture](https://i.imgur.com/AZWieq9.jpg)

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`

## Submission Instructions

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-"

## Deliverables

Write your JavaScript in the provided file. Submitting this file will be enough.

## Iteration 1 - <small>Creating the cards</small>

Clue has three different types of cards: *suspects*, *rooms*, and *weapons*. These three types of cards are always separated. Use data structures to model and create these cards.

In order to do this, you will need to know the game's characters (possible killers), available weapons and house rooms.

### Game Characters

This Clue board game has a new roster of playable characters. All of them  have first names, last names, occupations, age, and descriptions. Here you will find a list of some of their attributes. :satisfied:

- **Jacob Green:** his color is *green*. He has a lot of connections and is always willing to help people out -- for a price.

- **Doctor Orchid:** her color is *white*. She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning *[(Wonder what happened with Mrs. White?)](http://www.telegraph.co.uk/news/2016/07/05/cluedo-kills-off-mrs-white-and-replaces-her-with-new-female-char/)*.

- **Victor Plum:** his color is *purple*. He is a billionaire video game designer who is embracing his new popularity.


- **Kasandra Scarlet:** her color is *red*. She is an A-list movie star whose past haunts her.


- **Eleanor Peacock:** her color is *blue*. She is from a wealthy family and uses her status and money to earn popularity.


- **Jack Mustard:** his color is *yellow*. He is a former football player who tries to get by on his former glory.


### Available Weapons

There are nine weapons. Keep in mind you can add new attributes like weight, color, or even how much each of these weapons hurts!

- Rope
- Knife
- Candlestick
- Dumbbell
- Poison
- Axe
- Bat
- Trophy
- Pistol

### House Rooms

The game board represents the blueprints of a mansion and features fifteen different rooms:

- Dining room
- Conservatory
- Kitchen
- Study
- Library
- Billiard room
- Lounge
- Ballroom
- Hall
- A spa
- Living room
- Observatory
- Theater
- Guest house
- A patio

Create one data structure for each of the people, weapons and rooms described above. For example:

```javascript
var mrGreen = {
    name: "Jacob Green", color:"green", bio: "He has a lot of connections and is always willing to help people out -- for a price"
}
var drOrchid ={
  name: "Dr Orchid", color: "white", bio: " She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning"
 }
var vrPlum= {
  name: "Victor Plum", color: "purple", bio: "He is a billionaire video game designer who is embracing his new popularity."
}
var kasandra = {
  name: "Kasandra Scarlet", color: "red", bio: "She is an A-list movie star whose past haunts her"
}
var ePeacock = {
  name: "Eleanor Peacock", color:"blue", bio: "She is from a wealthy family and uses her status and money to earn popularity."
}
var jMustard = {
  name: "Jack Mustard", color: "yellow", bio: "He is a former football player who tries to get by on his former glory"
}

var arraySuspects=[mrGreen, drOrchid,vrPlum,kasandra,ePeacock,jMustard]
// weapons
var rope = {
  name: "rope", damage: 8,
};
var knife = {
  name: "knife", damage: 9,
};
var candleStick = {
  name: "candlestick", damage: 7,
};
var dumbBell = {
  name: "dumbbell", damage: 9,
};
var poison = {
  name: "poison", damage: 10,
};
var axe = {
  name: "axe", damage: 10,
};
var bat = {
  name: "bat", damage: 9,
};
var trophy = {
  name: "trophy", damage: 6,
};
var pistol = {
  name: "pistol", damage: 10,
};

var knife = {
  name: "knife", damage: 9,
};
var candleStick = {
  name: "candlestick", damage: 7,
};
var dumbBell = {
  name: "dumbbell", damage: 9,
};
var poison = {
  name: "poison", damage: 10,
};
var axe = {
  name: "axe", damage: 10,
};
var bat = {
  name: "bat", damage: 9,
};
var trophy = {
  name: "trophy", damage: 6,
};
var pistol = {
  name: "pistol", damage: 10,
};

var arrayWeapons= [rope, knife, candleStick, dumbBell, poison, axe, bat, trophy, pistol];
//rooms
var diningRoom = {
  name: "dining room", size: "large",
};
var conservatory = {
  name: "conservatory", size: "small",
};
var kitchen = {
  name: "kitchen", size: "small",
};
var study = {
  name: "study", size: "medium",
};
var library = {
  name: "library", size: "small",
};
var billiardRoom = {
  name: "billiard room", size: "medium",
};
var lounge = {
  name: "lounge", size: "medium",
};
var ballRoom = {
  name: "ball room", size: "large",
};
var hall = {
  name: "hall", size: "large",
};
var spa = {
  name: "spa", size: "small",
};
var livingRoom = {
  name: "living room", size: "small",
};
var observatory = {
  name: "observatory", size: "large",
};
var theater = {
  name: "theater", size: "large",
};
var guestHouse = {
  name: "guest house", size: "large",
};
var patio = {
  name: "patio", size: "medium",
};

var arrayRooms=[ diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballRoom, hall, spa, livingRoom, observatory, theater, guestHouse, patio ];

function randomizer(input) {
 var float = Math.random() * input.length ;
 float = Math.floor(float);
 return float;
}

var killer = arraySuspects[ randomizer(arraySuspects)].name;
var weapon = arrayWeapons[randomizer(arrayWeapons)].name;
var room = arrayRooms[randomizer(arrayRooms)].name;


function theReveal(answer) {
  if (answer.toUpperCase() === "YES") {
    console.log(`The killer is ${killer} with the ${weapon} in the ${room}.`);
  } else if (answer.toUpperCase() === "NO") {
    console.log("Okay. When you're ready, refresh the page for this prompt again.");
  } else {
    console.log("That's not a valid answer. Refresh the page for this prompt again.");
  }
}

theReveal(prompt ("Would you like to reveal the mystery?"));

## Iteration 2 - <small>Creating and revealing the mystery</small>

 At the beginning of the game, players shuffle each one of the card stacks to create a combination of *suspect*, *weapon* and *room*. This will be the mystery to solve.

1. Create a method to randomly select one element from a card stack.
2. Create another function that calls the method above once for each card stack.
3. Place the “Case File Confidential” in a virtual envelope. :wink:
4. Create a method to reveal the mystery.

## Extra Resources

- [20 Mind-blowing facts about Cluedo.](http://whatculture.com/offbeat/20-mind-blowing-facts-you-didnt-know-about-cluedo)
- [Wikipedia](https://en.wikipedia.org/wiki/Cluedo)
- [Data Structures: Objects and Arrays](http://eloquentjavascript.net/04_data.html)
