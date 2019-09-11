![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# JS | Clue - Mixing objects and arrays

Do you remember de classic detective game?

Clue was a very popular game in the 90's. The plot starts with Mr. Boddy being killed by one of his guests. He was the very rich owner of Tudor Close, who takes the stock character of a generic victim. After his dead, Clue players have to discover who murdered him, with what implement, and where the crime scene took place in his mansion.

Hasbro, the toy maker company and owner of Cluedo, [recently changed](http://www.independent.co.uk/arts-entertainment/cluedo-first-new-character-dr-orchid-mrs-white-dead-1949-hasbro-a7118351.html) some of the characters bio. Use the bio to gather information from the characters.

![Clue Picture](https://i.imgur.com/AZWieq9.jpg=300)

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Deliverables

Write your JavaScript in the provided `src/clue.js` file.

## Iteration 1 - <small>Creating the cards</small>

Clue has three different types of cards: _suspects_, _rooms_, and _weapons_. These three types of cards are always separated. Use data structures to model and create these cards.

In order to do this, you will need to know the game's characters (possible killers), available weapons and house rooms.

### Game Characters

This Clue board game has a new roster of playable characters. All of them have first names, last names, occupations, age, description, and images. On the `clue.js` file you will find all the info about them.

### Available Weapons

There are nine weapons. Each of them has different weight, same as the characters, you will find all the info needed on the `clue.js` file.

### House Rooms

The game board represents the blueprints of a mansion and features fifteen different rooms. Yes, you guess, on the `clue.js` file you have all the info.

### Data Structuring

Create one data structure for each of the people, weapons, and rooms described above. Each document must have all the info.

After creating the data structure, create an array for each type of data and push every document into their corresponding array.

For example:

```javascript
const mrGreen = {
  first_name: "Jacob",
  last_name: "Green"
  // ...
};

const rope = {
  // properties
};

// etc
```

After creating the data structure, put every document into their corresponding array. `charactersArray`, `weaponsArray`, `roomsArray`.

## Iteration 2 - <small>Creating the mystery</small>

At the beginning of the game, players shuffle each one of the card stacks to create a combination of _suspect_, _weapon_ and _room_. This will be the mystery to solve.

### Remember our tests!

We will be working with test again! You need to open the `SpecRunner.html` file in order to see them. The following instructions will guide you through all the functions and functionality your code should have to pass all the tests.


### Random Selector

Create a function `randomSelector` to randomly select one element from a card stack. The method should receive an `array` as an argument, and return randomly one of the elements of the `array`.

### Create the mystery

We need to create a `pickMystery` function that will call `randomSelector` for each card stack, and return an object with the 3 picked cards, a _suspect_, a _weapon_ and a _room_. Our mystery should be stored on a `mysteryEnvelope` variable.

## Iteration 3 - <small>Revealing the mystery</small>

Finally, we need to reveal the mystery. Create a `revealMystery` function, that will receive our `mysteryEnvelope` object as an argument and return the revealed mystery like this:

**\<FIRST NAME\> \<LAST NAME\> killed Mr. Boddy using the \<WEAPON\> in the \<ROOM\>!!!!**

## Extra Resources

- [20 Mind-blowing facts about Cluedo.](http://whatculture.com/offbeat/20-mind-blowing-facts-you-didnt-know-about-cluedo)
- [Wikipedia](https://en.wikipedia.org/wiki/Cluedo)
- [Data Structures: Objects and Arrays](http://eloquentjavascript.net/04_data.html)
